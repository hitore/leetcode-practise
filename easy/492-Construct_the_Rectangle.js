/* 
For a web developer, it is very important to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:

2019-05-28
50 / 50 个通过测试用例
执行用时 : 88 ms, 在Construct the Rectangle的JavaScript提交中击败了95.16% 的用户
内存消耗 : 34.3 MB, 在Construct the Rectangle的JavaScript提交中击败了75.00% 的用户
*/

var constructRectangle = function(area) {
    let n = ~~Math.sqrt(area);
    while (n) {
        if (area % n === 0) {
            return [area / n, n];
            break;
        } else {
            n -= 1;
        }
    }
};