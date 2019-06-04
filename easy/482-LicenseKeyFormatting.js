/* 
You are given a license key represented as a string S which consists only alphanumeric character and dashes. The string is separated into N+1 groups by N dashes.

Given a number K, we would want to reformat the strings such that each group contains exactly K characters, except for the first group which could be shorter than K, but still must contain at least one character. Furthermore, there must be a dash inserted between two groups and all lowercase letters should be converted to uppercase.

Given a non-empty string S and a number K, format the string according to the rules described above.

2019-06-04
38 / 38 个通过测试用例
执行用时 : 104 ms, 在License Key Formatting的JavaScript提交中击败了92.54% 的用户
内存消耗 : 38.5 MB, 在License Key Formatting的JavaScript提交中击败了85.19% 的用户
*/

var licenseKeyFormatting = function(S, K) {
    S = S.split('-').join('').toUpperCase();
    let len = S.length;
    let res = [];
    while(S.length) {
        len = S.length;
        let cut = len % K === 0 ? K : len % K;
        res.push(S.slice(0, cut));
        S = S.slice(cut);
    }

    return res.join('-');
};