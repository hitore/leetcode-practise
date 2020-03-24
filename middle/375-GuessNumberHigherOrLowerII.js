/* 
我们正在玩一个猜数游戏，游戏规则如下：

我从 1 到 n 之间选择一个数字，你来猜我选了哪个数字。

每次你猜错了，我都会告诉你，我选的数字比你的大了或者小了。

然而，当你猜了数字 x 并且猜错了的时候，你需要支付金额为 x 的现金。直到你猜到我选的数字，你才算赢得了这个游戏。

2020-03-24
13 / 13 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了5.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了100.00% 的用户
*/

var getMoneyAmount = function(n) {
    if (n === 1) return 0;
    let arr = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));

    for (let j = 2; j <= n ; j += 1) {
        for (let i = j - 1; i >= 1; i -= 1) {
            arr[i][j] = Number.MAX_VALUE;
            for (let m = i + 1; m < j; m += 1) {
                arr[i][j] = Math.min(m + Math.max(arr[i][m - 1], arr[m + 1][j]), arr[i][j]);
            }
            arr[i][j] = Math.min(arr[i][j], i + arr[i + 1][j]);
            arr[i][j] = Math.min(arr[i][j], j + arr[i][j - 1]);
        }
    }

    return arr[1][n];
};