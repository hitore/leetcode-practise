/* 
Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie. Each child i has a greed factor gi, which is the minimum size of a cookie that the child will be content with; and each cookie j has a size sj. If sj >= gi, we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

2019-05-17
21 / 21 个通过测试用例
执行用时 : 136 ms, 在Assign Cookies的JavaScript提交中击败了96.55% 的用户
内存消耗 : 37.6 MB, 在Assign Cookies的JavaScript提交中击败了30.26% 的用户
*/

var findContentChildren = function(g, s) {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    let ig = g.length - 1;
    let is = s.length - 1;
    let res = 0;
    while(ig >= 0 && is >= 0) {
        if (s[is] >= g[ig]) {
            res += 1;
            ig -= 1;
            is -= 1;
        } else {
            ig -= 1;
        }
    }
    return res;
};