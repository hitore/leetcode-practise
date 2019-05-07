/* 
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

2019-05-07
8 / 8 个通过测试用例
执行用时 : 108 ms, 在Fizz Buzz的JavaScript提交中击败了83.89% 的用户
内存消耗 : 37.8 MB, 在Fizz Buzz的JavaScript提交中击败了5.13% 的用户
*/

var fizzBuzz = function(n) {
    let res = [];
    for(let i = 1; i <= n; i += 1) {
        let str = '';
        if (i % 3 === 0) {
            str += 'Fizz';
        }
        if (i % 5 === 0) {
            str += 'Buzz';
        }
        if (!str) {
            str += i;
        }
        res.push(str);
    }
    return res;
};