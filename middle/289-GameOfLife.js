/* 
根据百度百科，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在1970年发明的细胞自动机。

给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞具有一个初始状态 live（1）即为活细胞， 或 dead（0）即为死细胞。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
根据当前状态，写一个函数来计算面板上细胞的下一个（一次更新后的）状态。下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。

2020-02-19
23 / 23 个通过测试用例
执行用时 : 76 ms, 在所有 JavaScript 提交中击败了78.15% 的用户
内存消耗 : 37.2 MB, 在所有 JavaScript 提交中击败了37.98% 的用户
*/

var gameOfLife = function(board) {
    if (board.length === 0) return;

    let row = board.length;
    let col = board[0].length;
    let position = [
        [-1, -1],[-1,0],[-1,1],
        [0,-1],[0,1],
        [1,-1],[1,0],[1,1]
    ];
    let baseMap = {
        0: 0,
        1: 1,
        '00': 0,
        '01': 0,
        '10': 1,
        '11': 1,
    };
    let resetMap = {
        '00': 0,
        '01': 1,
        '10': 0,
        '11': 1,
    };

    function getStatus(r, c) {
        let res = 0;
        let base = baseMap[board[r][c]];
        for (let i = 0; i < position.length; i += 1) {
            let line = r + position[i][0];
            let list = c + position[i][1];
            if (0 <= line && row > line && 0 <= list && col > list) {
                res += baseMap[board[line][list]];
            }
        }
        if (res === 3 || (base === 1 && res === 2)) {
            return `${base}1`;
        };
        return `${base}0`;
    }

    for (let m = 0; m < row; m += 1) {
        for (let n = 0; n < col; n += 1) {
            board[m][n] = getStatus(m, n);
        }
    }

    for (let m = 0; m < row; m += 1) {
        for (let n = 0; n < col; n += 1) {
            board[m][n] = resetMap[board[m][n]];
        }
    }
};