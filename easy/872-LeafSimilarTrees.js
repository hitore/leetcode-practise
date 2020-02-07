/* 
请考虑一颗二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。

举个例子，如上图所示，给定一颗叶值序列为 (6, 7, 4, 9, 8) 的树。

如果有两颗二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。

如果给定的两个头结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。

2020-02-07
36 / 36 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 81.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 56.62% 的用户
*/

var leafSimilar = function(root1, root2) {

    function dfs(node) {
        if (node.left === null && node.right === null) {
            return `${node.val}`;
        }

        let str = '';

        if (node.left) {
            str += dfs(node.left);
        }
        if (node.right) {
            str += dfs(node.right);
        }
        
        return str;
    }

    return dfs(root1) === dfs(root2);
};