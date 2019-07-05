/* 
峰值元素是指其值大于左右相邻值的元素。

给定一个输入数组 nums，其中 nums[i] ≠ nums[i+1]，找到峰值元素并返回其索引。

数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。

你可以假设 nums[-1] = nums[n] = -∞。

2019-07-05
59 / 59 个通过测试用例
执行用时 : 124 ms, 在Course Schedule的JavaScript提交中击败了75.49% 的用户
内存消耗 : 38.5 MB, 在Course Schedule的JavaScript提交中击败了575.11% 的用户
*/

var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = ~~(left + (right - left) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};