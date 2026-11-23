class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let map:Map<number, boolean> = new Map();
        let max = 1;
        if(nums.length === 0)
        {
            return 0;
        }
        for(let i = 0; i < nums.length; i++)
        {
            map.set(nums[i],true);
        }
        for(let i = 0; i < nums.length; i++)
        {
            //check if this is the start of a sequence. if no one before me then yes!
            if(!map.has(nums[i]-1))
            {
                let count = 1;
                while(map.has(nums[i]+count))
                {
                    count++;
                }
                if(count >max )
                {
                    max = count;
                }

            }
        }

        return max;
    }
}
