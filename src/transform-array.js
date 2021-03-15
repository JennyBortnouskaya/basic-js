module.exports = function transform(arr) {
    const control_seq = ['--double-prev', '--double-next', '--discard-prev', '--discard-next'];
    var new_arr = [], discard_next = false;
    if ( !arr || !(Array.isArray(arr)) ) throw new Error();
    if (arr.length === 0) return arr;
    for (i = 0; i < arr.length; i++){
        if ( (arr[i]==='--double-prev') && (i>0) ) {new_arr.push(arr[i-1]);}
        else if ( (arr[i]==='--double-next') && (i<arr.length-1) ) {new_arr.push(arr[i+1]);}
        else if ( (arr[i]==='--discard-prev') && (i>0) ) {new_arr.pop();}
        else if ( (arr[i]==='--discard-next') && (i<arr.length-1) ) {discard_next = true; }
        else {
            if ( !(control_seq.includes(arr[i])) ) new_arr.push(arr[i]);
            if (discard_next) {new_arr.pop(); discard_next = false;}
        }
    }
    return new_arr;
};
