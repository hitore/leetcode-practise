/* 
在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为“根”。 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。

计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。

2020-03-08
124 / 124 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了70.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了82.00% 的用户
*/

var rob = function(root) {
    // 记录节点，减少重复计算
    let map = new Map();

    function dfs(node) {
        if (node === null) return 0;
        if (map.has(node)) return map.get(node);
        let noe = dfs(node.left) + dfs(node.right);
        let two = node.val;
        if (node.left) {
            two += dfs(node.left.left) + dfs(node.left.right);
        }
        if (node.right) {
            two += dfs(node.right.left) + dfs(node.right.right);
        }
        let max = Math.max(noe, two);
        map.set(node, max);
        return max;
    }

    return dfs(root);
};