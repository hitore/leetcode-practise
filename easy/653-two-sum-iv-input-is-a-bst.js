/* 
给定一个二叉搜索树和一个目标结果，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。

2019-07-01
123 / 123 个通过测试用例
执行用时 : 128 ms , 在所有JavaScript提交中击败了 84.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 35.62% 的用户
*/

var findTarget = function(root, k) {
    let map = {};

    function dps (node) {
        if (node === null) return false;
        if (map[k - node.val]) return true;
        map[node.val] = true;
        return dps(node.left) || dps(node.right);
    }

    return dps(root);
};