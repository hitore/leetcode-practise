/* 
找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

说明：
所有数字都是正整数。
解集不能包含重复的组合。 

2019-07-09
18 / 18 个通过测试用例
执行用时 : 88 ms, 在House Robber II的JavaScript提交中击败了64.03% 的用户
内存消耗 : 33.7 MB, 在House Robber II的JavaScript提交中击败了16.00% 的用户
*/

var combinationSum3 = function(k, n) {
    let res = [];

    function map(time, target, arr, r = [], sum = 0) {
        if (sum > target) return;
        if (time === 0) {
            if (sum === target) res.push(r);
            return;
        }
        if (arr.length === 0) return;
        for (let i = 0; i < arr.length; i += 1) {
            map(time - 1, target, arr.slice(i + 1), [...r, arr[i]], sum + arr[i]);
        }
    }

    map(k, n, [1,2,3,4,5,6,7,8,9]);

    return res;
};