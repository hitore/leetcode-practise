/* 
给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数
示例:

输入: 38
输出: 2 
解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。

2019-03-18
1101 / 1101 个通过测试用例
执行用时 : 124 ms, 在Add Digits的JavaScript提交中击败了35.92% 的用户
内存消耗 : 35.9 MB, 在Add Digits的JavaScript提交中击败了0.00% 的用户
*/

function sum(list) {
	let res = 0;
	list.forEach(l => {
		res += +l;
	});
	return res;
}

var addDigits = function(num) {
    num = num.toString().split('');
    const res = sum(num);
    if (res >= 10) {
        return addDigits(res);
    } else {
        return res;
    }
};

//---------------------------------------------//
/*
执行用时为 84 ms 的范例
X = 100*a + 10*b + c
  = 99*a + 9*b + (a+b+c)
即
X % 9 = 0 + 0 + (a + b + c) % 9
但是当(a+b+c)为9的倍数时，结果不对
所以hack一下
(X - 1) % 9 = (a + b + c -1) % 9
            = (a + b + c) % 9 - 1
得 
(X - 1) % 9 + 1 = (a + b + c) % 9
*/
var addDigits = function(num) {
  return (num - 1) % 9 + 1
};