/* 
有两种特殊字符。第一种字符可以用一比特0来表示。第二种字符可以用两比特(10 或 11)来表示。

现给一个由若干比特组成的字符串。问最后一个字符是否必定为一个一比特字符。给定的字符串总是由0结束。

2019-09-08
89 / 89 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 92.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 77.62% 的用户
*/

var isOneBitCharacter = function(bits) {
    let num = 0;

    for (let i = bits.length - 2; i >= 0; i -= 1) {
        if (bits[i] === 0) {
            break;
        } else {
            num += 1;
        }
    }

    return num % 2 === 0;
};