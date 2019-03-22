/* 
给定一个整数 n，生成所有由 1 ... n 为节点所组成的二叉搜索树。
示例:

输入: 3
输出:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]

解题参考：https://blog.csdn.net/qq_41951186/article/details/82740468
思路：当 i 为根结点时，[1....i-1]构成它的左子树，[i+1.....n]构成它的右子树。每个结点都重复这个逻辑。

2019-03-22
9 / 9 个通过测试用例
执行用时 : 192 ms, 在Unique Binary Search Trees II的JavaScript提交中击败了5.71% 的用户
内存消耗 : 37.4 MB, 在Unique Binary Search Trees II的JavaScript提交中击败了0.00% 的用户
*/

var generateTrees = function(n) {
    function map(start, end) {
        const res = [];
        if (end < start) return [null];
        if (end === start) {
            const root = new TreeNode(start);
            res.push(root);
            return res;
        }
        for (let i = start; i <= end; i += 1) {
            const left = map(start, i - 1);
            const right = map(i + 1, end);
            for (let m = 0; m < left.length; m += 1) {
                for (let n = 0; n < right.length; n += 1) {
                    const root = new TreeNode(i);
                    root.left = left[m];
                    root.right = right[n];
                    res.push(root);
                }
            }
        }
        return res;
    }
    if (n === 0) return [];
    return map(1, n);
};