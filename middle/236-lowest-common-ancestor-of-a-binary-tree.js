/* 
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

2019-07-11
31 / 31 个通过测试用例
执行用时 : 136 ms, 在Ugly Number II的JavaScript提交中击败了35.54% 的用户
内存消耗 : 36.6 MB, 在Ugly Number II的JavaScript提交中击败了9.00% 的用户
*/

var lowestCommonAncestor = function(node, p, q) {
    if (node === null || node === p || node === q) return node;
    let left = lowestCommonAncestor(node.left, p, q);
    let right = lowestCommonAncestor(node.right, p, q);
    if (left && right) return node;
    if (left) return left;
    if (right) return right;
};