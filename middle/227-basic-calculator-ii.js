/* 
实现一个基本的计算器来计算一个简单的字符串表达式的值。

字符串表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。

2019-07-10
109 / 109 个通过测试用例
执行用时 : 136 ms, 在Ugly Number II的JavaScript提交中击败了37.54% 的用户
内存消耗 : 36.6 MB, 在Ugly Number II的JavaScript提交中击败了14.00% 的用户
*/

var calculate = function(s) {
    let smap = '1234567890';
    let dp = [];
    let str = '';
    let opt = '';
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === ' ') {
            continue;
        }
        if (smap.indexOf(s[i]) > -1) {
            str += s[i];
        } else if (opt === '/') {
            str = ~~(dp.pop() / +str);
            opt = '';
        } else if (opt === '*') {
            str = dp.pop() * +str;
            opt = '';
        }
        if (s[i] === '+' || s[i] === '-') {
            dp.push(+str);
            dp.push(s[i]);
            str = '';
        } else if (s[i] === '*' || s[i] === '/') {
            opt = s[i];
            dp.push(+str);
            str = '';
        }
    }
    if (opt === '/') {
        str = ~~(dp.pop() / +str);
        opt = '';
    } else if (opt === '*') {
        str = dp.pop() * +str;
        opt = '';
    }
    dp.push(+str);
    let res = dp.shift();
    for (let i = 0; i < dp.length; i += 1) {
        if (dp[i] === '+') {
            res += dp[i + 1];
            i += 1;
        } else {
            res -= dp[i + 1];
            i += 1;
        }
    }
    return res;
};