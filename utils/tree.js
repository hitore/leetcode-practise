/**
 * 创建二叉树
 * createTree([1, 2, 3]);
*/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function createTree(arr, n = null, index = 0) {
    if (arr[index] !== undefined) {
        n = new TreeNode(arr[index]);
        n.left = createTree(arr, n.left, (index * 2 + 1));
        n.right = createTree(arr, n.right, (index * 2 + 2));
    }
    return n;
}

module.exports = {
    TreeNode,
    createTree,
};