class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        let windowLen = s1.length;
        

        function getLettersMap():Map<string, number>{
            let lettersMap:Map<string, number> = new Map();
            //first make a map with number of occourances
            for(let i = 0; i < s1.length; i++)
            {
                let letter:string = s1[i];
                if(!lettersMap.has(letter))
                {
                    lettersMap.set(letter, 1);
                }
                else{
                    lettersMap.set(letter, lettersMap.get(letter)+1);
                }
            }
            return lettersMap;
        }

        for(let i = 0; i < s2.length; i++)
        {
            let lettersMap:Map<string, number> = getLettersMap();
            for(let j = 0; j < windowLen; j++)
            {
                let letter:string = s2[i+j];
                //if we are out of bounds then break
                if(!letter)
                {
                    return false;
                }
                //if this letter does not exist there is not point to keep going
                if(!lettersMap.has(letter))
                {
                    break;
                }
                lettersMap.set(letter, lettersMap.get(letter)-1);
            }
            let foundAll = true;
            for(let letter of lettersMap)
            {
                let count = letter[1];
                if(count !== 0)
                {
                    foundAll = false;
                    break;
                }
            }
            if(foundAll)
            {
                return true;
            }
        }
        return false;
    }
}
