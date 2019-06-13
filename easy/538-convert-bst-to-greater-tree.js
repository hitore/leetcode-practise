/* 
给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/convert-bst-to-greater-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

2019-06-13
212 / 212 个通过测试用例
执行用时 : 172 ms , 在所有JavaScript提交中击败了 34.29% 的用户
内存消耗 : 40.6 MB , 在所有JavaScript提交中击败了 13.79% 的用户
*/

var convertBST = function(root) {
    let sum = 0;

    function map(node) {
        if (node === null) return;
        map(node.right);
        node.val += sum;
        sum = node.val;
        map(node.left);
    }

    map(root);
    
    return root;
};