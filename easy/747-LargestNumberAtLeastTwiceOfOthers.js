/* 
在一个给定的数组nums中，总是存在一个最大元素 。

查找数组中的最大元素是否至少是数组中每个其他数字的两倍。

如果是，则返回最大元素的索引，否则返回-1。

2019-09-29
250 / 250 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 94.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 6.62% 的用户
*/

var dominantIndex = function(nums) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return 0;
  let arr = [...new Set(nums)].sort((a, b) => a - b);
  if (arr[arr.length - 1] >= arr[arr.length - 2] * 2) {
    return nums.indexOf(arr[arr.length - 1]);
  }
  return -1
};