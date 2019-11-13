/* 
给定一个非负整数 n 代表当前 LED 亮着的数量，返回所有可能的时间

2019-05-04
10 / 10 个通过测试用例
执行用时 : 92 ms, 在Binary Watch的JavaScript提交中击败了82.22% 的用户
内存消耗 : 34.7 MB, 在Binary Watch的JavaScript提交中击败了38.89% 的用户
*/

var readBinaryWatch = function(num) {
    let result = [];

    function count(n) {
        let res = 0;
        while(n > 0) {
            n = n & (n - 1);
            res += 1;
        }
        return res;
    }

    for(let i = 0; i < 12; i += 1) {
        for(let n = 0; n < 60; n += 1) {
            if (count(i) + count(n) === num) {
                result.push(`${i}:${n < 10 ? '0' : ''}${n}`);
            }
        }
    }
    return result;
};