/* 
给定一个非空二叉树，返回其最大路径和。

本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。

2019-07-19
93 / 93 个通过测试用例
执行用时 : 872 ms, 在Perfect Squares的JavaScript提交中击败了94.15% 的用户
内存消耗 : 37.2 MB, 在Perfect Squares的JavaScript提交中击败19.23% 的用户
*/

var maxPathSum = function(root) {
    let max = -Number.MAX_VALUE;

    function dps(node) {
        if (node === null) return 0;
        let left = dps(node.left);
        let right = dps(node.right);
        max = Math.max(max, node.val + left + right, node.val, node.val + left, node.val + right);
        return Math.max(node.val + left, node.val + right, node.val);
    }

    dps(root);

    return max;
};