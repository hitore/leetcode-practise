/* 
There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

2019-05-07
42 / 42 个通过测试用例
执行用时 : 124 ms, 在Course Schedule的JavaScript提交中击败了79.49% 的用户
内存消耗 : 38.5 MB, 在Course Schedule的JavaScript提交中击败了61.11% 的用户
*/

var canFinish = function(numCourses, prerequisites) {
    let map = {};
    let inArr = [];
    for(let i = 0; i < prerequisites.length; i += 1) {
        let item = prerequisites[i];
        if (map[item[0]] === undefined) {
            map[item[0]] = {
                in: 1,
                out: [],
            };
        } else {
            map[item[0]].in += 1;
        }

        if (map[item[1]] === undefined) {
            map[item[1]] = {
                in: 0,
                out: [item[0]],
            };
        } else {
            map[item[1]].out.push(item[0]);
        }
    }

    for(let i in map) {
        if (map[i].in === 0) {
            inArr.push(i);
        }
    }

    while(inArr.length) {
        let c = inArr.shift();
        map[c].out.forEach(cc => {
            map[cc].in -= 1;
            if (map[cc].in === 0) {
                inArr.push(cc);
            }
        });
    }

    for(let i in map) {
        if (map[i].in !== 0) {
            return false;
        }
    }
    return true;
};