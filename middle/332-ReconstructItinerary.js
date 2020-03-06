/* 
给定一个机票的字符串二维数组 [from, to]，子数组中的两个成员分别表示飞机出发和降落的机场地点，对该行程进行重新规划排序。所有这些机票都属于一个从JFK（肯尼迪国际机场）出发的先生，所以该行程必须从 JFK 出发。

说明:

如果存在多种有效的行程，你可以按字符自然排序返回最小的行程组合。例如，行程 ["JFK", "LGA"] 与 ["JFK", "LGB"] 相比就更小，排序更靠前
所有的机场都用三个大写字母表示（机场代码）。
假定所有机票至少存在一种合理的行程。

2020-03-06
80 / 80 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了43.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了76.00% 的用户
*/

var findItinerary = function(tickets) {
    let map = {};
    let res = [];

    for (let i = 0; i < tickets.length; i += 1) {
        let to = tickets[i][0];
        let form = tickets[i][1];
        if (map[to] === undefined) map[to] = [];
        if (map[form] === undefined) map[form] = [];
        map[to].push(form);
    }

    for (let air in map) {
        map[air].sort();
    }

    function dfs(cur) {
        let nextList = map[cur];
        while(nextList.length) {
            let next = nextList.shift();
            dfs(next);
        }
        res.unshift(cur);
    }

    dfs('JFK')

    return res;
};