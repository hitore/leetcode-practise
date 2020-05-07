/*
给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

2020-05-07
221 / 221 个通过测试用例
执行用时 : 76 ms, 在所有 JavaScript 提交中击败了81.15% 的用户
内存消耗 : 37.2 MB, 在所有 JavaScript 提交中击败了99.98% 的用户
*/

var rightSideView = function(root) {
  let res = [];

  function dfs(node, deep = 0) {
    if (!node) return;
    res[deep] = node.val;
    dfs(node.left, deep + 1);
    dfs(node.right, deep + 1);
  }

  dfs(root);
  return res;
}
