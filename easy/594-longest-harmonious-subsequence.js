/* 
和谐数组是指一个数组里元素的最大值和最小值之间的差别正好是1。

现在，给定一个整数数组，你需要在所有可能的子序列中找到最长的和谐子序列的长度。

2019-06-25
201 / 201 个通过测试用例
执行用时 : 128 ms , 在所有JavaScript提交中击败了 75.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 78.62% 的用户
*/

var findLHS = function(nums) {
    nums.sort((a, b) => a - b);
    let index = 0;
    let next = null;
    let res = 0;
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] !== nums[index] && next === null) next = i;
        if (nums[i] - nums[index] < 2) {
            if (i - index >= 1 && next) {
                res = Math.max(res, i - index + 1);
            }
        } else {
            if (next === null) next = i;
            index = next;
            i = index;
            next = null;
        }
    }
    return res;
};