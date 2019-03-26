/* 
你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都围成一圈，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

思路：https://blog.csdn.net/smile_watermelon/article/details/47791673

2019-03-26
74 / 74 个通过测试用例
执行用时 : 88 ms, 在House Robber II的JavaScript提交中击败了42.03% 的用户
内存消耗 : 33.7 MB, 在House Robber II的JavaScript提交中击败了0.00% 的用户
*/

var rob = function(nums) {
    var rob1 = function(nums) {
        if (nums.length === 0) {
            return 0;
        }
        let len = nums.length;
        let dp = Array(len).fill(0);
        if (nums.length > 0) {
            dp[0] = nums[0];
        }
        if (nums.length > 1) {
            dp[1] = Math.max(nums[0], nums[1]);
        }
        for (let i = 2; i < len; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        }
        return Math.max(...dp);
    };
    if (nums.length === 0) return 0;
    let res1 = nums[0];
    let copy = [...nums];
    if (copy.length > 3) {
        copy.splice(0, 2);
        copy.pop();
    } else {
        copy = [];
    }
    res1 += rob1(copy);
    let res2 = rob1(nums.splice(1));
    return Math.max(res1, res2);
  };