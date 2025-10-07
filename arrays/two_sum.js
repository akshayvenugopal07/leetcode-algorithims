/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let result = [];

    const map = new Map();
    map.set(nums[0], 0);
    
    for (let i = 1; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            result.push(i);
            result.push(map.get(target - nums[i]));
        }
        map.set(nums[i], i);
    }
    return result;
};