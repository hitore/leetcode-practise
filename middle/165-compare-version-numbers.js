/* 
比较两个版本号 version1 和 version2。
如果 version1 > version2 返回 1，如果 version1 < version2 返回 -1， 除此之外返回 0。

你可以假设版本字符串非空，并且只包含数字和 . 字符。

 . 字符不代表小数点，而是用于分隔数字序列。

例如，2.5 不是“两个半”，也不是“差一半到三”，而是第二版中的第五个小版本。

你可以假设版本号的每一级的默认修订版号为 0。例如，版本号 3.4 的第一级（大版本）和第二级（小版本）修订号分别为 3 和 4。其第三级和第四级修订号均为 0。

2019-07-05
72 / 72 个通过测试用例
执行用时 : 124 ms, 在Course Schedule的JavaScript提交中击败了89.49% 的用户
内存消耗 : 38.5 MB, 在Course Schedule的JavaScript提交中击败了8.11% 的用户
*/

var compareVersion = function(version1, version2) {
    version1 = version1.split('.').map(n => +n);
    version2 = version2.split('.').map(n => +n);
    let i = 0;
    while (i < version1.length || i < version2.length) {
        if (version1[i] === undefined) version1[i] = 0;
        if (version2[i] === undefined) version2[i] = 0;
        if (version1[i] > version2[i]) {
            return 1;
        } else if (version1[i] < version2[i]) {
            return -1;
        }
        i += 1;
    }
    return 0;
};