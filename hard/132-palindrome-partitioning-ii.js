/* 
给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。

返回符合要求的最少分割次数。

2019-07-22
29 / 29 个通过测试用例
执行用时 : 872 ms, 在Perfect Squares的JavaScript提交中击败了14.15% 的用户
内存消耗 : 37.2 MB, 在Perfect Squares的JavaScript提交中击败71.23% 的用户
*/

var minCut = function(s) {
    if (s === '') return 0;
    let dp = [0];
    function isRstr(str) {
        if (str === '') return true;
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

    for (let i = 1; i < s.length; i += 1) {
        if (isRstr(s.slice(0, i + 1))) {
            dp[i] = 0;
        } else {
            dp[i] = i;
            for (let j = 1; j <= i; j += 1) {
                if (isRstr(s.slice(j, i + 1))) {
                    dp[i] = Math.min(dp[i], dp[j - 1] + 1);
                }
            }
        }
    }
    
    return dp.pop();
};