/* 
给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

2019-04-01
32 / 32 个通过测试用例
执行用时 : 136 ms, 在Convert Sorted List to Binary Search Tree的JavaScript提交中击败了25.42% 的用户
内存消耗 : 39.2 MB, 在Convert Sorted List to Binary Search Tree的JavaScript提交中击败了0.00% 的用户
*/

function map(list, start, end) {
    if (start > end) return null;
    const index = Math.ceil(((start + end) / 2));
    let node = new TreeNode(list[index]);
    node.left = map(list, start, index - 1);
    node.right = map(list, index + 1, end);
    return node;
}

var sortedListToBST = function(head) {
    let arr = [];
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    return map(arr, 0, arr.length - 1);
};