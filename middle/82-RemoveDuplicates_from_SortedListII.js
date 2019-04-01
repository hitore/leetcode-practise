/* 
给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

示例 1:

输入: 1->2->3->3->4->4->5
输出: 1->2->5

2019-04-01
168 / 168 个通过测试用例
执行用时 : 112 ms, 在Remove Duplicates from Sorted List II的JavaScript提交中击败了31.46% 的用户
内存消耗 : 36.1 MB, 在Remove Duplicates from Sorted List II的JavaScript提交中击败了0.00% 的用户
*/

var deleteDuplicates = function(head) {
    if (head === null) return head;
    
    let root = new ListNode(-1);
    root.next = head;

    function map(front, middle, behind, p = false) {
        if (behind === null) {
            if (p) {
                front.next = null;
            }
            return;
        }
        if (middle.val === behind.val) {
            map(front, middle, behind.next, true);
        } else if (middle.val !== behind.val) {
            if (p) {
                front.next = behind;
                map(front, front.next, behind.next, false);
            } else {
                map(front.next, middle.next, behind.next, false);

            }
        }
    }

    map(root, root.next, root.next.next);
    
    return root.next;
};