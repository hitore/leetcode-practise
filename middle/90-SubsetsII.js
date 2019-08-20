/* 
给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集.

示例:

输入: [1,2,2]
输出:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]

思路：DFS深度优先搜索

2019-04-01
19 / 19 个通过测试用例
执行用时 : 140 ms, 在Subsets II的JavaScript提交中击败了32.91% 的用户
内存消耗 : 38.7 MB, 在Subsets II的JavaScript提交中击败了0.00% 的用户
*/

// DFS深度优先搜索
var subsetsWithDup = function(nums) {
    let result = [[]];
    let resMap = {};

    function map(arr, start, num, res) {
        if (num === 0) {
            // 排序
            res.sort((a, b) => {
                return a - b;
            });
            // 去重
            let str = res.join('');
            if (resMap[str] === undefined) {
                resMap[str] = 1;
                result.push(res);
            }
            return;
        }
        for (let i = start; i < arr.length; i += 1) {
            map(arr, i + 1, num - 1, [...res, arr[i]]);
        }
    }

    for (let i = 0; i < nums.length; i += 1) {
        map(nums, 0, i + 1, []);
    }
    
    return result;
};