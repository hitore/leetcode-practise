/* 
给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。

2019-07-12
53 / 53 个通过测试用例
执行用时 : 272 ms, 在Perfect Squares的JavaScript提交中击败了98.13% 的用户
内存消耗 : 37.2 MB, 在Perfect Squares的JavaScript提交中击败了42.98% 的用户
*/

var findDuplicate = function(nums) {
    let fast = 0;
    let slow = 0;
    while(fast === 0 || fast !== slow) {
        fast = nums[nums[fast]];
        slow = nums[slow];
    }
    slow = 0;
    while (fast != slow) {
        fast = nums[fast];
        slow = nums[slow];
    }
    return slow;
};