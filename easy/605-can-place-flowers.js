/* 
假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False

2019-06-26
123 / 123 个通过测试用例
执行用时 : 128 ms , 在所有JavaScript提交中击败了 95.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 6.62% 的用户
*/

var canPlaceFlowers = function(flowerbed, n) {
    flowerbed = [0,...flowerbed,0];

    for (let i = 0; i < flowerbed.length; i += 1) {
        if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
            flowerbed[i] = 1;
            n -= 1;
        }
    }

    return n <= 0;
};