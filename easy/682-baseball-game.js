/* 
你现在是棒球比赛记录员。
给定一个字符串列表，每个字符串可以是以下四种类型之一：
1.整数（一轮的得分）：直接表示您在本轮中获得的积分数。
2. "+"（一轮的得分）：表示本轮获得的得分是前两轮有效 回合得分的总和。
3. "D"（一轮的得分）：表示本轮获得的得分是前一轮有效 回合得分的两倍。
4. "C"（一个操作，这不是一个回合的分数）：表示您获得的最后一个有效 回合的分数是无效的，应该被移除。

每一轮的操作都是永久性的，可能会对前一轮和后一轮产生影响。
你需要返回你在所有回合中得分的总和

2019-07-03
35 / 35 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 78.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 45.62% 的用户
*/

var calPoints = function(ops) {
    let dp = [];

    for (let i = 0; i < ops.length; i += 1) {
        if (ops[i] === '+') {
            let num = dp[dp.length - 1] + dp[dp.length - 2];
            dp.push(num);
        } else if (ops[i] === 'C') {
            dp.pop();
        } else if (ops[i] === 'D') {
            let num = dp[dp.length - 1] * 2;
            dp.push(num);
        } else {
            dp.push(+ops[i]);
        }
    }

    return dp.reduce((total, num) => total + num);
};