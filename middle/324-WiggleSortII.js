/* 
给定一个无序的数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。

2020-03-01
44 / 44 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了100.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了15.00% 的用户
*/

var wiggleSort = function(nums) {
    nums.sort((a, b) => b - a);
    let res = [];
    let limit = ~~(nums.length / 2);
    let left = 0;
    let right = limit;

    while(right < nums.length) {
        res.push(nums[right])
        if (left < limit) {
            res.push(nums[left])
        }
        left += 1;
        right += 1;
    }

    for (let i = 0; i < res.length; i += 1) {
        nums[i] = res[i];
    }
};