/* 
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
示例:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6
解释: 节点 2 和节点 8 的最近公共祖先是 6。

2019-03-20
27 / 27 个通过测试用例
执行用时 : 168 ms, 在Lowest Common Ancestor of a Binary Search Tree的JavaScript提交中击败了7.06% 的用户
内存消耗 : 43.3 MB, 在Lowest Common Ancestor of a Binary Search Tree的JavaScript提交中击败了0.00% 的用户
*/

// 思路：根据二叉搜索树的特点，若两个指定节点比root小，则两个都在左子树里。
// 若两个指定节点比root大，则两个都在右子树里。若一大一小，则root为最近的公共祖先。

var lowestCommonAncestor = function(root, p, q) {
    if (root === null) {
        return root;
    }
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root;
    }
};