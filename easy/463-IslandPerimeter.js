/* 
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

2019-05-21
5833 / 5833 个通过测试用例
执行用时 : 320 ms, 在Island Perimeter的JavaScript提交中击败了91.11% 的用户
内存消耗 : 44.4 MB, 在Island Perimeter的JavaScript提交中击败了47.22% 的用户
*/

var islandPerimeter = function(grid) {
    let res = 0;

    for (let i = 0; i < grid.length; i += 1) {
        for (let j = 0; j < grid[i].length; j += 1) {
            if (grid[i][j] !== 1) continue;
            res += 4;
            // top
            if (grid[i - 1] && grid[i - 1][j]) {
                res -= 1;
            }
            // right
            if (grid[i][j + 1]) {
                res -= 1;
            }
            // bottom
            if (grid[i + 1] && grid[i + 1][j]) {
                res -= 1;
            }
            if (grid[i][j - 1]) {
                res -= 1;
            }
        }
    }

    return res;
};