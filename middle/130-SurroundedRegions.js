/* 
Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

2019-06-03
59 / 59 个通过测试用例
执行用时 : 152 ms, 在Surrounded Regions的JavaScript提交中击败了66.67% 的用户
内存消耗 : 41.7 MB, 在Surrounded Regions的JavaScript提交中击败了91.67% 的用户
*/

var solve = function(board) {
    if (board.length < 3) return;
    if (board[0].length < 3) return;
    let len = board.length - 1;
    let rowLen = board[0].length - 1;
    function dfs(j, k) {
        if (j < 0 || k < 0 || j > len || k > rowLen || board[j][k] !== 'O') return;
        board[j][k] = '1';
        dfs(j + 1, k);
        dfs(j - 1, k);
        dfs(j, k + 1);
        dfs(j, k - 1);
    }
    for (let i = 1; i < rowLen; i += 1) {
        dfs(0, i);
        dfs(len, i);
    }
    for (let i = 0; i <= len; i += 1) {
        dfs(i, 0);
        dfs(i, rowLen);
    }
    for (let j = 0; j <= len; j += 1) {
        for(let k = 0; k <= rowLen; k += 1) {
            if (board[j][k] === '1') {
                board[j][k] = 'O';
            } else if (board[j][k] === 'O') {
                board[j][k] = 'X';
            }
        }
    }
};