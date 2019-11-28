/* 
假设Andy和Doris想在晚餐时选择一家餐厅，并且他们都有一个表示最喜爱餐厅的列表，每个餐厅的名字用字符串表示

你需要帮助他们用最少的索引和找出他们共同喜爱的餐厅。 如果答案不止一个，则输出所有答案并且不考虑顺序。 你可以假设总是存在一个答案

2019-06-25
133 / 133 个通过测试用例
执行用时 : 128 ms , 在所有JavaScript提交中击败了 81.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 15.62% 的用户
*/

var findRestaurant = function(list1, list2) {
    let min = Number.MAX_VALUE;
    let map = {};
    for (let m = 0; m < list1.length; m += 1) {
        let n = list2.indexOf(list1[m]);
        if (n > -1) {
            map[m + n] ? map[m + n].push(list1[m]) : map[m + n] = [list1[m]];
            min = Math.min(min, m + n);
        }
    }
    return map[min];
};