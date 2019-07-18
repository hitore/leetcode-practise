/* 
二叉搜索树中的两个节点被错误地交换。

请在不改变其结构的情况下，恢复这棵树。

2019-07-18
1917 / 1917 个通过测试用例
执行用时 : 872 ms, 在Perfect Squares的JavaScript提交中击败了61.15% 的用户
内存消耗 : 37.2 MB, 在Perfect Squares的JavaScript提交中击败75.98% 的用户
*/

var recoverTree = function(root) {
    let pre = null;
    let n1 = null;
    let n2 = null;

    function led(node) {
        if (node === null) return;
        led(node.left);
        if (pre && pre.val >= node.val) {
            if (n1 === null) {
                n1 = pre;
            }
            if (n1) {
                n2 = node;
            }
        }
        pre = node;
        led(node.right);
    }

    led(root);

    let temp = n1.val;
    n1.val = n2.val;
    n2.val = temp;
};