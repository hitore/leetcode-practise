/* 
给定一个整数，写一个函数来判断它是否是 3 的幂次方。

2019-03-24
21038 / 21038 个通过测试用例
执行用时 : 520 ms, 在Power of Three的JavaScript提交中击败了35.19% 的用户
内存消耗 : 46.7 MB, 在Power of Three的JavaScript提交中击败了0.00% 的用户
*/

var isPowerOfThree = function(n) {
    // 将n转换成3进制，所以3 -> 10  9 -> 100 27 -> 1000 ，以此类推
    return /^10*$/.test(n.toString(3));
};