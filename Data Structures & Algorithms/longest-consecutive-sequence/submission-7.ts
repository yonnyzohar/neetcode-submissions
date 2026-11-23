class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let map:Map<number, number> = new Map();
        nums = nums.sort((a, b) => a - b);
        let max = 1;
        if(nums.length === 0)
        {
            return 0;
        }
        for(let i = 0; i < nums.length; i++)
        {
            if(!map.has(nums[i]-1))
            {
                map.set(nums[i],1);//this is the first in the list
            }
            else
            {
                let val = map.get(nums[i]-1);//get the previous value
                //map.delete(nums[i]-1); //delete it
                map.set(nums[i],val+1);//set new value with updated count

                if(val+1 > max)
                {
                    max = val+1;
                }
            }

        }

        return max;
    }
}
