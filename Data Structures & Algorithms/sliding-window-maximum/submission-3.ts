class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const res: number[] = [];
        let maxIdx = 0;

        // 1. Find the max index of the initial window (indices 0 to k - 1)
        for (let i = 1; i < k; i++) {
            if (nums[i] >= nums[maxIdx]) {
                maxIdx = i;
            }
        }
        res.push(nums[maxIdx]);//this is the first big num

        // 2. Slide the window one step at a time from index k to the end
        for (let i = k; i < nums.length; i++) {
            const windowStart = i - k + 1;

            if (nums[i] >= nums[maxIdx]) {
                // Case A: The new element is the biggest -> update maxIdx in O(1)
                maxIdx = i;
            } else if (maxIdx < windowStart) {
                // Case B: The old max slid out of the window -> re-scan the window
                maxIdx = windowStart;
                for (let j = windowStart + 1; j <= i; j++) {
                    if (nums[j] >= nums[maxIdx]) {
                        maxIdx = j;
                    }
                }
            }
            // Case C: Old max is still in the window and bigger than nums[i] -> do nothing!

            res.push(nums[maxIdx]);
        }

        return res;
    }
}
