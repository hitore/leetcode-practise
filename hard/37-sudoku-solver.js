/* 
编写一个程序，通过已填充的空格来解决数独问题。

一个数独的解法需遵循如下规则：

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。

2019-07-16
6 / 6 个通过测试用例
执行用时 : 872 ms, 在Perfect Squares的JavaScript提交中击败了97.15% 的用户
内存消耗 : 37.2 MB, 在Perfect Squares的JavaScript提交中击败79.98% 的用户
*/

var solveSudoku = function(board) {
    function lock(r, c, n) {
        let b = ~~(r / 3) * 3 + ~~(c / 3);
        row[r][n] += 1;
        col[c][n] += 1;
        block[b][n] += 1;
        board[r][c] = '' + n;
    }

    function removeLock(r,c,n) {
        let b = ~~(r / 3) * 3 + ~~(c / 3);
        row[r][n] -= 1;
        col[c][n] -= 1;
        block[b][n] -= 1;
        board[r][c] = '.';
    }

    function checkNum(r,c,i) {
        let b = ~~(r / 3) * 3 + ~~(c / 3);
        return row[r][i] + col[c][i] + block[b][i] === 0;
    }

    function nextPlace(r, c) {
        if (r === 8 && c === 8) {
            done = true;
        } else if (c === 8) {
            map(r + 1, 0);
        } else {
            map(r, c + 1);
        }
    }

    function map(r,c) {
        if (board[r][c] === '.') {
            for (let i = 1; i <= 9; i += 1) {
                if (checkNum(r,c,i)) {
                    lock(r,c,i);
                    nextPlace(r,c);
                    if (!done) removeLock(r,c,i);
                }
            }
        } else {
            nextPlace(r,c);
        }
    }

    let row = new Array(9 + 1).fill(0).map(item => new Array(9 + 1).fill(0));
    let col = new Array(9 + 1).fill(0).map(item => new Array(9 + 1).fill(0));
    let block = new Array(9 + 1).fill(0).map(item => new Array(9 + 1).fill(0));
    let done = false;

    for (let j = 0; j < 9; j += 1) {
        for (let k = 0; k < 9; k += 1) {
            if (board[j][k] !== '.') {
                lock(j, k, board[j][k]);
            }
        }
    }

    map(0,0);
};