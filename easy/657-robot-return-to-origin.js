/* 
在二维平面上，有一个机器人从原点 (0, 0) 开始。给出它的移动顺序，判断这个机器人在完成移动后是否在 (0, 0) 处结束..

移动顺序由字符串表示。字符 move[i] 表示其第 i 次移动。机器人的有效动作有 R（右），L（左），U（上）和 D（下）。如果机器人在完成所有动作后返回原点，则返回 true。否则，返回 false。

注意：机器人“面朝”的方向无关紧要。 “R” 将始终使机器人向右移动一次，“L” 将始终向左移动等。此外，假设每次移动机器人的移动幅度相同。

2019-07-01
63 / 63 个通过测试用例
执行用时 : 128 ms , 在所有JavaScript提交中击败了 66.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 30.62% 的用户
*/

var judgeCircle = function(moves) {
    let map = {
        L: 0,
        R: 0,
        U: 0,
        D: 0,
    };

    moves = moves.split('');
    for (let i = 0; i < moves.length; i += 1) {
        map[moves[i]] += 1;
    }

    return map.U === map.D && map.L === map.R;
};