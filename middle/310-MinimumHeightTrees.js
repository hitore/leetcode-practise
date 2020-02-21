/* 
对于一个具有树特征的无向图，我们可选择任何一个节点作为根。图因此可以成为树，在所有可能的树中，具有最小高度的树被称为最小高度树。给出这样的一个图，写出一个函数找到所有的最小高度树并返回他们的根节点。

格式

该图包含 n 个节点，标记为 0 到 n - 1。给定数字 n 和一个无向边 edges 列表（每一个边都是一对标签）。

你可以假设没有重复的边会出现在 edges 中。由于所有的边都是无向边， [0, 1]和 [1, 0] 是相同的，因此不会同时出现在 edges 里。

2020-02-21
66 / 66 个通过测试用例
执行用时 : 76 ms, 在所有 JavaScript 提交中击败了100.00% 的用户
内存消耗 : 37.2 MB, 在所有 JavaScript 提交中击败了27.98% 的用户
*/

var findMinHeightTrees = function(n, edges) {
    let nodeInfo = [];
    let relativeArr = [];

    for (let i = 0; i < n; i += 1) {
        nodeInfo[i] = 0;
        relativeArr[i] = [];
    }

    for (let i = 0; i < edges.length; i += 1) {
        nodeInfo[edges[i][0]] += 1;
        nodeInfo[edges[i][1]] += 1;
        relativeArr[edges[i][0]].push(edges[i][1]);
        relativeArr[edges[i][1]].push(edges[i][0]);
    }

    let leafs = [];

    for (let i = 0; i < nodeInfo.length; i += 1) {
        if (nodeInfo[i] === 1) {
            leafs.push(i);
        }
    }

    if (leafs.length === 0) return [0];

    while(true) {
        let len = leafs.length;

        for (let i = 0; i < len; i += 1) {
            let node = leafs[i];
            for (let m = 0; m < relativeArr[node].length; m += 1) {
                let cnode = relativeArr[node][m];
                nodeInfo[cnode] -= 1;
                if (nodeInfo[cnode] === 1) {
                    leafs.push(cnode);
                }
            }
        }

        if (len < leafs.length) {
            leafs.splice(0, len);
            continue;
        }
        
        return leafs;
    }

};