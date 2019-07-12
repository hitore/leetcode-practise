/* 
你正在和你的朋友玩 猜数字（Bulls and Cows）游戏：你写下一个数字让你的朋友猜。每次他猜测后，你给他一个提示，告诉他有多少位数字和确切位置都猜对了（称为“Bulls”, 公牛），有多少位数字猜对了但是位置不对（称为“Cows”, 奶牛）。你的朋友将会根据提示继续猜，直到猜出秘密数字。

请写出一个根据秘密数字和朋友的猜测数返回提示的函数，用 A 表示公牛，用 B 表示奶牛。

请注意秘密数字和朋友的猜测数都可能含有重复数字。

2019-07-12
152 / 152 个通过测试用例
执行用时 : 272 ms, 在Perfect Squares的JavaScript提交中击败了85.13% 的用户
内存消耗 : 37.2 MB, 在Perfect Squares的JavaScript提交中击败了50.98% 的用户
*/

var getHint = function(secret, guess) {
    let a = 0;
    let b = 0;
    let map = {};
    for (let i = 0; i < secret.length; i += 1) {
        map[secret[i]] === undefined ? map[secret[i]] = 1 : map[secret[i]] += 1;
        map[guess[i]] === undefined ? map[guess[i]] = -1 : map[guess[i]] -= 1;
        if (secret[i] === guess[i]) {
            a += 1;
        } else {
            if (map[secret[i]] <= 0) {
                b += 1;
            }
            if (map[guess[i]] >= 0) {
                b += 1;
            }
        }
    }
    return `${a}A${b}B`;
};