/* 
给定一个二叉树，判断其是否是一个有效的二叉搜索树。

思路：递归

2019-03-25
75 / 75 个通过测试用例
执行用时 : 124 ms, 在Validate Binary Search Tree的JavaScript提交中击败了27.63% 的用户
内存消耗 : 37.2 MB, 在Validate Binary Search Tree的JavaScript提交中击败了0.00% 的用户
*/

var isValidBST = function(node) {
    function map(node, min = -Number.MAX_VALUE, max = Number.MAX_VALUE) {
        if (node === null) return true;
        if (node.val <= min || node.val >= max) return false;
        return map(node.left, min, node.val) && map(node.right, node.val, max);
    }
    return map(node);
};