/* 
给定一个字符串来代表一个学生的出勤记录，这个记录仅包含以下三个字符：

'A' : Absent，缺勤
'L' : Late，迟到
'P' : Present，到场
如果一个学生的出勤记录中不超过一个'A'(缺勤)并且不超过两个连续的'L'(迟到),那么这个学生会被奖赏。

你需要根据这个学生的出勤记录判断他是否会被奖赏

2019-06-14
113 / 113 个通过测试用例
执行用时 : 116 ms , 在所有JavaScript提交中击败了 97.44% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 47.62% 的用户
*/

var checkRecord = function(s) {
    let a = 0;
    let l = 0;
    s = s.split('');

    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === 'A') {
            a += 1;
        } else if (s[i] === 'L') {
            if (s[i - 1] === 'L') {
                l += 1;
            } else {
                l = 1;
            }
        }
        if (a >= 2 || l >= 3) {
            return false;
        }
    }

    return true;
};