/* 
在一个由小写字母构成的字符串 S 中，包含由一些连续的相同字符所构成的分组。

例如，在字符串 S = "abbxxxxzyy" 中，就含有 "a", "bb", "xxxx", "z" 和 "yy" 这样的一些分组。

我们称所有包含大于或等于三个连续字符的分组为较大分组。找到每一个较大分组的起始和终止位置。

最终结果按照字典顺序输出。

2020-01-30
202 / 202 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 75.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 88.62% 的用户
*/

var largeGroupPositions = function(S) {
    let start = 0;
    let end = 0;
    let res = [];
    S += '@';

    for (let i = 1; i < S.length; i += 1) {
        if (S[i] !== S[i - 1]) {
            end = i - 1;
            if (end - start >= 2) {
                res.push([start, end]);
            }
            start = i;
        }
    }

    return res;
};