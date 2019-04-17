/* 
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]

思路：第一遍遍历删除0并计数，然后向末尾添加0

2019-03-22
21 / 21 个通过测试用例
执行用时 : 108 ms, 在Move Zeroes的JavaScript提交中击败了36.68% 的用户
内存消耗 : 35.5 MB, 在Move Zeroes的JavaScript提交中击败了0.69% 的用户
*/

var moveZeroes = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length;) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            count += 1;
            continue;
        }
        i += 1;
    }
    for (let i = 0; i < count; i += 1) {
        nums.push(0);
    }
};