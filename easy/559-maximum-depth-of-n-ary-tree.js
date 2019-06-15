/* 
给定一个 N 叉树，找到其最大深度。

最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

2019-06-15
36 / 36 个通过测试用例
执行用时 : 940 ms, 在所有JavaScript提交中击败了 89.04% 的用户
内存消耗 : 87.9 MB, 在所有JavaScript提交中击败了 5.48% 的用户
*/

var maxDepth = function(root) {
    if (root === null) return 0;
    
    let res = 0;
    
    function map(node, num = 0) {
        if (node === null || node.children === null || node.children.length === 0) {
            res = Math.max(res, num + 1);
            return;
        }
        for (let i = 0; i < node.children.length; i += 1) {
            map(node.children[i], num + 1);
        }
    }
    
    map(root);
    
    return res;
};