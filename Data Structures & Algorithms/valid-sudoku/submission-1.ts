class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {

        let quadrantsMap:Map<string, {visited:Record<string, boolean>,vals:Record<string, boolean> }> = new Map();
        
        for(let row = 0; row < 9; row++)
        {
            let rowsMap = {};
            let colsMap = {};
            //first do rows->cols
            for(let col = 0; col < 9; col++)
            {
                let char1 = board[row][col];
                if(char1 !== ".")
                {
                    if(rowsMap[char1])
                    {
                        return false;
                    }
                    rowsMap[char1] = true;
                }
                 //now cols->rows
                let char2 = board[col][row];
                if(char2 !== ".")
                {
                    if(colsMap[char2])
                    {
                        return false;
                    }
                    colsMap[char2] = true;
                }

                
                let rowKey = Math.floor(row/3);
                let colKey = Math.floor(col/3);

                if(char1 !== ".")
                {
                    let quadtrantkeyByRow = rowKey + "_" + colKey;
                    if(!quadrantsMap.has(quadtrantkeyByRow))
                    {
                        quadrantsMap.set(quadtrantkeyByRow, {visited:{},vals:{}})
                    }
                    let obj1:{visited:Record<string, boolean>,vals:Record<string, boolean> } = quadrantsMap.get(quadtrantkeyByRow);
                    let cellKeyByRow = row + "_" + col;
                    if(obj1.visited[cellKeyByRow])
                    {
                        continue;
                    }
                    obj1.visited[cellKeyByRow] = true;
                    if(obj1.vals[char1])
                    {
                        return false;
                    }
                    obj1.vals[char1] = true;
                }

                if(char2 !== ".")
                {
                    let quadtrantkeyByCol = colKey + "_" + rowKey;
                    if(!quadrantsMap.has(quadtrantkeyByCol))
                    {
                        quadrantsMap.set(quadtrantkeyByCol, {visited:{},vals:{}})
                    }
                    let obj2:{visited:Record<string, boolean>,vals:Record<string, boolean> } = quadrantsMap.get(quadtrantkeyByCol);
                    let cellKeyByCol = col + "_" + row;
                    if(obj2.visited[cellKeyByCol])
                    {
                        continue;
                    }
                    obj2.visited[cellKeyByCol] = true;
                    if(obj2.vals[char2])
                    {
                        return false;
                    }
                    obj2.vals[char2] = true;
                }


                
            }
        }
       


        return true;
    }
}
