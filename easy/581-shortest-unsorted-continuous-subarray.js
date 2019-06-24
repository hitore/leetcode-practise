/* 
给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

你找到的子数组应是最短的，请输出它的长度。

2019-06-24
307 / 307 个通过测试用例
执行用时 : 128 ms , 在所有JavaScript提交中击败了 69.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 12.62% 的用户
*/

var findUnsortedSubarray = function(nums) {
    if (nums.length === 1) return 0;
    let st = [...nums].sort((a,b) => a - b);
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        if (st[left] !== nums[left] && st[right] !== nums[right]) {
            break;
        }
        if (st[left] === nums[left]) {
            left += 1;
        }
        if (st[right] === nums[right]) {
            right -= 1;
        }
    }
    
    if (right > left) {
        return right - left + 1;
    } else {
        return 0;
    }
};