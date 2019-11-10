/* 
给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。题目保证至少有一个词不在禁用列表中，而且答案唯一。

禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。

2019-11-10
47 / 47 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 73.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 80.62% 的用户
*/

var mostCommonWord = function(paragraph, banned) {
    let map = {};
    let word = '';
    let icon = '!@#$%^&*,. ?`~;\'<>/[]{}\\|-_=+()';
    for (let i = 0; i < paragraph.length; i += 1) {
        if (icon.indexOf(paragraph[i]) > -1) {
            word = word.toLowerCase();
            if (word && banned.indexOf(word) < 0) {
                map[word] = map[word] ? map[word] + 1 : 1;
            }
            word = '';
        } else {
            word += paragraph[i];
        }
    }

    word = word.toLowerCase();
    if (word && banned.indexOf(word) < 0) {
        map[word] = map[word] ? map[word] + 1 : 1;
    }
    word = '';

    let res = '';
    let max = 0;

    for (let i in map) {
        if (map[i] > max) {
            max = map[i];
            res = i;
        }
    }

    return res;
};