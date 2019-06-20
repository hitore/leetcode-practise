/* 
在MATLAB中，有一个非常有用的函数 reshape，它可以将一个矩阵重塑为另一个大小不同的新矩阵，但保留其原始数据。

给出一个由二维数组表示的矩阵，以及两个正整数r和c，分别表示想要的重构的矩阵的行数和列数。

重构后的矩阵需要将原始矩阵的所有元素以相同的行遍历顺序填充。

如果具有给定参数的reshape操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。

2019-06-20
56 / 56 个通过测试用例
执行用时 : 116 ms , 在所有JavaScript提交中击败了 82.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 93.62% 的用户
*/

var matrixReshape = function(nums, r, c) {
    if (nums.length === 0) return [];
    let row = nums.length;
    let col = nums[0].length;
    let res = Array(r).fill(null).map(() => Array(c).fill(null));
    let rr = 0;
    let cc = 0;
    if (r * c > row * col) return nums;
    for (let j = 0; j < row; j += 1) {
        for (let k = 0; k < col; k += 1) {
            res[rr][cc] = nums[j][k];
            cc += 1;
            if (cc >= c) {
                rr += 1;
                cc = 0;
            }
        }
    }
    return res;
};