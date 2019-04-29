/* 
将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

思路： 递归，查询中值，分割成左右子树。

2019-04-03
32 / 32 个通过测试用例
执行用时 : 116 ms, 在Convert Sorted Array to Binary Search Tree的JavaScript提交中击败了37.14% 的用户
内存消耗 : 37.4 MB, 在Convert Sorted Array to Binary Search Tree的JavaScript提交中击败了0.00% 的用户
*/

var sortedArrayToBST = function(nums) {
    function map(arr, start, end) {
        if (start > end) return null;
        let i = Math.ceil((start + end) / 2);
        let root = new TreeNode(arr[i]);
        root.left = map(arr, start, i - 1);
        root.right = map(arr, i + 1, end);
        return root;
    }
    
    return map(nums, 0, nums.length - 1)
};