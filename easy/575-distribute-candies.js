/* 
给定一个偶数长度的数组，其中不同的数字代表着不同种类的糖果
每一个数字代表一个糖果。你需要把这些糖果平均分给一个弟弟和一个妹妹
返回妹妹可以获得的最大糖果的种类数

2019-06-24
205 / 205 个通过测试用例
执行用时 : 128 ms , 在所有JavaScript提交中击败了 88.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 90.62% 的用户
*/

var distributeCandies = function(candies) {
    return Math.min(candies.length / 2, new Set(candies).size);
};