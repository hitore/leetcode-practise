/* 
给定一个无重复元素的有序整数数组，返回数组区间范围的汇总。

2019-07-10
28 / 28 个通过测试用例
执行用时 : 136 ms, 在Ugly Number II的JavaScript提交中击败了95.54% 的用户
内存消耗 : 36.6 MB, 在Ugly Number II的JavaScript提交中击败了12.00% 的用户
*/

var summaryRanges = function(nums) {
    let res = [];
    let start = 0;
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i + 1] - nums[i] !== 1 || i === nums.length - 1) {
            if (start === i) {
                res.push(nums[start] + '');
            } else {
                res.push(`${nums[start]}->${nums[i]}`);
            }
            start = i + 1;
        }
    }
    return res;
};