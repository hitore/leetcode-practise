/* 
给定一个未排序的整数数组，找出最长连续序列的长度

要求算法的时间复杂度为 O(n).

2019-07-19
68 / 68 个通过测试用例
执行用时 : 872 ms, 在Perfect Squares的JavaScript提交中击败了43.15% 的用户
内存消耗 : 37.2 MB, 在Perfect Squares的JavaScript提交中击败60.23% 的用户
*/

var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    let Xmap = {};
    let Ymap = {};
    let max = 0;
    let count = 1;
    let arr = [];

    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] >= 0) {
            Xmap[nums[i]] = 1;
        } else {
            Ymap[-nums[i]] = 1;
        }
    }

    for (let i in Ymap) {
        arr.unshift(-(+i));
    }

    for (let i in Xmap) {
        arr.push(+i);
    }

    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] - arr[i - 1] === 1) {
            count += 1;
        } else {
            max = Math.max(max, count);
            count = 1;
        }
    }
    max = Math.max(max, count);

    return max;
};