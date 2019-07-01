/* 
给定一个非空二叉树, 返回一个由每层节点平均值组成的数组.

2019-07-01
65 / 65 个通过测试用例
执行用时 : 128 ms , 在所有JavaScript提交中击败了 87.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 5.62% 的用户
*/

var averageOfLevels = function(root) {
    let res = [];
    let nums = [];

    function map(node, index = 0) {
        if (node === null) return;
        res[index] === undefined ? res[index] = node.val : res[index] += node.val;
        nums[index] === undefined ? nums[index] = 1 : nums[index] += 1;
        map(node.left, index + 1);
        map(node.right, index + 1);
    }

    map(root);

    return res.map((r, i) => {
        return r / nums[i];
    });
};