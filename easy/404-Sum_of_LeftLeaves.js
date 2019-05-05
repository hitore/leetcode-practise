/* 
Find the sum of all left leaves in a given binary tree.

2019-05-05
102 / 102 个通过测试用例
执行用时 : 160 ms, 在Sum of Left Leaves的JavaScript提交中击败了7.14% 的用户
内存消耗 : 33.9 MB, 在Sum of Left Leaves的JavaScript提交中击败了94.44% 的用户
*/

var sumOfLeftLeaves = function(root) {
    function map(node, type) {
        if (node === null) return 0;
        if (node.left === null && node.right === null && type === 'left') return node.val;
        let left = 0 + map(node.left, 'left');
        let right = 0 + map(node.right, 'right');
        return left + right;
    }

    return map(root, 'root');
};