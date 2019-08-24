/* 
Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s

2019-06-05
22 / 22 个通过测试用例
执行用时 : 140 ms, 在Palindrome Partitioning的JavaScript提交中击败了68.91% 的用户
内存消耗 : 41.6 MB, 在Palindrome Partitioning的JavaScript提交中击败了41.18% 的用户
*/

var partition = function(s) {
    let res = [];

    function isCallbackStr(str) {
        if (str.length === 0) return true;
        let left = 0;
        let right = str.length - 1;
        str = str.split('');
        while (left < right) {
            if (str[left] === str[right]) {
                left += 1;
                right -= 1;
            } else {
                return false;
            }
        }
        return true;
    }

    function map(start, out = []) {
        if (start === s.length) res.push(out);
        for (let i = start; i < s.length; i += 1) {
            if (!isCallbackStr(s.slice(start, i + 1))) continue;
            map(i + 1, [...out, s.slice(start, i + 1)]);
        }
    }

    map(0);

    return res;
};