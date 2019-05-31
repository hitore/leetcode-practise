/**
 * 创建二叉树
 * createTree([1, 2, 3]);
*/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function createTree(array) {
    function done(arr, n = null, index = 0) {
        if (arr[index] !== undefined && arr[index] !== null) {
            n = new TreeNode(arr[index]);
            n.left = done(arr, n.left, (index * 2 + 1));
            n.right = done(arr, n.right, (index * 2 + 2));
        }
        return n;
    }
    for (let i = 0; i < array.length; i += 1) {
        let len = array.length - 1;
        if (array[i] === null && i * 2 < len) {
            array = [...array.slice(0, i * 2 + 1), null, null, ...array.slice(i * 2 + 1)];
        }
    }
    return done(array);
}

module.exports = {
    TreeNode,
    createTree,
};