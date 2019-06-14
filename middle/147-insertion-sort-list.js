/* 
对链表进行插入排序。

插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。
每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。

插入排序算法：

插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
重复直到所有输入数据插入完为止。


2019-06-14
22 / 22 个通过测试用例
执行用时 : 124 ms, 在Course Schedule的JavaScript提交中击败了23.21% 的用户
内存消耗 : 38.5 MB, 在Course Schedule的JavaScript提交中击败了61.11% 的用户
*/

var insertionSortList = function(head) {
    let newHead = new ListNode(-Number.MAX_VALUE);
    while(head) {
        let cp = newHead;
        while(cp) {
            if (cp.next === null) {
                cp.next = new ListNode(head.val);
                head = head.next;
                break;
            } else if (cp.val < head.val && cp.next.val >= head.val) {
                let temp = cp.next;
                cp.next = new ListNode(head.val);
                cp.next.next = temp;
                head = head.next;
                break;
            } else {
                cp = cp.next;
            }
        }
    }

    return newHead.next;
};