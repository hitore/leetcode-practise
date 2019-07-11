/* 
给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。

说明：
你可以假设 k 总是有效的，1 ≤ k ≤ 二叉搜索树元素个数。

2019-07-11
91 / 91 个通过测试用例
执行用时 : 136 ms, 在Ugly Number II的JavaScript提交中击败了98.54% 的用户
内存消耗 : 36.6 MB, 在Ugly Number II的JavaScript提交中击败了43.00% 的用户
*/

var kthSmallest = function(root, k) {
    let res = null;

    function map(node) {
        if (node === null || res !== null) return;
        map(node.left);
        k -= 1;
        if (k === 0) {
            res = node.val;
            return;
        }
        map(node.right);
    }

    map(root);

    return res;
};