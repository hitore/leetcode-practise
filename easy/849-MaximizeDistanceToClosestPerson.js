/* 
在一排座位（ seats）中，1 代表有人坐在座位上，0 代表座位上是空的。

至少有一个空座位，且至少有一人坐在座位上。

亚历克斯希望坐在一个能够使他与离他最近的人之间的距离达到最大化的座位上。

返回他到离他最近的人的最大距离。

2020-01-05
79 / 79 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 88.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 50.62% 的用户
*/

var maxDistToClosest = function(seats) {
    // 墙壁
    seats.unshift(2);
    seats.push(2);

    let last = 0;
    let maxLen = 0;

    for (let i = 1; i < seats.length; i += 1) {
        if (seats[i] === 1) {
            let len = ~~((i - last) / 2);
            if (seats[last] === 2) {
                len = i - last - 1;
            }
            if (len > maxLen) {
                maxLen = len;
            }
            last = i;
        }

        if (seats[i] === 2) {
            let len = i - last - 1;
            if (len >= maxLen) {
                maxLen = len;
            }
        }
    }

    return maxLen;
};