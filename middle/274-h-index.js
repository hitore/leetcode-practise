/* 
给定一位研究者论文被引用次数的数组（被引用次数是非负整数）。编写一个方法，计算出研究者的 h 指数。

h 指数的定义: “h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （N 篇论文中）至多有 h 篇论文分别被引用了至少 h 次。（其余的 N - h 篇论文每篇被引用次数不多于 h 次。）”

2019-07-12
82 / 82 个通过测试用例
执行用时 : 136 ms, 在Ugly Number II的JavaScript提交中击败了84.54% 的用户
内存消耗 : 36.6 MB, 在Ugly Number II的JavaScript提交中击败了61.00% 的用户
*/

var hIndex = function(citations) {
    citations.sort((a, b) => b - a);
    res = 0;
    for (let i = 0; i < citations.length; i += 1) {
        let h = i + 1;
        if (h <= citations[i]) {
            res = Math.max(res, h);
        }
    }
    return res;
};