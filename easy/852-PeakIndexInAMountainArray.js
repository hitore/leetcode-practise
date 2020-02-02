/* 
我们把符合下列属性的数组 A 称作山脉：

A.length >= 3
存在 0 < i < A.length - 1 使得A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
给定一个确定为山脉的数组，返回任何满足 A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1] 的 i 的值。

2020-02-02
32 / 32 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 97.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 69.62% 的用户
*/

var peakIndexInMountainArray = function(A) {
    let max = Math.max(...A);
    return A.indexOf(max);
};