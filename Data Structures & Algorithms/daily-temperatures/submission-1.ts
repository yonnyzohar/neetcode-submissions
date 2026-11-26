class Solution {
    dailyTemperatures(temperatures: number[]): number[] {
        const n = temperatures.length;
        const res = new Array(n).fill(0);
        
        // Acts like a Map<Temp, EarliestDayIndex> for temps 0..100
        const nextDayForTemp = new Array(101).fill(Infinity);

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

            // Record today as the earliest seen occurrence of currentTemp
            nextDayForTemp[currentTemp] = day;
        }

        return res;
    }
}