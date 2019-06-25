/* 
给定一个 N 叉树，返回其节点值的前序遍历。

你找到的子数组应是最短的，请输出它的长度。

2019-06-25
36 / 36 个通过测试用例
执行用时 : 128 ms , 在所有JavaScript提交中击败了 81.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 24.62% 的用户
*/

var preorder = function(root) {
    if (root === null) return [];
    let child = [];
    for (let i = 0; i < root.children.length; i += 1) {
        let p = preorder(root.children[i]);
        child = [...child, ...p]
    }
    return [root.val, ...child];
};