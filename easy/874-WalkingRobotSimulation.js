/* 
机器人在一个无限大小的网格上行走，从点 (0, 0) 处开始出发，面向北方。该机器人可以接收以下三种类型的命令：

-2：向左转 90 度
-1：向右转 90 度
1 <= x <= 9：向前移动 x 个单位长度
在网格上有一些格子被视为障碍物。

第 i 个障碍物位于网格点  (obstacles[i][0], obstacles[i][1])

如果机器人试图走到障碍物上方，那么它将停留在障碍物的前一个网格方块上，但仍然可以继续该路线的其余部分。

返回从原点到机器人的最大欧式距离的平方。

2020-01-24
47 / 47 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 80.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 83.62% 的用户
*/

var robotSim = function (commands, obstacles) {
    let x = 0;
    let y = 0;
    let forward = 0;
    let set = new Set();
    let max = 0;

    for (let i = 0; i < obstacles.length; i += 1) {
        set.add(obstacles[i].join(','));
    }

    for (let i = 0; i < commands.length; i += 1) {
        if (commands[i] === -1) {
            forward += 1;
        } else if (commands[i] === -2) {
            forward -= 1;
        } else {
            for (let k = 0; k < commands[i]; k += 1) {
                // 北
                if (forward % 4 === 0 || forward % 4 === -0) {
                    if (!set.has(`${x},${y + 1}`)) {
                        y += 1;
                    }
                }
                // 东
                if (forward % 4 === 1 || forward % 4 === -3) {
                    if (!set.has(`${x + 1},${y}`)) {
                        x += 1;
                    }
                }
                // 南
                if (forward % 4 === 2 || forward % 4 === -2) {
                    if (!set.has(`${x},${y - 1}`)) {
                        y -= 1;
                    }
                }
                // 西
                if (forward % 4 === 3 || forward % 4 === -1) {
                    if (!set.has(`${x - 1},${y}`)) {
                        x -= 1;
                    }
                }
            }
            max = Math.max(x * x + y * y, max);
        }
    }

    return max;
};