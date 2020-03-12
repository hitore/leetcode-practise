/* 
实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。

2020-03-12
15 / 15 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了18.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了59.00% 的用户
*/

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.set = new Set();
    this.start = new Set();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    this.set.add(word);
    let sum = '';
    for (let s of word) {
        sum += s;
        this.start.add(sum);
    }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return this.set.has(word)
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.start.has(prefix)
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */