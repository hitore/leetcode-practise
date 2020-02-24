/* 
给定一个字符串数组 words，找到 length(word[i]) * length(word[j]) 的最大值，并且这两个单词不含有公共字母。你可以认为每个单词只包含小写字母。如果不存在这样的两个单词，返回 0。

2020-02-24
174 / 174 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了100.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了81.00% 的用户
*/

var maxProduct = function(words) {
    let res = 0;
    let len = words.length;

    let arr = [];
    for (let i = 0; i < len; i += 1) {
        for (let c of words[i]) {
            arr[i] |= (1 << (c.charCodeAt() - 'a'.charCodeAt()))
        }
    }

    for (let i = 0; i < len; i += 1) {
        for (let m = i + 1; m < len; m += 1) {
            if ((arr[i] & arr[m]) === 0) {
                res = Math.max(res, words[i].length * words[m].length);
            }
        }
    }

    return res;
};