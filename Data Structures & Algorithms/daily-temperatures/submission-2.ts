class Solution {
    dailyTemperatures(temperatures: number[]): number[] {
        const n = temperatures.length;
        const res = [];
        for(let i = 0; i < n; i++)
        {
            res.push(0);
        }
        //we are going to create an array where the index is temperature and the value is the date
        
        // Acts like a Map<Temp, EarliestDayIndex> for temps 0..100
        const nextDayForTemp = [];
        for(let i = 0; i < 101; i++)
        {
            nextDayForTemp.push(Infinity);
        }

        // Walk backwards from the last day to the first
        for (let day = n - 1; day >= 0; day--) {
            const currentTemp = temperatures[day];
            let earliestWarmerDay = Infinity;

            // Check all possible warmer temperatures (from currentTemp + 1 up to 100)
            for (let t = currentTemp + 1; t <= 100; t++) {
                if (nextDayForTemp[t] < earliestWarmerDay) {
                    earliestWarmerDay = nextDayForTemp[t];
                }
            }

            // If we found a warmer day in the future, calculate the wait
            if (earliestWarmerDay !== Infinity) {
                res[day] = earliestWarmerDay - day;
            }
            nextDayForTemp[currentTemp] = day;
        }

        return res;
    }
}