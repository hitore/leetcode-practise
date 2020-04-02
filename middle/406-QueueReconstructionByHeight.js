/* 
假设有打乱顺序的一群人站成一个队列。 每个人由一个整数对(h, k)表示，其中h是这个人的身高，k是排在这个人前面且身高大于或等于h的人数。 编写一个算法来重建这个队列。

注意：
总人数少于1100人。

2020-04-02
37 / 37 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了58.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了100.00% 的用户
*/

var reconstructQueue = function(people) {
    people.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return b[0] - a[0];
    })

    let res = [];

    for (let i = 0; i < people.length; i += 1) {
        let index = people[i][1];
        res.splice(index, 0, people[i]);
    }

    return res;
};