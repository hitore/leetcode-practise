/* 
Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie. Each child i has a greed factor gi, which is the minimum size of a cookie that the child will be content with; and each cookie j has a size sj. If sj >= gi, we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

2019-05-28
31 / 31 个通过测试用例
执行用时 : 1944 ms, 在Number of Boomerangs的JavaScript提交中击败了23.44% 的用户
内存消耗 : 57.3 MB, 在Number of Boomerangs的JavaScript提交中击败了40.63% 的用户
*/

var numberOfBoomerangs = function(points) {
    let res = 0;

    for (let i = 0; i < points.length; i += 1) {
        const map = {};
        for (let j = 0; j < points.length; j += 1) {
            if (j === i) continue;
            const diffX = points[i][0] - points[j][0];
            const diffY = points[i][1] - points[j][1];
            const distancePow = diffX * diffX + diffY * diffY;
            map[distancePow] = map[distancePow] ? map[distancePow] + 1 : 1;
        }
        for (let k in map) {
            if (map[k] > 1) {
                res = res + map[k] * (map[k] - 1)
            }
        }
    }

    return res;
};