/* 
根据逆波兰表示法，求表达式的值。

有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

说明：

整数除法只保留整数部分。
给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。

2019-06-14
20 / 20 个通过测试用例
执行用时 : 88 ms, 在Perfect Squares的JavaScript提交中击败了96.43% 的用户
内存消耗 : 36.2 MB, 在Perfect Squares的JavaScript提交中击败了95.24% 的用户
*/

var evalRPN = function(tokens) {
    let map = ['+', '-', '*', '/'];
    let dp = [];

    function getNum(run, a, b) {
        a = parseFloat(a);
        b = parseFloat(b);
        if (run === '+') {
            return ~~(a + b);
        } else if (run === '-') {
            return ~~(a - b);
        } else if (run === '*') {
            return ~~(a * b);
        } else if (run === '/') {
            return ~~(a / b);
        }
    }

    for (let i = 0; i < tokens.length; i += 1) {
        if (map.indexOf(tokens[i]) < 0) {
            dp.push(tokens[i]);
        } else {
            let b = dp.pop();
            let a = dp.pop();
            dp.push(getNum(tokens[i], a, b));
        }
    }

    return dp.pop();
};