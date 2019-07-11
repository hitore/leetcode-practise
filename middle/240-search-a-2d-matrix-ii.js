/* 
编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。

2019-07-11
129 / 129 个通过测试用例
执行用时 : 136 ms, 在Ugly Number II的JavaScript提交中击败了71.54% 的用户
内存消耗 : 36.6 MB, 在Ugly Number II的JavaScript提交中击败了82.00% 的用户
*/

var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false;
    let x = matrix.length - 1;
    let y = 0;
    while(x >= 0 && y < matrix[0].length) {
        if (matrix[x][y] === target) {
            return true;
        } else if (matrix[x][y] > target) {
            x -= 1;
        } else {
            y += 1;
        }
    }
    return false;
};