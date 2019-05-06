/* 
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

2019-05-06
95 / 95 个通过测试用例
执行用时 : 140 ms, 在Longest Palindrome的JavaScript提交中击败了25.66% 的用户
内存消耗 : 35.3 MB, 在Longest Palindrome的JavaScript提交中击败了51.43% 的用户
*/

var longestPalindrome = function(s) {
    s = s.split('');
    let map = {};
    let res = 0;
    for (let i = 0; i < s.length; i += 1) {
        if (map[s[i]] === undefined) {
            map[s[i]] = 1;
        } else {
            map[s[i]] += 1;
            if (map[s[i]] % 2 === 0) {
                res += 2;
            }
        }
    }
    if (res < s.length) res += 1;
    return res;
};