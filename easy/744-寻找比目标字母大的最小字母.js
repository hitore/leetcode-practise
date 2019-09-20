/* 
给定一个只包含小写字母的有序数组letters 和一个目标字母 target，寻找有序数组里面比目标字母大的最小字母。

数组里字母的顺序是循环的。举个例子，如果目标字母target = 'z' 并且有序数组为 letters = ['a', 'b']，则答案返回 'a'。

2019-09-18
277 / 277 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 100.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 61.62% 的用户
*/

var nextGreatestLetter = function(letters, target) {
    let set = new Set(letters);
    set = [...set].sort((a, b) => {
        return a.charCodeAt() - b.charCodeAt();
    });

    for (let i = 0; i < set.length; i += 1) {
        if (set[i].charCodeAt() > target.charCodeAt()) {
            return set[i];
        }
    }

    return set[0];
};