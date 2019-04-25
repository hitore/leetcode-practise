/* 
给定一个二叉树，返回它的 前序 遍历。

2019-04-24
68 / 68 个通过测试用例
执行用时 : 92 ms, 在Binary Tree Preorder Traversal的JavaScript提交中击败了70.39% 的用户
内存消耗 : 33.7 MB, 在Binary Tree Preorder Traversal的JavaScript提交中击败了23.32% 的用户
*/
var preorderTraversal = function(root) {
    let res = [];

    function map(node) {
        if (node === null) return;
        res.push(node.val);
        map(node.left);
        map(node.right);
    }
    map(root);
    
    return res;
};