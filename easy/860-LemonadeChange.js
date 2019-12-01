/* 
在柠檬水摊上，每一杯柠檬水的售价为 5 美元。

顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。

每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。

注意，一开始你手头没有任何零钱。

如果你能给每位顾客正确找零，返回 true ，否则返回 false 。

2019-12-01
45 / 45 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 93.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 58.62% 的用户
*/

var lemonadeChange = function(bills) {
    let arr = new Array(21).fill(0);
    for (let i = 0; i < bills.length; i += 1) {
        let change = bills[i] - 5;
        arr[bills[i]] += 1;
        if (change === 5) {
            arr[5] -= 1;
        } else if (change === 15) {
            arr[5] -= 1;
            if (arr[10] > 0) {
                arr[10] -= 1;
            } else {
                arr[5] -= 2;
            }
        }
        if (arr[5] < 0 || arr[10] < 0) return false;
    }
    return true;
};