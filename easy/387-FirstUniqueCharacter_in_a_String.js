/* 
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

2019-04-28
104 / 104 个通过测试用例
执行用时 : 252 ms, 在First Unique Character in a String的JavaScript提交中击败了17.61% 的用户
内存消耗 : 41.9 MB, 在First Unique Character in a String的JavaScript提交中击败了8.47% 的用户
*/
var firstUniqChar = function(s) {
    let copy = s;
    let res = -1;

    while(copy) {
        let behind = copy.slice(1);
        let reg = new RegExp(copy[0], 'g');
        if (reg.test(behind)) {
            copy = copy.replace(reg, '');
            continue;
        } else {
            res = s.indexOf(copy[0]);
            break;
        }
    }
    return res;
};