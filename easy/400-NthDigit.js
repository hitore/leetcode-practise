/* 
在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 个数字

2019-05-03
70 / 70 个通过测试用例
执行用时 : 88 ms, 在Nth Digit的JavaScript提交中击败了86.57% 的用户
内存消耗 : 33.6 MB, 在Nth Digit的JavaScript提交中击败了60.00% 的用户
*/

var findNthDigit = function(n) {
    let len = 1;
    let cnt = 9;
    let start = 1;

    while(n > len * cnt) {
        n -= len *cnt;
        len += 1;
        cnt *= 10;
        start *= 10;
    }

    start += (n - 1) / len;
    let str = start.toString().split('');
    return str[(n - 1) % len];
};