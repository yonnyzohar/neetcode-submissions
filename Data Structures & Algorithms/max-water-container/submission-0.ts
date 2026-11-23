class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let max = 0;
        let left = 0;
        let right = heights.length-1;
        while(left < right)
        {
            let leftHeight = heights[left];
            let rightHeight = heights[right];
            let minWallHeight = Math.min(leftHeight,rightHeight );
            let width = right - left;
            let area = minWallHeight * width;
            max = Math.max(area, max);
            if(leftHeight < rightHeight)
            {
                left++;
            }
            else{
                right--;
            }

        }
        return max;
    }
}
