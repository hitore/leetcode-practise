/* 
给定一个二叉树，返回所有从根节点到叶子节点的路径。
说明: 叶子节点是指没有子节点的节点。

思路：BFS广度优先遍历，把走过的节点都记录下来，碰到叶子节点时，把结果添加到数组里面。

2019-03-19
209 / 209 个通过测试用例
执行用时 : 140 ms, 在Binary Tree Paths的JavaScript提交中击败了7.30% 的用户
内存消耗 : 35.1 MB, 在Binary Tree Paths的JavaScript提交中击败了0.00% 的用户
*/

// const { createTree } = require('../utils/common.js');
// const root = createTree([1,2,3,null,5,null,7]);

var binaryTreePaths = function(root) {
    let res = [];
    function map(n, path = []) {
        if (!n) return;
        path.push(n.val);
        if (n.left || n.right) {
            if (n.left) map(n.left, [...path]);
            if (n.right) map(n.right, [...path]);
        } else {
            res.push(path.join('->'));
        }
    }
    map(root);
    return res;
};