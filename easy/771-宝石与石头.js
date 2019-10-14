/* 
给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

2019-10-14
254 / 254 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 92.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 67.62% 的用户
*/

var numJewelsInStones = function(J, S) {
  J = J.split('');
  S = S.split('');
  let res = 0;
  for (let i = 0; i < S.length; i += 1) {
    if (J.indexOf(S[i]) > -1) {
      res += 1;
    }
  }
  return res;
};