/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    const expected = n * (n + 1) / 2;
    const actual = nums.reduce((acc, v) => acc + v, 0);
    return expected - actual;
};

missingNumber([3, 0, 1]);