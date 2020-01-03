/* 
在一根无限长的数轴上，你站在0的位置。终点在target的位置。

每次你可以选择向左或向右移动。第 n 次移动（从 1 开始），可以走 n 步。

返回到达终点需要的最小移动次数

2019-10-05
73 / 73 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 100.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 9.62% 的用户
*/

var reachNumber = function(target) {
    if (target === 0) return 0;
    target = Math.abs(target);
    let sum = 0;
    let k = 0;
    while(sum < target) {
        k += 1;
        sum += k;
    }
    let diff = sum - target;
    if (diff % 2 === 0) {
        return k;
    } else if (k % 2 === 0) {
        return k + 1;
    } else {
        return k + 2;
    }
};