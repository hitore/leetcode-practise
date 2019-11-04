/* 
一个网站域名，如"discuss.leetcode.com"，包含了多个子域名。作为顶级域名，常用的有"com"，下一级则有"leetcode.com"，最低的一级为"discuss.leetcode.com"。当我们访问域名"discuss.leetcode.com"时，也同时访问了其父域名"leetcode.com"以及顶级域名 "com"。

给定一个带访问次数和域名的组合，要求分别计算每个域名被访问的次数。其格式为访问次数+空格+地址，例如："9001 discuss.leetcode.com"。

接下来会给出一组访问次数和域名组合的列表cpdomains 。要求解析出所有域名的访问次数，输出格式和输入格式相同，不限定先后顺序。

2019-11-04
52 / 52 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 72.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 26.62% 的用户
*/

var subdomainVisits = function(cpdomains) {
    let map = {};
    let res = [];

    cpdomains.forEach(item => {
        const box = item.split(' ');
        const count = +box[0];
        const arr = box[1].split('.');
        const dp = [];

        for (let i = arr.length - 1; i >= 0; i -= 1) {
            dp.unshift(arr[i]);
            let key = dp.join('.');
            if (map[key] === undefined) {
                map[key] = count;
            } else {
                map[key] += count;
            }
        }
    });

    for (let key in map) {
        res.push(`${map[key]} ${key}`);
    }

    return res;
};