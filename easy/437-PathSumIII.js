/* 
You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000

2019-05-31
126 / 126 个通过测试用例
执行用时 : 132 ms, 在Path Sum III的JavaScript提交中击败了81.33% 的用户
内存消耗 : 37.6 MB, 在Path Sum III的JavaScript提交中击败了6.25% 的用户
*/

var pathSum = function(root, sum) {
    if (root === null) return 0;
    return map(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
    function map(n, s) {
        if (n === null) return 0;
        s -= n.val;
        if (s === 0) {
            return 1 + map(n.left, s) + map(n.right, s);
        } else {
            return map(n.left, s) + map(n.right, s);
        }
    }
};