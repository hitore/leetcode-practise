/* 
如果单词列表（words）中的一个单词包含牌照（licensePlate）中所有的字母，那么我们称之为完整词。在所有完整词中，最短的单词我们称之为最短完整词。

单词在匹配牌照中的字母时不区分大小写，比如牌照中的 "P" 依然可以匹配单词中的 "p" 字母。

我们保证一定存在一个最短完整词。当有多个单词都符合最短完整词的匹配条件时取单词列表中最靠前的一个。

牌照中可能包含多个相同的字符，比如说：对于牌照 "PP"，单词 "pair" 无法匹配，但是 "supper" 可以匹配。

2019-12-14
102 / 102 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 87.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 94.62% 的用户
*/

var shortestCompletingWord = function(licensePlate, words) {
    licensePlate = licensePlate.toLowerCase().replace(/[^a-z]/g, '');
    let index = 0;
    let min = Number.MAX_VALUE;

    function handleMacth(li, word) {
        for (let i = 0; i < li.length; i += 1) {
            let at = word.indexOf(li[i]);

            if (at < 0) {
                return false;
            }
            word = word.slice(0, at) + word.slice(at + 1);
        }
        return true;
    }

    words.forEach((word, i) => {
        let isMatch = handleMacth(licensePlate, word);
        if (isMatch && word.length < min) {
            index = i;
            min = word.length;
        }
    });

    return words[index];
};