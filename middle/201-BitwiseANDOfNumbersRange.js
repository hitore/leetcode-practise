/* 
给定范围 [m, n]，其中 0 <= m <= n <= 2147483647，返回此范围内所有数字的按位与（包含 m, n 两端点）。

2020-03-11
8266 / 8266 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了86.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了91.00% 的用户
*/

var rangeBitwiseAnd = function(m, n) {
    let offset = 0;

    while(m !== n) {
        m >>= 1;
        n >>= 1;
        offset += 1;
    }

    return m << offset;
};