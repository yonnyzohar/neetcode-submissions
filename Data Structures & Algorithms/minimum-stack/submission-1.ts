class MinStack {

    count = -1;
    arr = [];
    min = Infinity;
    mins = [];

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if(this.count >= this.arr.length)
        {
            this.count++;
            this.arr.push(val);
        }
        else{
            this.count++;
            this.arr[this.count] = val;
        }

        if(val <= this.min)
        {
            this.min = val;
        }
        this.mins[this.count] = this.min;
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.count--;
        this.min = this.count >= 0 ? this.mins[this.count] : Infinity;
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.arr[this.count];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min;
    }
}
