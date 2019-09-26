/*
 * @lc app=leetcode.cn id=704 lang=javascript.
 *
 * [704] 二分查找
 */
/*
√ Accepted
  √ 46/46 cases passed (80 ms)
  √ Your runtime beats 89.46 % of javascript submissions
  √ Your memory usage beats 37.3 % of javascript submissions (36.8 MB)
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while(left <= right) {
    let index = parseInt((left + right) / 2);
    if (nums[index] === target) {
      return index;
    }
    if (nums[index] > target) {
      right = index - 1;
    } else {
      left = index + 1;
    }
  }
  
  return -1;
};

