/* 
给定两个数组，编写一个函数来计算它们的交集。

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]

思路：遍历的时候每当匹配到nums2时，添加进res，然后删除该元素。

2019-03-30
61 / 61 个通过测试用例
执行用时 : 124 ms, 在Intersection of Two Arrays II的JavaScript提交中击败了19.42% 的用户
内存消耗 : 34.3 MB, 在Intersection of Two Arrays II的JavaScript提交中击败了0.00% 的用户
*/

var intersect = function(nums1, nums2) {
    let res = [];

    for (let i = 0; i < nums1.length; i += 1) {
        for (let m = 0; m < nums2.length; m += 1) {
            if (nums2[m] === nums1[i]) {
                res.push(nums1[i]);
                nums2.splice(m, 1);
                break;
            }
        }
    }
    
    return res;
};