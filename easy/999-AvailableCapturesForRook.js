/* 
在一个 8 x 8 的棋盘上，有一个白色车（rook）。也可能有空方块，白色的象（bishop）和黑色的卒（pawn）。它们分别以字符 “R”，“.”，“B” 和 “p” 给出。大写字符表示白棋，小写字符表示黑棋。

车按国际象棋中的规则移动：它选择四个基本方向中的一个（北，东，西和南），然后朝那个方向移动，直到它选择停止、到达棋盘的边缘或移动到同一方格来捕获该方格上颜色相反的卒。另外，车不能与其他友方（白色）象进入同一个方格。

返回车能够在一次移动中捕获到的卒的数量。

2020-03-26
22 / 22 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了51.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了85.00% 的用户
*/

var numRookCaptures = function(board) {
    let res = 0;

    function dfs(row, col, forward) {
        if (row < 0 || row >= 8 || col < 0 || col >= 8) return;
        if (board[row][col] === 'B') return;
        if (board[row][col] === 'p') {
            res += 1;
            return;
        }
        switch (forward) {
            case 0:
                dfs(row - 1, col, 0);
                break;
            case 1:
                dfs(row, col + 1, 1);
                break;
            case 2:
                dfs(row + 1, col, 2);
                break;
            case 3:
                dfs(row, col - 1, 3);
                break;
            default:
                break;
        }
    }

    for (let i = 0; i < 8; i += 1) {
        for (let j = 0; j < 8; j += 1) {
            if (board[i][j] === 'R') {
                for (let m = 0; m < 4; m += 1) {
                    dfs(i, j, m);
                }
            }
        }
    }

    return res;
};