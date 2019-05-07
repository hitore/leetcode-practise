/* 
There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

2019-05-07
44 / 44 个通过测试用例
执行用时 : 168 ms, 在Course Schedule II的JavaScript提交中击败了33.33% 的用户
内存消耗 : 37.8 MB, 在Course Schedule II的JavaScript提交中击败了85.71% 的用户
*/

var findOrder = function(numCourses, prerequisites) {
    let map = {};
    let inArr = [];
    let res = [];

    for (let i = 0; i < numCourses; i += 1) {
        map[i] = {
            in: 0,
            out: [],
        }
    }

    for(let i = 0; i < prerequisites.length; i += 1) {
        let item = prerequisites[i];
        map[item[0]].in += 1;
        map[item[1]].out.push(item[0]);
    }

    for(let i in map) {
        if (map[i].in === 0) {
            inArr.push(i);
        }
    }

    while(inArr.length) {
        let c = inArr.shift();
        res.push(+c);
        map[c].out.forEach(cc => {
            map[cc].in -= 1;
            if (map[cc].in === 0) {
                inArr.push(cc);
            }
        });
    }

    for(let i in map) {
        if (map[i].in !== 0) {
            return [];
        }
    }

    return res;
};