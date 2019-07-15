/* 
给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2)。

2019-07-15
12 / 12 个通过测试用例
执行用时 : 272 ms, 在Perfect Squares的JavaScript提交中击败了60.13% 的用户
内存消耗 : 37.2 MB, 在Perfect Squares的JavaScript提交中击败40.98% 的用户
*/

var NumMatrix = function(matrix) {
    this.sumArr = [];
    matrix.forEach(row => {
        let rowSum = [];
        let sum = 0;
        row.forEach(col => {
            sum += col;
            rowSum.push(sum);
        });
        this.sumArr.push(rowSum);
    });
};

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0;
    for (let i = row1; i <= row2; i += 1) {
        sum += this.sumArr[i][col2] - (this.sumArr[i][col1 - 1] || 0);
    }
    return sum;
};