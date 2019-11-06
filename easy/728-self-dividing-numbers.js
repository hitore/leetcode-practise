/* 
自除数 是指可以被它包含的每一位数除尽的数。

例如，128 是一个自除数，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。

还有，自除数不允许包含 0 

给定上边界和下边界数字，输出一个列表，列表的元素是边界（含边界）内所有的自除数

2019-09-18
31 / 31 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 89.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 25.62% 的用户
*/

var selfDividingNumbers = function(left, right) {
    function isSelfNum(num) {
        let arr = num.toString().split('');
        for (let i = 0; i < arr.length; i += 1) {
            if (arr[i] === '0' || num % +arr[i] !== 0) return false;
        }
        return true;
    }

    let res = [];

    for (let i = left; i <= right; i += 1) {
        if (isSelfNum(i)) {
            res.push(i);
        }
    }

    return res;
};