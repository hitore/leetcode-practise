/* 
给定一个字符串和一个整数 k，你需要对从字符串开头算起的每个 2k 个字符的前k个字符进行反转。如果剩余少于 k 个字符，则将剩余的所有全部反转。如果有小于 2k 但大于或等于 k 个字符，则反转前 k 个字符，并将剩余的字符保持原样。

2019-06-13
60 / 60 个通过测试用例
执行用时 : 116 ms , 在所有JavaScript提交中击败了 44.96% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 7.79% 的用户
*/

var reverseStr = function(s, k) {
    s = s.split('');
    for (let i = 0; i < s.length; i += 2 * k) {
        let r = s.slice(i, i + k).reverse();
        s = [...s.slice(0, i), ...r, ...s.slice(i + k)];
    }
    
    return s.join('');
};