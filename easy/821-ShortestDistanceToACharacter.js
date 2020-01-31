/* 
给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组

2019-12-16
76 / 76 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 69.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 73.62% 的用户
*/

var shortestToChar = function(S, C) {
  let arr = [];
  
  function dfs(index = 0, target = null, front = 1) {
    if (index < 0 || index >= S.length) return;

    if (C === S[index]) {
      if (front === 1) {
        arr[index] = 0;
        dfs(index + 1, index, 1);
        dfs(index - 1, index, -1);
      }
      return;
    }
    
    if (target !== null) {
      if (arr[index]) {
        arr[index] = Math.min(arr[index], Math.abs(index - target));
      } else {
        arr[index] = Math.abs(index - target);
      }
    }

    dfs(index + front, target, front);
  }

  dfs();

  return arr;
};