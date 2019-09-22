/* 
给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。

你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度

2019-08-06
89 / 89 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 66.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 36.62% 的用户
*/

var findShortestSubArray = function(nums) {
  let nMap = {};
  let iMap = {};
  let maxNum = 0;
  let minLength = Number.MAX_VALUE;
  
  for (let i = 0; i < nums.length; i += 1) {
    let num = nums[i];
    nMap[num] ? nMap[num] += 1 : nMap[num] = 1;
    iMap[num] ? iMap[num].push(i) : iMap[num] = [i];
    if (nMap[num] >= maxNum) {
      let start = iMap[num][0];
      let end = iMap[num][iMap[num].length - 1];
      if (nMap[num] === maxNum) {
        minLength = Math.min(minLength, end - start + 1);
      } else {
        minLength = end - start + 1;
      }
      maxNum = nMap[num];
    }
  }
  
  return Number.MAX_VALUE === minLength ? 0 : minLength;
};