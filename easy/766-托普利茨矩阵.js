/* 
如果一个矩阵的每一方向由左上到右下的对角线上具有相同元素，那么这个矩阵是托普利茨矩阵。

给定一个 M x N 的矩阵，当且仅当它是托普利茨矩阵时返回 True。

2019-10-15
482 / 482 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 89.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 38.62% 的用户
*/

var isToeplitzMatrix = function(matrix) {
  for (let i = 1; i < matrix.length; i += 1) {
    let last = matrix[i - 1];
    let self = matrix[i];
    for (let n = 1; n < self.length; n += 1) {
      if (self[n] !== last[n - 1]) return false;
    }
  }
  return true;
};