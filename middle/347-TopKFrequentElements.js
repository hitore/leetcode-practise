/* 
给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

2020-03-17
21 / 21 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了55.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了20.00% 的用户
*/

var topKFrequent = function(nums, k) {
    let map = {};
    let res = [];

    for (let n of nums) {
        if (map[n] === undefined) map[n] = 0;
        map[n] += 1;
    }

    let arr = Object.keys(map).sort((a, b) => map[a] - map[b]);

    while(k--) {
        res.push(+arr.pop())
    }

    return res;
};