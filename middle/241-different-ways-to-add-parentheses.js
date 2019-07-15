/* 
给定一个含有数字和运算符的字符串，为表达式添加括号，
改变其运算优先级以求出不同的结果。你需要给出所有可能的组合的结果。
有效的运算符号包含 +, - 以及 * 。

2019-07-11
25 / 25 个通过测试用例
执行用时 : 136 ms, 在Ugly Number II的JavaScript提交中击败了100.54% 的用户
内存消耗 : 36.6 MB, 在Ugly Number II的JavaScript提交中击败了40.00% 的用户
*/

function getCompute(a, b, o) {
    a = +a;
    b = +b;
    if (o === '+') {
        return a + b;
    } else if (o === '-') {
        return a - b;
    } else if (o === '*') {
        return a * b;
    } else {
        return a / b;
    }
}

var diffWaysToCompute = function(input) {
    let opes = '+-*';
    let res = [];
    for (let i = 0; i < input.length; i += 1) {
        if (opes.indexOf(input[i]) > -1) {
            let left = diffWaysToCompute(input.slice(0, i));
            let right = diffWaysToCompute(input.slice(i + 1));
            for (let j = 0; j < left.length; j += 1) {
                for (let k = 0; k < right.length; k += 1) {
                    res.push(getCompute(left[j], right[k], input[i]));
                }
            }
        }
    }
    if (res.length === 0) res.push(+input);
    return res;
};