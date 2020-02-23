/* 
编写一段程序来查找第 n 个超级丑数。

超级丑数是指其所有质因数都是长度为 k 的质数列表 primes 中的正整数。

2020-02-23
83 / 83 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了29.54% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了16.00% 的用户
*/

var nthSuperUglyNumber = function(n, primes) {
    if (n === 0) return 0;
    let arr = [1];
    let len = primes.length;
    let indexList = new Array(len).fill(0);

    for (let i = 1; i < n; i += 1) {
        let nextList = [];
        for (let m = 0; m < primes.length; m += 1) {
            let index = indexList[m]
            nextList[m] = arr[index] * primes[m];
        }
        
        let next = Math.min(...nextList);
        for (let m = 0; m < nextList.length; m += 1) {
            if (nextList[m] === next) {
                indexList[m] += 1;
            }
        }

        arr.push(next);
    }

    return arr.pop();
};