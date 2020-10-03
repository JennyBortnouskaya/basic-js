const chainMaker = {
    result: [],
    getLength() {
        return this.result.length;
    },
    addLink(value) {
        if (value === undefined) value = '';
        this.result.push('( ' + value + ' )');
        return this;
    },
    removeLink(position) {
        if ( typeof position === "number" && position > 0 && position <= this.result.length ) {
            this.result.splice(position - 1, 1);
        } else {
            this.result = [];
            throw new Error('Error');
        }
        return this;
    },
    reverseChain() {
        this.result.reverse();
        return this;
    },
    finishChain() {
        let res = this.result;
        this.result = [];
        return res.join("~~");
    }
};

module.exports = chainMaker;
