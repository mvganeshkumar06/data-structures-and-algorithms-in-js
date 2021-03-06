/*

Problem
https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/

Approach
- Consider the range from 1 to maximum element as the search space.
- If using the mid as the divisor the sum of division of all the elements by the divisor is less than or equal to the threshold then mark it as potential result and search on the left subarray.
- Else search on the right subarray.

Time - O(nlog(max))
Space - O(1)

*/

const isValidDivisor = (nums, threshold, curr) => {

    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += Math.ceil(nums[i] / curr);
        if (sum > threshold) {
            return false;
        }
    }

    return true;

};

const smallestDivisor = function (nums, threshold) {

    let max = -Number.MAX_VALUE;

    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
    }

    let start = 1, end = max, mid, result = -1;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (isValidDivisor(nums, threshold, mid)) {
            result = mid;
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return result;
};