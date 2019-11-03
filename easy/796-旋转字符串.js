/* 
给定两个字符串, A 和 B。

A 的旋转操作就是将 A 最左边的字符移动到最右边。 例如, 若 A = 'abcde'，在移动一次之后结果就是'bcdea' 。如果在若干次旋转操作之后，A 能变成B，那么返回True

2019-10-29
45 / 45 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 78.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 31.62% 的用户
*/

var rotateString = function(A, B) {
  if (A.length !== B.length) return false;
  if (A === B) return true;
  let len = A.length;
  for (let i = 1; i < len; i += 1) {
    let hind = len - i;
    if (A.slice(0, i) === B.slice(hind) && A.slice(i) === B.slice(0, hind)) {
      return true;
    }
  }
  return false;
};