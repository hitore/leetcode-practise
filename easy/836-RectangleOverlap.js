/* 
矩形以列表 [x1, y1, x2, y2] 的形式表示，其中 (x1, y1) 为左下角的坐标，(x2, y2) 是右上角的坐标。

如果相交的面积为正，则称两矩形重叠。需要明确的是，只在角或边接触的两个矩形不构成重叠。

给出两个矩形，判断它们是否重叠并返回结果

2019-12-25
43 / 43 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 28.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 44.62% 的用户
*/

var isRectangleOverlap = function(rec1, rec2) {
    let [x3, y3, x4, y4] = rec2;
    let [x1, y1, x2, y2] = rec1;

    return !(x1 >= x4 || x3 >= x2 || y1 >= y4 || y3 >= y2);
};