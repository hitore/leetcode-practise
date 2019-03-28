/* 
给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4 的幂次方。

2019-03-27
1060 / 1060 个通过测试用例
执行用时 : 172 ms, 在Power of Four的JavaScript提交中击败了9.36% 的用户
内存消耗 : 35.2 MB, 在Power of Four的JavaScript提交中击败了0.00% 的用户
*/

var isPowerOfFour = function(num) {
    return /^10*$/.test(num.toString(4));
};