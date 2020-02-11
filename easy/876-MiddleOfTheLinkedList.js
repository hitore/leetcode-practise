/* 
给定一个带有头结点 head 的非空单链表，返回链表的中间结点。

如果有两个中间结点，则返回第二个中间结点。

2020-02-11
15 / 15 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 80.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 83.62% 的用户
*/

var middleNode = function(head) {
    let fast = head;
    let slow = head;

    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
};