/* 
国际摩尔斯密码定义一种标准编码方式，将每个字母对应于一个由一系列点和短线组成的字符串， 比如: "a" 对应 ".-", "b" 对应 "-...", "c" 对应 "-.-.", 等等。

为了方便，所有26个英文字母对应摩尔斯密码表如下：

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
给定一个单词列表，每个单词可以写成每个字母对应摩尔斯密码的组合。例如，"cab" 可以写成 "-.-..--..."，(即 "-.-." + "-..." + ".-"字符串的结合)。我们将这样一个连接过程称作单词翻译。

返回我们可以获得所有词不同单词翻译的数量。

2019-11-03
83 / 83 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 95.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 35.62% 的用户
*/

var uniqueMorseRepresentations = function(words) {
    let map = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let res = new Set();

    for (let i = 0; i < words.length; i += 1) {
        let strs = words[i].split('');
        let item = '';
        for (let n = 0; n < strs.length; n += 1) {
            item += map[strs[n].charCodeAt() - 97];
        }
        res.add(item);
    }

    return res.size;
};