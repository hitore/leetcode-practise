/* 
给定一个二叉树，计算整个树的坡度

一个树的节点的坡度定义即为，该节点左子树的结点之和和右子树结点之和的差的绝对值。空结点的的坡度是0。

整个树的坡度就是其所有节点的坡度之和。

2019-06-20
75 / 75 个通过测试用例
执行用时 : 116 ms , 在所有JavaScript提交中击败了 96.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 26.62% 的用户
*/

var findTilt = function(root) {
    if (root === null) return 0;
    let res = 0;

    function map(node) {
        if (node === null) return 0;
        let left = map(node.left);
        let right = map(node.right);
        res += Math.abs(left - right);
        return left + right + node.val;
    }
    
    map(root);
    return res;
};