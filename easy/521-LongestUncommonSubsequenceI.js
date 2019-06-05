/* 
Given a group of two strings, you need to find the longest uncommon subsequence of this group of two strings. The longest uncommon subsequence is defined as the longest subsequence of one of these strings and this subsequence should not be any subsequence of the other strings.

A subsequence is a sequence that can be derived from one sequence by deleting some characters without changing the order of the remaining elements. Trivially, any string is a subsequence of itself and an empty string is a subsequence of any string.

The input will be two strings, and the output needs to be the length of the longest uncommon subsequence. If the longest uncommon subsequence doesn't exist, return -1.

2019-06-05
41 / 41 个通过测试用例
执行用时 : 76 ms, 在Longest Uncommon Subsequence I 的JavaScript提交中击败了91.86% 的用户
内存消耗 : 34.1 MB, 在Longest Uncommon Subsequence I 的JavaScript提交中击败了5.26% 的用户
*/

var findLUSlength = function(a, b) {
    if (a === b) return -1;
    return Math.max(a.length, b.length);
};