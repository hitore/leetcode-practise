/* 
Given a binary search tree with non-negative values,
find the minimum absolute difference between values of any two nodes

2019-06-09
186 / 186 个通过测试用例
执行用时 : 88 ms, 在Minimum Absolute Difference in BST的JavaScript提交中击败了100.00% 的用户
内存消耗 : 37.9 MB, 在Minimum Absolute Difference in BST的JavaScript提交中击败了62.07% 的用户
*/

var getMinimumDifference = function(root) {
    let num = null;
    let lastNum = null;
    let min = Number.MAX_VALUE;

    function ldr(node) {
        if (node === null) return;
        ldr(node.left);

        lastNum = num;
        num = node.val;
        if (lastNum !== null) {
            min = Math.min(min, Math.abs(num - lastNum));
        }

        ldr(node.right);
    }

    ldr(root);

    return min;
};
