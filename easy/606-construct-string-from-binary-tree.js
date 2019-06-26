/* 
你需要采用前序遍历的方式，将一个二叉树转换成一个由括号和整数组成的字符串。

空节点则用一对空括号 "()" 表示。而且你需要省略所有不影响字符串与原始二叉树之间的一对一映射关系的空括号对。

2019-06-26
162 / 162 个通过测试用例
执行用时 : 128 ms , 在所有JavaScript提交中击败了 88.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 62.62% 的用户
*/

var tree2str = function(t) {
    if (t === null) return '';
    let left = tree2str(t.left);
    let right = tree2str(t.right);
    if (right) {
        return `${t.val}(${left})(${right})`;
    } else if (left) {
        return `${t.val}(${left})`;
    } else {
        return `${t.val}`;
    }
};