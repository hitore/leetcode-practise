/* 
给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入

2020-03-29
29 / 29 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了92.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了97.00% 的用户
*/

var decodeString = function(s) {
    s = s.split('')
    
    function dfs(str, i) {
        let num = 0;
        let res = '';

        while(i < str.length) {
            if (/\d/.test(str[i])) {
                num = num * 10 + (+str[i]);
            } else if (str[i] === '[') {
                let item = dfs(str, i + 1);
                for (let j = 0; j < num; j += 1) {
                    res += item[0];
                }
                i = item[1];
                num = 0;

            } else if (str[i] === ']') {
                return [res, i];
            } else {
                res += str[i];
            }
            i += 1;
        }

        return res;
    }

    return dfs(s, 0);
}