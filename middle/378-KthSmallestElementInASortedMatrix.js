/* 
给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第k小的元素。
请注意，它是排序后的第k小元素，而不是第k个元素。

2020-03-27
85 / 85 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了100.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了100.00% 的用户
*/

var kthSmallest = function(matrix, k) {
    let len = matrix.length;
    let min = matrix[0][0];
    let max = matrix[len - 1][len - 1];

    while(min < max) {
        let mid = Math.floor((min + max) / 2);
        let count = 0;
        for (let i = 0; i < len; i += 1) {
            let j = len - 1;
            while(j >= 0 && matrix[i][j] > mid) {
                j -= 1;
            }
            count += j + 1;
        }

        if (count < k) {
            min = mid + 1;
        } else {
            max = mid;
        }
    }

    return min;
};