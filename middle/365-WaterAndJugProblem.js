/* 
有两个容量分别为 x升 和 y升 的水壶以及无限多的水。请判断能否通过使用这两个水壶，从而可以得到恰好 z升 的水？

如果可以，最后请用以上水壶中的一或两个来盛放取得的 z升 水。

你允许：

装满任意一个水壶
清空任意一个水壶
从一个水壶向另外一个水壶倒水，直到装满或者倒空

2020-03-20
34 / 34 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了38.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了38.00% 的用户
*/

var canMeasureWater = function(x, y, z) {
    if (z === 0) return true;
    if (z > x + y) return false;
    if (x === 0 || y === 0) {
        return x + y === z;
    }

    if (x > y) {
        let temp = x;
        x = y;
        y = temp;
    }

    while(y % x !== 0) {
        let temp = y % x;
        y = x;
        x = temp;
    }

    return z % x === 0;
};