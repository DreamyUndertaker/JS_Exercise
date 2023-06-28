function calc(val) {
    const self = Object.create(calc.prototype);
    self.val = val;
    return self;
}
calc.prototype = {
    plus(val) {
        this.val += val;
        return this;
    },
    minus(val) {
        this.val -= val;
        return this;
    },
    valueOf() {
        return this.val;
    },
};
console.log(calc(3).plus(7).minus(2) * 3);