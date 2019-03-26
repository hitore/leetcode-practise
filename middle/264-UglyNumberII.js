/* 
编写一个程序，找出第 n 个丑数。

丑数就是只包含质因数 2, 3, 5 的正整数。

2019-03-26
596 / 596 个通过测试用例
执行用时 : 448 ms, 在Ugly Number II的JavaScript提交中击败了5.77% 的用户
内存消耗 : 37.7 MB, 在Ugly Number II的JavaScript提交中击败了0.00% 的用户
*/

var nthUglyNumber = function(n) {
    if (n === 0) return 0;
    let arr = [1];
  
    while (arr.length < n) {
        const num = arr[arr.length - 1];
        let dp = Array(3).fill(0);
        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i] * 2 > num && dp[0] === 0) {
                dp[0] = arr[i] * 2;
            }
            if (arr[i] * 3 > num && dp[1] === 0) {
                dp[1] = arr[i] * 3;
            }
            if (arr[i] * 5 > num && dp[2] === 0) {
                dp[2] = arr[i] * 5;
            }
            if (dp[0] && dp[1] && dp[2]) {
                break;
            }
        }
        arr.push(Math.min(...dp));
    }
  
    return arr.pop();
  };