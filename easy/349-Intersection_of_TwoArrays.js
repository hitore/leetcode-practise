/* 
给定两个数组，编写一个函数来计算它们的交集

2019-03-29
60 / 60 个通过测试用例
执行用时 : 92 ms, 在Intersection of Two Arrays的JavaScript提交中击败了52.86% 的用户
内存消耗 : 33.6 MB, 在Intersection of Two Arrays的JavaScript提交中击败了0.00% 的用户
*/

var intersection = function(nums1, nums2) {
    return [...new Set(nums1.filter(item => nums2.includes(item)))];
};