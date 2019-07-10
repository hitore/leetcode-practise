/* 
在二维平面上计算出两个由直线构成的矩形重叠后形成的总面积。
每个矩形由其左下顶点和右上顶点坐标表示

2019-07-10
3082 / 3082 个通过测试用例
执行用时 : 136 ms, 在Ugly Number II的JavaScript提交中击败了77.54% 的用户
内存消耗 : 36.6 MB, 在Ugly Number II的JavaScript提交中击败了66.00% 的用户
*/

var computeArea = function(A, B, C, D, E, F, G, H) {
    let width = 0;
    let length = 0;
    if ((A >= E && C <= G) || (E >= A && G <= C)) {
        width = Math.min(C - A, G - E);
    } else {
        width = Math.min(Math.abs(E - C), Math.abs(G - A));
    }
    if ((D <= H && B >= F) || (F >= B && H <= D)) {
        length = Math.min(D - B, H - F);
    } else {
        length = Math.min(Math.abs(H - B), Math.abs(D - F));
    }
    let merge = width * length;
    let m1 = Math.abs(A - C) * Math.abs(B - D);
    let m2 = Math.abs(E - G) * Math.abs(H - F);
    if (A <= E && B <= F && C >= G && D >= H) {
        return m1;
    } else if (A >= E && B >= F && C <= G && D <= H) {
        return m2;
    } else if (C <= E || G <= A || B >= H || F >= D) {
        merge = 0;
    }
    return m1 + m2 - merge;
};