/* 
给定一个字符串S，通过将字符串S中的每个字母转变大小写，我们可以获得一个新的字符串。返回所有可能得到的字符串集合。

2019-12-15
63 / 63 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 100.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 60.62% 的用户
*/

var letterCasePermutation = function(S) {
    let number = '0123456789';
    let len = S.length;
    let res = [];
    
    if (len === 0) return [''];

    function dfs(start = 0, str = '') {
        if (start === len) {
            res.push(str);
            return;
        }

        if (number.includes(S[start])) {
            dfs(start + 1, str + S[start]);
        } else {
            dfs(start + 1, str + S[start].toLowerCase());
            dfs(start + 1, str + S[start].toUpperCase());
        }
    }

    dfs();

    return res;
};