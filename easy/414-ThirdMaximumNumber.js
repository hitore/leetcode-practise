/* 
给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。

2019-05-09
26 / 26 个通过测试用例
执行用时 : 128 ms, 在Third Maximum Number的JavaScript提交中击败了51.03% 的用户
内存消耗 : 35.8 MB, 在Third Maximum Number的JavaScript提交中击败了62.00% 的用户
*/

var thirdMax = function(nums) {
    nums = nums.sort((a, b) => b - a);
    let res = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i] !== nums[i - 1]) {
            count += 1;
            if (count === 3) {
                res = nums[i];
                break;
            }
        }
    }
    return res;
};