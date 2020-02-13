/* 
给定一个二维网格和一个单词，找出该单词是否存在于网格中。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

2020-02-13
87 / 87 个通过测试用例
执行用时 : 76 ms, 在所有 JavaScript 提交中击败了99.15% 的用户
内存消耗 : 37.2 MB, 在所有 JavaScript 提交中击败了74.98% 的用户
*/

var exist = function(board, word) {
    if (board.length === 0) return false;
    word = word.split('');
    let rowLen = board.length;
    let colLen = board[0].length;
    let wordLen = word.length;
    let arr = new Array(rowLen).fill('').map(() => new Array(colLen).fill(false))

    function dfs(row, col, i = 0) {
        if (i === wordLen) return true;
        if (row < 0 || row >= rowLen || col < 0 || col >= colLen) return false;
        if (arr[row][col]) return false;

        if (word[i] === board[row][col]) {
            arr[row][col] = true;

            let res = dfs(row, col + 1, i + 1) || dfs(row, col - 1, i + 1) || dfs(row + 1, col, i + 1) || dfs(row - 1, col, i + 1);

            arr[row][col] = false;

            return res;
        }
        return false;
    }

    for (let j = 0; j < board.length; j += 1) {
        for (let k = 0; k < board[j].length; k += 1) {
            if (dfs(j, k)) return true;
        }
    }

    return false;
};