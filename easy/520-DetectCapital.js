/* 
Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way

2019-06-03
550 / 550 个通过测试用例
执行用时 : 72 ms, 在Detect Capital的JavaScript提交中击败了99.59% 的用户
内存消耗 : 33.9 MB, 在Detect Capital的JavaScript提交中击败了65.33% 的用户
*/

var detectCapitalUse = function(word) {
    return /(^[A-Z]+$)|(^[a-z]+$)|(^[A-Z][a-z]+$)/.test(word);
};