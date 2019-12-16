/* 
所有 DNA 都由一系列缩写为 A，C，G 和 T 的核苷酸组成，例如：“ACGAATTCCG”。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。

编写一个函数来查找 DNA 分子中所有出现超过一次的 10 个字母长的序列（子串）。

2019-12-16
32 / 32 个通过测试用例
执行用时 : 124 ms, 在Course Schedule的JavaScript提交中击败了93.49% 的用户
内存消耗 : 38.5 MB, 在Course Schedule的JavaScript提交中击败了90.11% 的用户
*/

var findRepeatedDnaSequences = function(s) {
  let frist = new Set();
  let sed = new Set();

  for (let i = 0; i < s.length - 9; i += 1) {
    let str = s.slice(i, i + 10);
    if (frist.has(str)) {
      sed.add(str);
    } else {
      frist.add(str);
    }
  }

  return [...sed];
};