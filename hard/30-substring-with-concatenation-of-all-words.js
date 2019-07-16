/* 
给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

2019-07-16
173 / 173 个通过测试用例
执行用时 : 872 ms, 在Perfect Squares的JavaScript提交中击败了45.15% 的用户
内存消耗 : 37.2 MB, 在Perfect Squares的JavaScript提交中击败66.98% 的用户
*/

var findSubstring = function(s, words) {
    function checkSplit(str) {
        let l = words.length;
        let cmap = {};
        let i = 0;
        while(i + wordLength <= str.length) {
            let s = str.slice(i, i + wordLength);
            if (map[s]) {
                cmap[s] ? cmap[s] += 1 : cmap[s] = 1;
                if (cmap[s] > map[s]) {
                    return false;
                } else if (cmap[s] === map[s]) {
                    l -= cmap[s];
                }
            }
            i += wordLength;
        }
        return l === 0;
    }
    if (s === '' || words.length === 0) return [];
    let wordLength = words[0].length;
    let len = wordLength * words.length;
    let start = 0;
    let map = {};
    let res = [];
    words.forEach(w => {
        map[w] ? map[w] += 1 : map[w] = 1;
    });
    while(start + len <= s.length) {
        let str = s.slice(start, start + len);
        if (checkSplit(str)) {
            res.push(start);
        }
        start += 1;
    }
    return res;
};