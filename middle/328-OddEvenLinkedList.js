/* 
给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

2020-03-03
71 / 71 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了59.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了69.00% 的用户
*/

var oddEvenList = function(head) {
    if (head === null) return head;
    let p1 = head;
    let list = head.next;
    let p2 = list;

    while(p1.next !== null && p2.next !== null) {
        p1.next = p2.next;
        p1 = p1.next;
        p2.next = p1.next;
        p2 = p2.next
    }

    p1.next = list;

    return head;
};