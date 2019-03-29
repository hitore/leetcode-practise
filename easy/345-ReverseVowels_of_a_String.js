/* 
编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

2019-03-28
481 / 481 个通过测试用例
执行用时 : 188 ms, 在Reverse Vowels of a String的JavaScript提交中击败了18.32% 的用户
内存消耗 : 41.6 MB, 在Reverse Vowels of a String的JavaScript提交中击败了0.00% 的用户
*/

var reverseVowels = function(s) {
    s = s.split('');
    let t = JSON.parse(JSON.stringify(s));
    t.reverse();
    let map = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let index = 0;
  
    for (let i = 0; i < s.length; i += 1) {
        while(!map.includes(t[index]) && index < t.length) {
            index += 1;
        }
        if (map.includes(s[i])) {
            s[i] = t[index];
            index += 1;
        }
    }
    return s.join('');
  };