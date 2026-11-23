class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let map:Map<number, number> = new Map();
        for(let i = 0; i < numbers.length; i++)
        {
            map.set(target -numbers[i] ,i );
        }

        for(let i = 0; i < numbers.length; i++)
        {
            if(map.has(numbers[i]))
            {
                return [i+1, map.get(numbers[i])+1];
            }
        }
    }
}
