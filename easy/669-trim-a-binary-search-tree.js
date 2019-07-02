/* 
给定一个二叉搜索树，同时给定最小边界L 和最大边界 R。通过修剪二叉搜索树，使得所有节点的值在[L, R]中 (R>=L) 。你可能需要改变树的根节点，所以结果应当返回修剪好的二叉搜索树的新的根节点。

2019-07-02
100 / 100 个通过测试用例
执行用时 : 128 ms , 在所有JavaScript提交中击败了 84.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 64.62% 的用户
*/

var trimBST = function(root, L, R) {
    if (root === null) return null;
    if (root.val > R) return trimBST(root.left, L, R);
    if (root.val < L) return trimBST(root.right, L, R); 
    root.left = trimBST(root.left, L, R);
    root.right = trimBST(root.right, L, R);
    return root;
};