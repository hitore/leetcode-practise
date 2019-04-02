/* 
在一条环路上有 N 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。

如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1。

说明: 

如果题目有解，该答案即为唯一答案。
输入数组均为非空数组，且长度相同。
输入数组中的元素均为非负数。
示例 1:

输入: 
gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]

输出: 3


2019-04-02
31 / 31 个通过测试用例
执行用时 : 144 ms, 在Gas Station的JavaScript提交中击败了48.65% 的用户
内存消耗 : 37.3 MB, 在Gas Station的JavaScript提交中击败了16.67% 的用户
*/

var canCompleteCircuit = function(gas, cost) {
    let length = gas.length;
    gas = [...gas, ...gas];
    cost = [...cost, ...cost];

    for (let i = 0; i < length; i += 1) {
        if (gas[i] >= cost[i]) {
            let target = i + length;
            let ml = 0;
            let start = i;
            while(start <= target) {
                ml += gas[start];
                ml -= cost[start];
                start += 1;
                if (ml < 0) {
                    break;
                }
                if (start === target) {
                    return i;
                    break;
                }
            }
        }
    }
    
    return -1;
};