/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
 * 
 * Accepted
  √ 36/36 cases passed (120 ms)
  √ Your runtime beats 54.27 % of javascript submissions
  √ Your memory usage beats 17.86 % of javascript submissions (42.1 MB)
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  if (val > root.val) return searchBST(root.right, val);
  return searchBST(root.left, val);
};

