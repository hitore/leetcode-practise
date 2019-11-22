/* 
给定一个二叉树，找到最长的路径，这个路径中的每个节点具有相同值。 这条路径可以经过也可以不经过根节点。

注意：两个节点之间的路径长度由它们之间的边数表示

2019-07-04
71 / 71 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 78.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 8.62% 的用户
*/

var longestUnivaluePath = function(root) {
    let res = 0;
    function map(node) {
        if (node === null) return 0;
        let left = map(node.left);
        let right = map(node.right);
        if (node.left !== null && node.left.val === node.val) {
            left += 1;
        } else {
            left = 0;
        }
        if (node.right !== null && node.right.val === node.val) {
            right += 1;
        } else {
            right = 0;
        }
        res = Math.max(res, left + right);
        return Math.max(left, right);
    }
    map(root);
    return res;
};