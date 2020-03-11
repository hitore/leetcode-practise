/* 
给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。

形式上，如果可以找出索引 i+1 < j 且满足 (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1]) 就可以将数组三等分。

2020-03-11
55 / 55 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 13.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 68.62% 的用户
*/

var canThreePartsEqualSum = function(A) {
    if (A.length < 3) return false;

    let sum = A.reduce((total, num) => total + num );
    if (sum % 3 !== 0) return false;
    let avg = sum / 3;
    let left = 0;
    let right = A.length - 1;
    let arr = [0,0];

    if (avg === 0) return A.length >= 6;

    while (left < right) {
        if (arr[0] !== avg) {
            arr[0] += A[left];
            left += 1;
        }
        if (arr[1] !== avg) {
            arr[1] += A[right];
            right -= 1;
        }
        if (arr[0] === avg && arr[1] === avg) return true;
    }

    return false;
};