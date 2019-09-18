/* 
有一幅以二维整数数组表示的图画，每一个整数表示该图画的像素值大小，数值在 0 到 65535 之间。

给你一个坐标 (sr, sc) 表示图像渲染开始的像素值（行 ，列）和一个新的颜色值 newColor，让你重新上色这幅图像。

为了完成上色工作，从初始坐标开始，记录初始坐标的上下左右四个方向上像素值与初始坐标相同的相连像素点，接着再记录这四个方向上符合条件的像素点与他们对应四个方向上像素值与初始坐标相同的相连像素点，……，重复该过程。将所有有记录的像素点的颜色值改为新的颜色值。

最后返回经过上色渲染后的图像。

2019-09-18
277 / 277 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 40.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 95.62% 的用户
*/

var floodFill = function(image, sr, sc, newColor) {
    if (image[sr][sc] === newColor) return image;
    function map(x, y, color) {
        if (x < 0 || y < 0 || x >= image.length) return;
        if (image[0] && y >= image[0].length) return;
        if (image[x][y] === color) {
            image[x][y] = newColor;
            map(x - 1, y, color);
            map(x + 1, y, color);
            map(x, y - 1, color);
            map(x, y + 1, color);
        }
    }
    let copy = image[sr][sc];
    map(sr, sc, copy);
    return image;
};