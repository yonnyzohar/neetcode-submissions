class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let left = 0;
        let right = height.length-1;

        let leftMax = 0;
        let rightMax = 0;

        //checks highest wall to my left
        let leftHeights = [];
        //checks highest wall to my right
        let rightHeights = [];
        //pre fill with ground level
        for(let i = 0; i < height.length; i++)
        {
            leftHeights.push(0);
            rightHeights.push(0);
        }

        for(let i = 0; i < height.length; i++)
        {
            //get the tallest wall to the left of the current column
            let currLeftWall = height[left-1] ?? 0;
            leftHeights[left] = Math.max(currLeftWall, leftMax);
            leftMax = leftHeights[left];
            left++;


            let currentRightWall = height[right+1] ?? 0;
            rightHeights[right] = Math.max(currentRightWall, rightMax);
            rightMax = rightHeights[right];
            right--;
        }
        let total = 0;
        for(let i = 0; i < height.length; i++)
        {
            const waterLevel = Math.min(leftHeights[i], rightHeights[i]);
            if (waterLevel > height[i]) {
                total += waterLevel - height[i];//subtract the floor!!
            }
        }
        return total;
    }
}
