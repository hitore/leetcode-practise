/* 
给定两个字符串 s 和 t，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。

2019-04-30
54 / 54 个通过测试用例
执行用时 : 108 ms, 在Find the Difference的JavaScript提交中击败了76.06% 的用户
内存消耗 : 35.5 MB, 在Find the Difference的JavaScript提交中击败了65.22% 的用户
*/

var findTheDifference = function(s, t) {
    s = s.split('').sort();
    t = t.split('').sort();
    for (let i = 0; i < t.length; i += 1) {
        if (s[i] !== t[i]) {
            return t[i];
        }
    }
};