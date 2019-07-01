/* 
给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。

2019-07-01
123 / 123 个通过测试用例
执行用时 : 128 ms , 在所有JavaScript提交中击败了 86.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 100.62% 的用户
*/

var findMaxAverage = function(nums, k) {
    let arrSum = 0;
    let maxSum = -Number.MAX_VALUE;

    for (let i = 0; i < nums.length; i += 1) {
        if (i < k) {
            arrSum += nums[i];
        } else {
            maxSum = Math.max(maxSum, arrSum);
            arrSum = arrSum - nums[i - k] + nums[i];
        }
    }

    maxSum = Math.max(maxSum, arrSum);

    return maxSum / k;
};