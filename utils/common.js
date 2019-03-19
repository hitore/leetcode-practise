/**
 * 创建二叉树
 * createTree([1, 2, 3]);
*/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function init(m, n = null, row = 0, col = 0) {
    if (m[row] && m[row][col]) {
        n = new TreeNode(m[row][col]);
        n.left = init(m, n.left, row + 1, (col * 2));
        n.right = init(m, n.right, row + 1, (col * 2 + 1));
    }
    return n;
}

function createTree(arr) {
    let map = [];
    let drop = 0;
    let index = 0;
    while (index < arr.length) {
        if (map[drop] === undefined) {
            map[drop] = [arr[index]];
        } else {
            map[drop].push(arr[index]);
        }
        index += 1;
        if (map[drop].length >= Math.pow(2, drop)) {
            drop += 1;
        }
    }
    return init(map);
}

module.exports = {
    createTree,
};