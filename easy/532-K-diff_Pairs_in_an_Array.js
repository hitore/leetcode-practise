/* 
Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array. Here a k-diff pair is defined as an integer pair (i, j), where i and j are both numbers in the array and their absolute difference is k.

2019-06-10
72 / 72 个通过测试用例
执行用时 : 76 ms, 在Longest Uncommon Subsequence I 的JavaScript提交中击败了41.86% 的用户
内存消耗 : 34.1 MB, 在Longest Uncommon Subsequence I 的JavaScript提交中击败了5.26% 的用户
*/

var findPairs = function(nums, k) {
    let res = 0;
    let map = {};
    nums = nums.sort((a, b) => a - b);

    function check(i, j) {
        if (j - i === k && map[`${i}${j}`] === undefined) {
            map[`${i}${j}`] = 1;
            return true;
        }
        return false;
    }

    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === nums[i - 1]) continue;
        for (let m = i + 1; m < nums.length; m += 1) {
            if (check(nums[i], nums[m])) {
                res += 1;
            } else if (nums[m] - nums[i] > k) {
                break;
            }
        }
    }

    return res;
};