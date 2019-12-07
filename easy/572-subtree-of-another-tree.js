/* 
给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树

2019-06-24
176 / 176 个通过测试用例
执行用时 : 128 ms , 在所有JavaScript提交中击败了 88.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 97.62% 的用户
*/

var isSubtree = function(s, t) {
    function compare(t1, t2) {
        if (t1 === null && t2 === null) return true;
        if (t1 === null || t2 === null) return false;
        if (t1.val === t2.val) {
            let left = compare(t1.left, t2.left);
            let right = compare(t1.right, t2.right);
            return left && right;
        } else {
            return false;
        }
    }

    function map(node) {
        if (node === null) return false;
        let left = map(node.left);
        let right = map(node.right);
        let res = compare(node, t);
        return res || left || right;
    }

    return map(s);
};