/* 
给定一个二叉树，原地将它展开为链表。

例如，给定二叉树

    1
   / \
  2   5
 / \   \
3   4   6
将其展开为：

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6

2019-04-02
225 / 225 个通过测试用例
执行用时 : 100 ms, 在Flatten Binary Tree to Linked List的JavaScript提交中击败了39.13% 的用户
内存消耗 : 34.7 MB, 在Flatten Binary Tree to Linked List的JavaScript提交中击败了0.00% 的用户
*/

var flatten = function(root) {
    if (root === null) return;
    if (root.left) {
        let node = root.left;
        while (node.right) {
            node = node.right;
        }
        node.right = root.right;
        root.right = root.left;
        root.left = null;
    }
    flatten(root.right);
};