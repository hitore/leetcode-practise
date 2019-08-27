// 编写一个程序判断给定的数是否为丑数。
// 丑数就是只包含质因数 2, 3, 5 的正整数

// 2019-03-17
// 1012 / 1012 个通过测试用例
// 执行用时 : 132 ms, 在Ugly Number的JavaScript提交中击败了18.08% 的用户
// 内存消耗 : 35.3 MB, 在Ugly Number的JavaScript提交中击败了0.00% 的用户

var isUgly = function(num) {
    if (num < 1) return false;
    while(num % 2 === 0) num = num / 2;
    while(num % 3 === 0) num = num / 3;
    while(num % 5 === 0) num = num / 5;
    return num === 1;
};
