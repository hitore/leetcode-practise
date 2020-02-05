/* 
给定一个整数类型的数组 nums，请编写一个能够返回数组“中心索引”的方法。

我们是这样定义数组中心索引的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。

2019-09-18
741 / 741 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 84.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 49.62% 的用户
*/

var pivotIndex = function(nums) {
    if (nums.length === 0) return -1;
    let sum = nums.reduce((total, num) => total += num);
    let account = 0;

    for (let i = 0; i < nums.length; i += 1) {
        sum -= nums[i];
        if (account === sum) {
            return i;
        } else {
            account += nums[i];
        }
    }

    return -1;
};