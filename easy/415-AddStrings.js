/* 
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

2019-05-10
315 / 315 个通过测试用例
执行用时 : 140 ms, 在Add Strings的JavaScript提交中击败了40.61% 的用户
内存消耗 : 36.5 MB, 在Add Strings的JavaScript提交中击败了62.03% 的用户
*/

var addStrings = function(num1, num2) {
    num1 = num1.split('');
    num2 = num2.split('');
    let res = [];
    let n1 = num1.length - 1;
    let n2 = num2.length - 1;
    let box = 0;
    while(n1 >= 0 || n2 >= 0 || box !== 0) {
        if (n1 >= 0) box += num1[n1--].charAt() - '0'.charAt();
        if (n2 >= 0) box += num2[n2--].charAt() - '0'.charAt();
        res.push(box % 10);
        box = ~~(box / 10);
    }
    return res.reverse().join('');
};