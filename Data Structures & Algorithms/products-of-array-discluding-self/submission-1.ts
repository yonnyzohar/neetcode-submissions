class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let preList:number[] = [];
        let postList:number[] = [];
        let res: number[] = [];
        let prefix = 1;

        for (let i = 0; i < nums.length; i++) {
            preList[i] = prefix * nums[i];
            prefix = preList[i];
        }

        let suffix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            postList[i] = suffix * nums[i];
            suffix = postList[i];
        }

        for (let i = 0; i < nums.length; i++) {
            res[i] = (preList[i - 1] ?? 1) * (postList[i + 1] ?? 1);
        }

        

        return res;
    }
}
