class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {

        let numFleets = position.length;
        let unified = [];
        for(let i = 0; i < position.length; i++)
        {
            let pos = position[i];
            let sp = speed[i];
            unified.push({position:pos, speed:sp, timeToArrive:(target-pos)/sp});
        }

        unified.sort((a, b) => a.position - b.position);

        for(let i = unified.length-2; i >= 0; i-- ){
            let curr = unified[i];
            let next = unified[i+1];
            if(curr.timeToArrive <= next.timeToArrive)
            {
                //these 2 cars are in the same fleet!
                numFleets--;
                unified[i] = unified[i+1];//overwrite car data with slower car

            }
        }

        return numFleets;
    }
}
