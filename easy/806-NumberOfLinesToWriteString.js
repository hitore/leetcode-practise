/* 
我们要把给定的字符串 S 从左到右写到每一行上，每一行的最大宽度为100个单位，如果我们在写某个字母的时候会使这行超过了100 个单位，那么我们应该把这个字母写到下一行。我们给定了一个数组 widths ，这个数组 widths[0] 代表 'a' 需要的单位， widths[1] 代表 'b' 需要的单位，...， widths[25] 代表 'z' 需要的单位。

现在回答两个问题：至少多少行能放下S，以及最后一行使用的宽度是多少个单位？将你的答案作为长度为2的整数列表返回。

2019-11-04
26 / 26 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 88.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 50.62% 的用户
*/

var numberOfLines = function(widths, S) {
    if (S === '') return [1, 0];
    S = S.split('');
    let sum = 0;
    let line = 1;

    for (let i = 0; i < S.length; i += 1) {
        let w = widths[S[i].charCodeAt() - 97];
        sum += w;
        if (sum >= 100) {
            line += 1;
            sum = sum > 100 ? w : 0;
        }
    }

    return [line, (sum || 100)];
};