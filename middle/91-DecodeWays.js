/* 
一条包含字母 A-Z 的消息通过以下方式进行了编码：

'A' -> 1
'B' -> 2
...
'Z' -> 26
给定一个只包含数字的非空字符串，请计算解码方法的总数。

2020-02-14
258 / 258 个通过测试用例
执行用时 : 76 ms, 在所有 JavaScript 提交中击败了62.15% 的用户
内存消耗 : 37.2 MB, 在所有 JavaScript 提交中击败了97.98% 的用户
*/

var numDecodings = function(s) {
    if (s.length === 0) return 0;
    if (s[0] === '0') return 0;

    s = s.split('');
    let pre = 1;
    let cur = 1;

    for (let i = 1; i < s.length; i += 1) {
        let temp = cur;
        if (s[i] === '0') {
            if (s[i - 1] === '1' || s[i - 1] === '2') {
                cur = pre;
            } else {
                return 0;
            }
        } else if (s[i - 1] === '1' || (s[i - 1] === '2' && s[i] >= '1' && s[i] <= '6') ) {
            cur = pre + cur;
        }
        pre = temp;
    }

    return cur;
};