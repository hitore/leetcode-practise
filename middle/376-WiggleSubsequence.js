/* 
如果连续数字之间的差严格地在正数和负数之间交替，则数字序列称为摆动序列。第一个差（如果存在的话）可能是正数或负数。少于两个元素的序列也是摆动序列。

例如， [1,7,4,9,2,5] 是一个摆动序列，因为差值 (6,-3,5,-7,3) 是正负交替出现的。相反, [1,4,7,2,5] 和 [1,7,4,5,5] 不是摆动序列，第一个序列是因为它的前两个差值都是正数，第二个序列是因为它的最后一个差值为零。

给定一个整数序列，返回作为摆动序列的最长子序列的长度。 通过从原始序列中删除一些（也可以不删除）元素来获得子序列，剩下的元素保持其原始顺序。

2020-03-25
27 / 27 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了81.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了45.00% 的用户
*/

var wiggleMaxLength = function(nums) {
    let len = nums.length;
    if (len < 2) return len;
    let up = 1;
    let down = 1;

    for (let i = 1; i < len; i += 1) {
        if (nums[i] > nums[i - 1]) {
            up = down + 1;
        }
        if (nums[i] < nums[i - 1]) {
            down = up + 1;
        }
    }

    return Math.max(up, down);
};