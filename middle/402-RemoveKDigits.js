/* 
给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。

注意:

num 的长度小于 10002 且 ≥ k。
num 不会包含任何前导零。

2020-04-01
33 / 33 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了36.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了90.00% 的用户
*/

var removeKdigits = function(num, k) {
    if (k >= num.length) return '0';
    num = num.split('');

    while(k--) {
        let index = 0;
        for (let i = 0;i < num.length; i += 1) {
            index = i;
            if (num[i] > num[i + 1]) {
                break;
            }
        }
        num.splice(index, 1);
        while(num.length > 1 && num[0] === '0') {
            num.splice(0, 1);
        }
    }

    return num.join('');
};