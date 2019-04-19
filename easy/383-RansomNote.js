/* 
给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串ransom能不能由第二个字符串magazines里面的字符构成。如果可以构成，返回 true ；否则返回 false。

注意：

你可以假设两个字符串均只含有小写字母。

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true

思路:第一次遍历，记录所有字母出现的次数。第二次遍历，使用记录中的数量，若使用后数量小于0，则匹配失败。

2019-03-25
126 / 126 个通过测试用例
执行用时 : 108 ms, 在Ransom Note的JavaScript提交中击败了66.19% 的用户
内存消耗 : 36 MB, 在Ransom Note的JavaScript提交中击败了0.00% 的用户
*/

var canConstruct = function(ransomNote, magazine) {
    let magazineArr = Array(256).fill(0);

    if (magazine.length < ransomNote.length) return false;
    for (let i = 0; i < magazine.length; i += 1) {
        magazineArr[magazine.charCodeAt(i)] += 1;
    }
    for (let i = 0; i < ransomNote.length; i += 1) {
        magazineArr[ransomNote.charCodeAt(i)] -= 1;
        if (magazineArr[ransomNote.charCodeAt(i)] < 0) return false;
    }
    return true;
};