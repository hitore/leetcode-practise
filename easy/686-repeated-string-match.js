/* 
给定两个字符串 A 和 B, 寻找重复叠加字符串A的最小次数，使得字符串B成为叠加后的字符串A的子串，如果不存在则返回 -1。

2019-07-03
55 / 55 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 100.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 50.62% 的用户
*/

var repeatedStringMatch = function(A, B) {
    if (B === '') return 1;
    if (A === '') return -1;
    let str = '';
    let res = 0;
    while(str.length < B.length + A.length * 2) {
        str += A;
        res += 1;
        if (str.indexOf(B) > -1) {
            return res;
        }
    }
    return -1;
};