/* 
给定两个整数 L 和 R ，找到闭区间 [L, R] 范围内，计算置位位数为质数的整数个数。

（注意，计算置位代表二进制表示中1的个数。例如 21 的二进制表示 10101 有 3 个计算置位。还有，1 不是质数。）

2019-10-27
90 / 90 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 100.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 91.62% 的用户
*/

var countPrimeSetBits = function(L, R) {
    let arr = [0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0];
    let res = 0;
    for (let i = L; i <= R; i += 1) {
        let num = i;
        let count = 0;
        while (num !== 0) {
            count += 1;
            num &= (num - 1);
        }
        res += arr[count];
    }
    return res;
};