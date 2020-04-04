/* 
给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

2020-04-04
315 / 315 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了63.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了84.00% 的用户
*/

var trap = function(height) {
    let res = 0;
    let left = 0;
    let right = height.length - 1;
    let min = 0;

    while(left < right) {
        if (height[left] < height[right]) {
            min = height[left];
            left += 1;
            while(left < right && height[left] <= min) {
                res += min - height[left];
                left += 1;
            }
        } else {
            min = height[right];
            right -= 1;
            while(left < right && height[right] <= min) {
                res += min - height[right];
                right -= 1;
            }
        }
    }

    return res;
};