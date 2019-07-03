/* 
给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

2019-07-03
460 / 460 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 24.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 13.62% 的用户
*/

function isReverse(str) {
    str = str.split('');
    let left = 0;
    let right = str.length - 1;
    while(left < right) {
        if (str[left] === str[right]) {
            left += 1;
            right -= 1;
        } else {
            return false;
        }
    }
    return true;
}

var validPalindrome = function(s) {
    s = s.split('');
    let left = 0;
    let right = s.length - 1;
    while(left < right) {
        if (s[left] === s[right]) {
            left += 1;
            right -= 1;
        } else {
            let str = s.join('');
            return isReverse(str.slice(left + 1, right + 1)) || isReverse(str.slice(left, right));
        }
    }
    return true;
};