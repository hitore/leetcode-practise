/* 
给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

2019-06-14
30 / 30 个通过测试用例
执行用时 : 116 ms , 在所有JavaScript提交中击败了 88.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 47.62% 的用户
*/

var reverseWords = function(s) {
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ');
};