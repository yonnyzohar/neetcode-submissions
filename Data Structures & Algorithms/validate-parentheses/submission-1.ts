class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let map = {
            "[":"]",
            "(":")",
            "{":"}"
        };
        let expected = [];
        
        for(let i = 0; i < s.length; i++){
            let char = s[i];
            if(char === "["){
                expected.push("]");
            }
            else if(char === "("){
                expected.push(")");
            }
            else if(char === "{"){
                expected.push("}");
            }
            else{
                let next = expected.pop();
                if(char !== next)
                {
                    return false;
                }
            }
        }
        if(expected.length)
        {
            return false;
        }
        return true;

    }
}
