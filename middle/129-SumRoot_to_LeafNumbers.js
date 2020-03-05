/* 
给定一个二叉树，它的每个结点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。

例如，从根到叶子节点路径 1->2->3 代表数字 123。

计算从根到叶子节点生成的所有数字之和。

说明: 叶子节点是指没有子节点的节点

2019-04-21
110 / 110 个通过测试用例
执行用时 : 92 ms, 在Sum Root to Leaf Numbers的JavaScript提交中击败了89.09% 的用户
内存消耗 : 33.9 MB, 在Sum Root to Leaf Numbers的JavaScript提交中击败了66.67% 的用户
*/

var sumNumbers = function(root) {
    if (root === null) return 0;
    let res = 0;
    function map(node, str = '') {
        if (node.left) map(node.left, str + node.val);
        if (node.right) map(node.right, str + node.val);
        if (node.left === null && node.right === null) {
            str += node.val;
            res += (+str);
        }
    }
    map(root);
    return res;
};