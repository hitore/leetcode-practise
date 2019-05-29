/* 
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

2019-05-29
22 / 22 个通过测试用例
执行用时 : 68 ms, 在Keyboard Row的JavaScript提交中击败了98.62% 的用户
内存消耗 : 34.2 MB, 在Keyboard Row的JavaScript提交中击败了5.97% 的用户
*/

var findWords = function(words) {
    let map = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    let arr = Array(26);
    let result = [];

    for (let i = 0; i < words.length; i += 1) {
        arr.fill(0);
        let w = words[i].toLowerCase();
        w = w.split('');
        for (let j = 0; j < w.length; j += 1) {
            arr[w[j].charCodeAt() - 97] += 1;
        }
        for (let k = 0; k < map.length; k += 1) {
            let m = map[k].split('');
            let res = 0;
            for (let n = 0; n < m.length; n += 1) {
                if (arr[m[n].charCodeAt() - 97] > 0) {
                    res += arr[m[n].charCodeAt() - 97];
                }
            }
            if (res < w.length &&　res > 0) {
                break;
            } else if (res === w.length) {
                result.push(words[i]);
                break;
            }
        }
    }

    return result;
};