/**
 * 创建二叉树
 * createTree([1, 2, 3]);
*/
function nodeList(val) {
    this.val = val;
    this.left = this.right = null;
}

function createTree(arr, n = null) {
    if (!arr.length) return null;
    n = new nodeList(arr[0]);
    if (typeof arr[1] === 'number') {
        const res = [arr[1], ...arr.slice(3)];
        n.left = createTree(res, n.left);
    }
    if (typeof arr[2] === 'number') {
        const res = [arr[2], ...arr.slice(5)];
        n.right = createTree(res, n.right);
    }
    return n;
}

module.exports = {
    createTree,
};