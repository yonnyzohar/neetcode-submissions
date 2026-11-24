class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let longest = 0;
        let start = 0;
        let seen = {};

        for(let i = 0; i < s.length; i++)
        {
            let letter = s[i];
            if (seen[letter] !== undefined && seen[letter] >= start) {
                start = seen[letter] + 1;
            }
            seen[letter] = i;
            longest = Math.max(longest, i - start + 1);
        }
        return longest;
    }
}
