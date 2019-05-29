/* 
We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.

2019-05-29
156 / 156 个通过测试用例
执行用时 : 80 ms, 在Perfect Number的JavaScript提交中击败了100.00% 的用户
内存消耗 : 33.7 MB, 在Perfect Number的JavaScript提交中击败了100.00% 的用户
*/

var checkPerfectNumber = function(num) {
    let map = [6,28,496,8128,33550336];
    return map.includes(num);
};