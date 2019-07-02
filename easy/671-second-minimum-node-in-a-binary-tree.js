/* 
给定一个非空特殊的二叉树，每个节点都是正数，并且每个节点的子节点数量只能为 2 或 0。如果一个节点有两个子节点的话，那么这个节点的值不大于它的子节点的值。 

给出这样的一个二叉树，你需要输出所有节点中的第二小的值。如果第二小的值不存在的话，输出 -1 。

2019-07-02
35 / 35 个通过测试用例
执行用时 : 128 ms , 在所有JavaScript提交中击败了 67.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 56.62% 的用户
*/

var findSecondMinimumValue = function(root) {
    if (root === null) return -1;
    function map(node, r) {
        if (node === null) return Number.MAX_VALUE;
        if (node.val === r) {
            return Math.min(map(node.left, r), map(node.right, r));
        } else {
            return node.val;
        }
    }
    let res = map(root, root.val);
    if (res === Number.MAX_VALUE) return -1;
    return res;
};