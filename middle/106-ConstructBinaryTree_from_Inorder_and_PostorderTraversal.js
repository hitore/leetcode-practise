/* 
根据一棵树的中序遍历与后序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]

思路：
中序遍历[左，根，右]
后序遍历[左，右，根]

1.后序遍历的最后一个为根结点
2.中序遍历中根节点的左边部分为左子树集，右边部分为右子树集
3.从中序遍历数组可以知道左子树集与右子树集的长度
4.从以上获得到的信息分解后序遍历

2019-03-29
203 / 203 个通过测试用例
执行用时 : 128 ms, 在Construct Binary Tree from Inorder and Postorder Traversal的JavaScript提交中击败了74.19% 的用户
内存消耗 : 36 MB, 在Construct Binary Tree from Inorder and Postorder Traversal的JavaScript提交中击败了42.86% 的用户
*/

var buildTree = function(inorder, postorder) {
    function map(iArr, pArr, iStart, iEnd, pStart, pEnd) {
        if (iStart > iEnd || pStart > pEnd) return null;
        let node = new TreeNode(pArr[pEnd]);
        let inoIndex = iArr.indexOf(node.val);
        node.left = map(iArr, pArr, iStart, inoIndex - 1, pStart, pStart + inoIndex - iStart - 1);
        node.right = map(iArr, pArr, inoIndex + 1, iEnd, pStart + inoIndex - iStart, pEnd - 1);
        return node;
    }
    return map(inorder, postorder, 0, inorder.length - 1, 0, postorder.length - 1);
};