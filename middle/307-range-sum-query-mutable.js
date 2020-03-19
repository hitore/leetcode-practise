/* 
给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。

update(i, val) 函数可以通过将下标为 i 的数值更新为 val，从而对数列进行修改

2019-07-15
10 / 10 个通过测试用例
执行用时 : 272 ms, 在Perfect Squares的JavaScript提交中击败了64.15% 的用户
内存消耗 : 37.2 MB, 在Perfect Squares的JavaScript提交中击败50.98% 的用户
*/

var NumArray = function(nums) {
    this.nums = nums;
    this.sumArr = [];
    let sum = 0;
    nums.forEach(n => {
        sum += n;
        this.sumArr.push(sum);
    });
};

NumArray.prototype.update = function(i, val) {
    for (let n = i; n < this.nums.length; n += 1) {
        this.sumArr[n] = this.sumArr[n] - this.nums[i] + val;
    }
    this.nums[i] = val;
};

NumArray.prototype.sumRange = function(i, j) {
    return this.sumArr[j] - (this.sumArr[i - 1] || 0);
};