/* 
给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过根结点。

2019-06-14
106 / 106 个通过测试用例
执行用时 : 116 ms , 在所有JavaScript提交中击败了 90.16% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 50.00% 的用户
*/

var diameterOfBinaryTree = function(root) {
    let res = 0;

    function map(node) {
        if (node === null) return 0;
        let left = map(node.left);
        let right = map(node.right);
        res = Math.max(res, left + right);
        return Math.max(left, right) + 1;
    }

    map(root);

    return res;
};