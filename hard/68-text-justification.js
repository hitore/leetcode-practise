/* 
给定一个单词数组和一个长度 maxWidth，重新排版单词，使其成为每行恰好有 maxWidth 个字符，且左右两端对齐的文本。

你应该使用“贪心算法”来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 ' ' 填充，使得每行恰好有 maxWidth 个字符。

要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。

文本的最后一行应为左对齐，且单词之间不插入额外的空格。

说明:

单词是指由非空格字符组成的字符序列。
每个单词的长度大于 0，小于等于 maxWidth。
输入单词数组 words 至少包含一个单词。

2019-07-16
27 / 27 个通过测试用例
执行用时 : 872 ms, 在Perfect Squares的JavaScript提交中击败了65.15% 的用户
内存消耗 : 37.2 MB, 在Perfect Squares的JavaScript提交中击败27.98% 的用户
*/

var fullJustify = function(words, maxWidth) {
    let res = [];
    let stand = [];
    let len = 0;

    for (let i = 0; i < words.length; i += 1) {
        if (len + words[i].length >= maxWidth && stand.length) {
            let str = '';
            if (stand.length === 1) {
                str += stand[0];
                while(str.length < maxWidth) {
                    str += ' ';
                }
            } else {
                let rest = maxWidth - len;
                let index = 1;
                while(rest > 0) {
                    if (index >= stand.length) index = 1;
                    stand[index] += ' ';
                    rest -= 1;
                    index += 2;
                }
                str = stand.join('');
            }
            res.push(str);
            stand = [];
            len = 0;
        }
        if (stand.length > 0) {
            stand.push(' ');
            len += 1;
        }
        stand.push(words[i]);
        len += words[i].length;
    }

    let str = stand.join('');
    while(str.length < maxWidth) {
        str += ' ';
    }
    res.push(str);

    return res;
};