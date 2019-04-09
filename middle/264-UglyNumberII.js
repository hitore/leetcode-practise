/* 
编写一个程序，找出第 n 个丑数。

丑数就是只包含质因数 2, 3, 5 的正整数。

思路：除了1意外，所有的丑数都是2、3、5的倍数。所以下一个丑数可以在Math.min(2的倍数，3的倍数，5的倍数)里得到。

2019-03-26
596 / 596 个通过测试用例
执行用时 : 136 ms, 在Ugly Number II的JavaScript提交中击败了36.54% 的用户
内存消耗 : 36.6 MB, 在Ugly Number II的JavaScript提交中击败了0.00% 的用户
*/

var nthUglyNumber = function(n) {
    if (n === 0) return 0;
    let arr = [1];
    // 减少重复的计算
    let c2 = 0;
    let c3 = 0;
    let c5 = 0;
  
    for (let i = 1; i < n; i += 1) {
        const d2 = arr[c2] * 2;
        const d3 = arr[c3] * 3;
        const d5 = arr[c5] * 5;
        const u = Math.min(d2, d3, d5);
        if (u === d2) c2 += 1;
        if (u === d3) c3 += 1;
        if (u === d5) c5 += 1;
        arr.push(u);
    }
  
    return arr.pop();
  };