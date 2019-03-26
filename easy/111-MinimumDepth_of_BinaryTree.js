/* 
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

2019-03-26
41 / 41 个通过测试用例
执行用时 : 152 ms, 在Minimum Depth of Binary Tree的JavaScript提交中击败了10.31% 的用户
内存消耗 : 37.4 MB, 在Minimum Depth of Binary Tree的JavaScript提交中击败了0.00% 的用户的用户
*/

var minDepth = function(root) {
    if (root === null) return 0;
    let left = minDepth(root.left);
    let right = minDepth(root.right);
    if (left === 0 || right === 0) {
        return Math.max(left, right) + 1;
    } else {
        return Math.min(left, right) + 1;
    }
};