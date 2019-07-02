/* 
给定一个长度为 n 的整数数组，你的任务是判断在最多改变 1 个元素的情况下，该数组能否变成一个非递减数列。

我们是这样定义一个非递减数列的： 对于数组中所有的 i (1 <= i < n)，满足 array[i] <= array[i + 1]。

2019-07-02
325 / 325 个通过测试用例
执行用时 : 128 ms , 在所有JavaScript提交中击败了 88.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 93.62% 的用户
*/

var checkPossibility = function(nums) {
    let count = 1;
    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i] < nums[i - 1]) {
            if (count === 0) {
                return false;
            }
            if (i === 1 || nums[i - 2] <= nums[i]) {
                nums[i - 1] = nums[i];
            } else {
                nums[i] = nums[i - 1]
            }
            count -= 1;
        }
    }

    return true;
};