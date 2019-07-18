/* 
给定一个字符串 s1，我们可以把它递归地分割成两个非空子字符串，从而将其表示为二叉树。

给出两个长度相等的字符串 s1 和 s2，判断 s2 是否是 s1 的扰乱字符串。

2019-07-18
283 / 283 个通过测试用例
执行用时 : 872 ms, 在Perfect Squares的JavaScript提交中击败了80.15% 的用户
内存消耗 : 37.2 MB, 在Perfect Squares的JavaScript提交中击败75.98% 的用户
*/

var isScramble = function(s1, s2) {
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;
    let total = 0;
    for (let i = 0; i < s1.length; i += 1) {
        total ^= s1[i].charCodeAt();
        total ^= s2[i].charCodeAt();
    }
    if (total !== 0) return false;
    for (let i = 1; i < s1.length; i += 1) {
        if (isScramble(s1.slice(0, i), s2.slice(0,i)) && isScramble(s1.slice(i), s2.slice(i))) {
            return true;
        }
        if (isScramble(s1.slice(0,i), s2.slice(s2.length - i)) && isScramble(s1.slice(i), s2.slice(0,s2.length - i))) {
            return true;
        }
    }
    return false;
};