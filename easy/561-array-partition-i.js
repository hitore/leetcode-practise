/* 
给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 的 min(ai, bi) 总和最大

2019-06-17
81 / 81 个通过测试用例
执行用时 : 116 ms , 在所有JavaScript提交中击败了 95.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 18.62% 的用户
*/

var arrayPairSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let res = 0;

    for (let i = nums.length - 2; i >= 0; i -= 2) {
        res += nums[i];
    }

    return res;
};