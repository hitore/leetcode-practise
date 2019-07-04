/* 
给定一个字符串，逐个翻转字符串中的每个单词。

2019-07-04
25 / 25 个通过测试用例
执行用时 : 88 ms, 在Perfect Squares的JavaScript提交中击败了91.43% 的用户
内存消耗 : 36.2 MB, 在Perfect Squares的JavaScript提交中击败了36.24% 的用户
*/

var reverseWords = function(s) {
    return s.split(' ').reverse().filter(str => str !== '').join(' ');
};