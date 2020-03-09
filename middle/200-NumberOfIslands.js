/* 
给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。

2020-03-09
47 / 47 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了62.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了87.00% 的用户
*/

var numIslands = function(grid) {
    if (grid.length === 0) return 0;
    let row = grid.length;
    let col = grid[0].length;
    let res = 0;

    function infect(r,c) {
        if (r < 0 || r >= row || c < 0 || c >= col) return;
        if (grid[r][c] !== '1') return;

        grid[r][c] = '2';
        infect(r - 1, c);
        infect(r + 1, c);
        infect(r, c - 1);
        infect(r, c + 1);
    }

    for (let i = 0; i < row; i += 1) {
        for (let n = 0; n < col; n += 1) {
            if (grid[i][n] === '1') {
                res += 1;
                infect(i, n);
            }
        }
    }

    return res;
};