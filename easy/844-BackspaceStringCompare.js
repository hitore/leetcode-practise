/* 
给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

2019-12-31
104 / 104 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 99.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 5.62% 的用户
*/

var backspaceCompare = function(S, T) {
    S = S.split('');
    T = T.split('');
    let s = [];
    let t = [];

    if (S.length > T.length) {
        for (let i = 0; i < S.length; i += 1) {
            if (S[i] === '#') {
                s.pop();
            } else {
                s.push(S[i]);
            }

            if (T[i] && T[i] === '#') {
                t.pop();
            } else {
                t.push(T[i]);
            }
        }
    } else {
        for (let i = 0; i < T.length; i += 1) {
            if (T[i] === '#') {
                t.pop();
            } else {
                t.push(T[i]);
            }

            if (S[i] && S[i] === '#') {
                s.pop();
            } else {
                s.push(S[i]);
            }
        }
    }

    return s.join('') === t.join('');
};