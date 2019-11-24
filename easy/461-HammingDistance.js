/* 
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

2019-05-16
149 / 149 个通过测试用例
执行用时 : 80 ms, 在Hamming Distance的JavaScript提交中击败了99.04% 的用户
内存消耗 : 34.2 MB, 在Hamming Distance的JavaScript提交中击败了9.04% 的用户
*/

var hammingDistance = function(x, y) {
    return (x ^ y).toString(2).replace(/0/g, '').length;
};