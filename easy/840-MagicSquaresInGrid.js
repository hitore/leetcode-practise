/* 
3 x 3 的幻方是一个填充有从 1 到 9 的不同数字的 3 x 3 矩阵，其中每行，每列以及两条对角线上的各数之和都相等。

给定一个由整数组成的 grid，其中有多少个 3 × 3 的 “幻方” 子矩阵？（每个子矩阵都是连续的）。

2019-12-29
91 / 91 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 85.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 70.62% 的用户
*/

var numMagicSquaresInside = function(grid) {
    let res = 0;
    let huanArr = [
        '438951276',
        '834159672',
        '276951438',
        '672159834',
        '816357492',
        '618753294',
        '492357816',
        '294753618',
    ];

    if (grid.length < 3) return res;

    for (let m = 0; m <= grid.length - 3; m += 1) {
        let item = grid[m];
        if (item && item.length >= 3) {
            for (let i = 0; i <= item.length - 3; i += 1) {
                let str = '';
                for (let k = 0; k < 3; k += 1) {
                    for (let l = 0; l < 3; l += 1) {
                        str += grid[m + k][i + l];
                    }
                }
                if (huanArr.includes(str)) res += 1;
            }
        }
    }

    return res;
};