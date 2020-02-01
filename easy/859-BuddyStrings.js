/* 
给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false 。

2020-02-01
23 / 23 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 97.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 7.62% 的用户
*/

var buddyStrings = function(A, B) {
    if (A.length !== B.length) return false;

    let arrA = A.split('');
    let arrB = B.split('');

    if (A === B) {
        let set = new Set(arrA);
        if (set.size !== arrB.length) return true;
        return false;
    }

    let diff1 = null;
    let diff2 = null;
    for (let i = 0; i < arrA.length; i += 1) {
        if (arrA[i] !== arrB[i]) {
            if (diff1 === null) {
                diff1 = i;
            } else if (diff2 === null) {
                diff2 = i;
            } else {
                return false;
            }
        }
        if (diff1 !== null && diff2 !== null) {
            let temp = A.split('');
            temp[diff1] = arrA[diff2];
            temp[diff2] = arrA[diff1];
            if (temp.join('') === B) return true
            return false;
        }
    }

    return false;
};