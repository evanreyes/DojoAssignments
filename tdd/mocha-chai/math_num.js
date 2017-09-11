class MathNum {
    constructor(init) {
        this.value = Number(init);

        if (init === undefined) {
                this.value = 0;
                return this.value;
            }
    }
    
    
    // this.val = function() {
    //     this.val = 0;
    //     return this.val;
    // }

    val(initNum = 0) {
        this.value = parseInt(initNum, 10) ? initNum : 0
        console.log(this.value)
        return this.value;
    }
}

module.exports = MathNum;