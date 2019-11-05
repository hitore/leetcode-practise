/* 
给定一个二叉搜索树的根结点 root, 返回树中任意两节点的差的最小值

2019-10-30
45 / 45 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 68.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 45.62% 的用户
*/

var minDiffInBST = function(root) {
    if (!root) return 0;
    let arr = [];
    let min = Number.MAX_VALUE;
    dp(root);
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 1; i += 1) {
        let num = arr[i];
        min = Math.min(min, Math.abs(num - arr[i + 1]));
    }
    return min;

    function dp(node) {
        if (!node) return;
        arr.push(node.val);
        dp(node.left);
        dp(node.right);
    }
};