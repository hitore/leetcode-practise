/* 
给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

例如，给定三角形：

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

2019-03-25
43 / 43 个通过测试用例
执行用时 : 136 ms, 在Triangle的JavaScript提交中击败了10.09% 的用户
内存消耗 : 35.1 MB, 在Triangle的JavaScript提交中击败了0.00% 的用户
*/

var minimumTotal = function(triangle) {
    let arr = new Array(triangle.length).fill(0).map(i => Array(triangle.length).fill(0));
  
    for (let i = triangle.length - 1; i >= 0; i -= 1) {
        for (let m = 0; m < triangle[i].length; m += 1) {
            if (arr[i + 1]) {
                arr[i][m] = Math.min(arr[i + 1][m], arr[i + 1][m + 1]) + triangle[i][m];
            } else {
                arr[i][m] = triangle[i][m];
            }
        }
    }
  
    return arr[0][0];
  };