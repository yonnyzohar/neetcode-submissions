class Solution {
    threeSum(nums: number[]): number[][] {
        const res: number[][] = [];
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 2; i++) {
            // Early exit: if the smallest number is > 0, no triplet can sum to 0
            if (nums[i] > 0) break;

            // 4a. Skip duplicate values for the first element
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    // 3. Push as a nested array
                    res.push([nums[i], nums[left], nums[right]]);
                    
                    // 2. Move both pointers inward instead of breaking
                    left++;
                    right--;

                    // 4b & 4c. Skip duplicate values for the second and third elements
                    while (left < right && nums[left] === nums[left - 1]) left++;
                    while (left < right && nums[right] === nums[right + 1]) right--;
                } else if (sum < 0) {
                    // 1a. Sum is too small, increase it
                    left++;
                } else {
                    // 1b. Sum is too large, decrease it
                    right--;
                }
            }
        }

        return res;
    }
}