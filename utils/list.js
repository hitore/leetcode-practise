/**
 * 创建链表
 * createList([1, 2, 3]);
*/
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createList(arr) {
    if (arr.length === 0) return null;
    const l = new ListNode(arr[0]);
    l.next = createList([...arr.slice(1)]);
    return l;
}

module.exports = {
    ListNode,
    createList,
};