/* 
找到给定字符串（由小写字符组成）中的最长子串 T ， 要求 T 中的每一字符出现次数都不少于 k 。输出 T 的长度。

2020-03-30
28 / 28 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了75.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了45.00% 的用户
*/

var longestSubstring = function(s, k) {
    let map = {};
    let max = 0;

    for (let i of s) {
        if (map[i] === undefined) {
            map[i] = 1;
        } else {
            map[i] += 1;
        }
    }

    for (let key in map) {
        if (map[key] < k) {
            let temp = s.split(key);
            temp.forEach(str => {
                max = Math.max(max, longestSubstring(str, k));
            });
            return max;
        }
    }

    return s.length;
};