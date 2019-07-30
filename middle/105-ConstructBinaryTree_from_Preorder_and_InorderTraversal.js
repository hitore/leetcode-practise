/* 
根据一棵树的前序遍历与中序遍历构造二叉树

注意:
你可以假设树中没有重复的元素

例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]

2019-03-29
203 / 203 个通过测试用例
执行用时 : 192 ms, 在Construct Binary Tree from Preorder and Inorder Traversal的JavaScript提交中击败了63.38% 的用户
内存消耗 : 36 MB, 在Construct Binary Tree from Preorder and Inorder Traversal的JavaScript提交中击败了54.55% 的用户
*/

// 第二次提交
// 用索引代替slice，提高性能
var buildTree = function(preorder, inorder) {
    function map(pArr, iArr, pStart, iStart, iEnd) {
        if (iStart > iEnd) return null;
        let n = new TreeNode(pArr[pStart]);
        let io = inorder.indexOf(n.val);
        n.left = map(pArr, iArr, pStart + 1, iStart, io - 1);
        // 根据左子树集的长度(io - iStart)直接得到下一个右子树的根结点
        n.right = map(pArr, iArr, pStart + io - iStart + 1, io + 1, iEnd);
        return n;
    }
    return map(preorder, inorder, 0, 0, inorder.length - 1);
};


// 第一次提交
// var buildTree = function(preorder, inorder) {
//     if (inorder.length === 0) return null;
//     for (let l = 0; l < preorder.length; l += 1) {
//         let n = new TreeNode(preorder[l]);
//         let io = inorder.indexOf(n.val);
//         if (io > -1) {
//             let left = buildTree([...preorder.slice(1)], [...inorder.slice(0, io)]);
//             let right = buildTree([...preorder.slice(1)], [...inorder.slice(io + 1)]);
//             n.left = left;
//             n.right = right;
//             return n;
//         }
//     }
// };