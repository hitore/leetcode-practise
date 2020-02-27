/* 
给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：

每次转换只能改变一个字母。
转换过程中的中间单词必须是字典中的单词。
说明:

如果不存在这样的转换序列，返回 0。
所有单词具有相同的长度。
所有单词只由小写字母组成。
字典中不存在重复的单词。
你可以假设 beginWord 和 endWord 是非空的，且二者不相同

2020-02-17
40 / 40 个通过测试用例
执行用时 : 76 ms, 在所有 JavaScript 提交中击败了48.15% 的用户
内存消耗 : 37.2 MB, 在所有 JavaScript 提交中击败了19.98% 的用户
*/

var ladderLength = function(beginWord, endWord, wordList) {
    if(!endWord || wordList.indexOf(endWord) < 0){
        return 0;
    }

    let len = beginWord.length;
    let map = {};
    for (let i = 0; i < wordList.length; i += 1) {
        let str = wordList[i];
        for (let m = 0; m < len; m += 1) {
            let temp = str.split('')
            temp[m] = '*';
            temp = temp.join('');
            if (map[temp]) {
                map[temp].push(str);
            } else {
                map[temp] = [str];
            }
        }
    }

    let queue = [[beginWord, 1]];
    let visitSet = new Set();

    while(queue.length) {
        let temp = queue.shift();
        let cur = temp[0];
        let path = temp[1];

        for (let i = 0; i < len; i += 1) {
            let swap = cur.split('');
            swap[i] = '*';
            swap = swap.join('');
            if (map[swap]) {
                let arr = map[swap];
                for (let m = 0; m < arr.length; m += 1) {
                    if (arr[m] === endWord) {
                        return path + 1;
                    }
                    if (!visitSet.has(arr[m])) {
                        visitSet.add(arr[m]);
                        queue.push([arr[m], path + 1]);
                    }
                }
            }
        }
    }

    return 0;
};