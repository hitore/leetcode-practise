/* 
累加数是一个字符串，组成它的数字可以形成累加序列。
一个有效的累加序列必须至少包含 3 个数。除了最开始的两个数以外，字符串中的其他数都等于它之前两个数相加的和。
给定一个只包含数字 '0'-'9' 的字符串，编写一个算法来判断给定输入是否是累加数。
说明: 累加序列里的数不会以 0 开头，所以不会出现 1, 2, 03 或者 1, 02, 3 的情况。

2019-07-15
40 / 40 个通过测试用例
执行用时 : 272 ms, 在Perfect Squares的JavaScript提交中击败了100% 的用户
内存消耗 : 37.2 MB, 在Perfect Squares的JavaScript提交中击败50.98% 的用户
*/

function isSumNum(num1, num2, other) {
    if (other.length === 0) return false;
    let sum = +num1 + +num2;
    let str = '';
    for (let i = 0; i < other.length; i += 1) {
        if (str[0] === '0' && str.length > 1) return false;
        if (+str === sum) {
            num1 = num2;
            num2 = sum;
            sum = +num1 + +num2;
            str = '';
        }
        str += other[i];
    }
    if (str[0] === '0' && str.length > 1) return false;
    return +str === sum;
}

var isAdditiveNumber = function(num) {
    for (let m = 0; m < num.length / 2; m += 1) {
        let left = num.slice(0, m + 1);
        if (left[0] === '0' && left.length > 1) return false;
        for (let n = m + 1; n < num.length; n += 1) {
            if (num[m + 1] === '0' && n > m + 1) break;
            let right = num.slice(m + 1, n + 1);
            if (isSumNum(left, right, num.slice(n + 1))) {
                return true;
            }
        }
    }
    return false;
};