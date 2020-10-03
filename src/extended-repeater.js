module.exports = function repeater(str, options) {
    let string = "";
    let repeatTimes = options.repeatTimes || 1;
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    for (let i = 0; i < repeatTimes; i++) {
        string += String(str);
        if (options.addition !== undefined) {
            for (let j = 0; j < additionRepeatTimes; j++) {
                string += String(options.addition);
                if (j !== additionRepeatTimes - 1) {
                    string += options.additionSeparator || "|";
                }
            }
        }
        if (i !== repeatTimes - 1) {
            string += options.separator || "+";
        }
    }
    return string;
};
  