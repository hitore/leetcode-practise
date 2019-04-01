/* 
给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。

你应当保留两个分区中每个节点的初始相对位置。

示例:

输入: head = 1->4->3->2->5->2, x = 3
输出: 1->2->2->4->3->5

2019-04-01
166 / 166 个通过测试用例
执行用时 : 172 ms, 在Partition List的JavaScript提交中击败了3.70% 的用户
内存消耗 : 34 MB, 在Partition List的JavaScript提交中击败了0.00% 的用户
*/

var partition = function(head, x) {
    let front = new ListNode(-1);
    let behind = new ListNode(-1);
    let f = front;
    let b = behind;

    while(head) {
        if (head.val >= x) {
            b.next = new ListNode(head.val);
            b = b.next;
        } else {
            f.next = new ListNode(head.val);
            f = f.next;
        }
        head = head.next;
    }
    f.next = behind.next;
    return front.next;
};