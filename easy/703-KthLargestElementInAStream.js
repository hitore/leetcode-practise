/* 
设计一个找到数据流中第K大元素的类（class）。注意是排序后的第K大元素，不是第K个不同的元素。

你的 KthLargest 类需要一个同时接收整数 k 和整数数组nums 的构造器，它包含数据流中的初始元素。每次调用 KthLargest.add，返回当前数据流中第K大的元素。

2020-01-24
10 / 10 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 29.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 39.62% 的用户
*/

var KthLargest = function(k, nums = []) {
    this.k = k;
    this.nums = [...nums];
    if (k > nums.length) {
        this.dp = nums.sort((a, b) => a - b);
    } else {
        this.dp = nums.sort((a, b) => a - b).slice(nums.length - k, nums.length);
    }
};

KthLargest.prototype.add = function(val) {
    this.nums.push(val);

    if (this.dp.length < this.k) {
        this.dp.unshift(val);
    } else if (this.dp[0] < val) {
        this.dp[0] = val;
    }

    for (let i = 1; i < this.dp.length; i += 1) {
        if (this.dp[i - 1] > this.dp[i]) {
            let temp = this.dp[i - 1];
            this.dp[i - 1] = this.dp[i];
            this.dp[i] = temp;
            temp = null;
        }
    }
    return this.dp[0];
};