/* 
给定一个从1 到 n 排序的整数列表。
首先，从左到右，从第一个数字开始，每隔一个数字进行删除，直到列表的末尾。
第二步，在剩下的数字中，从右到左，从倒数第一个数字开始，每隔一个数字进行删除，直到列表开头。
我们不断重复这两步，从左到右和从右到左交替进行，直到只剩下一个数字。
返回长度为 n 的列表中，最后剩下的数字。

推导参考: https://blog.csdn.net/afei__/article/details/83689502

2020-03-28
3377 / 3377 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了95.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了50.00% 的用户
*/

var lastRemaining = function(n) {
    return n === 1 ? 1 : 2 * (parseInt(n / 2) + 1 - lastRemaining(parseInt(n / 2)));
};