class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        s = s.toLowerCase();
        
let abc = {
            "a":true,
            "b":true,
            "c":true,
            "d":true,
            "e":true,
            "f":true,
            "g":true,
            "h":true,
            "i":true,
            "j":true,
            "k":true,
            "l":true,
            "m":true,
            "n":true,
            "o":true,
            "p":true,
            "q":true,
            "r":true,
            "s":true,
            "t":true,
            "u":true,
            "v":true,
            "w":true,
            "x":true,
            "y":true,
            "z":true,
            "0":true,
            "1":true,
            "2":true,
            "3":true,
            "4":true,
            "5":true,
            "6":true,
            "7":true,
            "8":true,
            "9":true
        };
        let left = 0;
        let right = s.length-1;
        while(left < right)
        {
            while (left < right && !abc[s[left]]) {
                left++;
            }
            while (left < right && !abc[s[right]]) {
                right--;
            }

            if(s[left] !== s[right])
            {
                return false;
            }

            left++;
            right--;
        }
        return true;
    }
}
