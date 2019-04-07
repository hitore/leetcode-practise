/* 
给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。

说明: 叶子节点是指没有子节点的节点。

思路：DFS深度优先遍历

2019-04-01
114 / 114 个通过测试用例
执行用时 : 232 ms, 在Path Sum II的JavaScript提交中击败了3.70% 的用户
内存消耗 : 45.8 MB, 在Path Sum II的JavaScript提交中击败了0.00% 的用户
*/

var pathSum = function(root, sum) {
    if (root === null) return [];
    let res = [];

    function map(node, path = [], total = 0) {
        if (node === null) {
            if (total === sum) {
                res.push(path);
            }
            return;
        }
        if (node.left === null && node.right === null) {
            map(null, [...path, node.val], total + node.val);
        } else {
            if (node.left) {
                map(node.left, [...path, node.val], total + node.val);
            }
            if (node.right) {
                map(node.right, [...path, node.val], total + node.val);
            }
        }
    }

    map(root);
    return res;
};