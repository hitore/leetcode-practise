/* 
给定一个正整数 N，找到并返回 N 的二进制表示中两个连续的 1 之间的最长距离。 

如果没有两个连续的 1，返回 0 。

2020-01-08
260 / 260 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 20.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 20.62% 的用户
*/

var binaryGap = function(N) {
  let b = N.toString(2);
  let max = 0;
  let last = -1;

  for (let i = 0; i < b.length; i += 1) {
    if (b[i] === '1') {
      if (last > -1) {
        max = Math.max(max, i - last);
      }
      last = i;
    }
  }

  return max;
};