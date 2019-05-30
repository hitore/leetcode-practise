/* 
Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

2019-05-30
17 / 17 个通过测试用例
执行用时 : 144 ms, 在Relative Ranks的JavaScript提交中击败了94.68% 的用户
内存消耗 : 38.4 MB, 在Relative Ranks的JavaScript提交中击败了89.29% 的用户
*/

var findRelativeRanks = function(nums) {
    let arr = [...nums]
    let map = {};
    arr.sort((a, b) => b - a);
    for (let i = 0; i < arr.length; i += 1) {
        if (i === 0) {
            map[arr[i]] = 'Gold Medal';
        } else if (i === 1) {
            map[arr[i]] = 'Silver Medal';
        } else if (i === 2) {
            map[arr[i]] = 'Bronze Medal';
        } else {
            map[arr[i]] = i + 1 + '';
        }
    }
    for (let i = 0; i < nums.length; i += 1) {
        nums[i] = map[nums[i]];
    }
    return nums;
};