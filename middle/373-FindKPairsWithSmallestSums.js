/* 
给定两个以升序排列的整形数组 nums1 和 nums2, 以及一个整数 k。

定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2。

找到和最小的 k 对数字 (u1,v1), (u2,v2) ... (uk,vk)。

2020-03-23
27 / 27 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了68.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了100.00% 的用户
*/

var kSmallestPairs = function(nums1, nums2, k) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    k = Math.min(k, len1 * len2);
    let res = [];
    let arr = new Array(len1).fill(0);

    while(res.length < k) {
        let index = 0;
        let min = Number.MAX_VALUE;

        for (let i = 0; i < len1; i += 1) {
            if (arr[i] >= len2) {
                continue;
            }

            if (nums1[i] + nums2[arr[i]] <= min) {
                min = nums1[i] + nums2[arr[i]];
                index = i;
            }
        }

        res.push([nums1[index], nums2[arr[index]]]);
        arr[index] += 1;
    }

    return res;
};