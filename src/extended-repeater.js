const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let string = [];
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (options.addition === undefined) options.addition = '';

  for (let i = 0; i < +options.repeatTimes; i++) {
    let addition = [];

    for (let j = 0; j < +options.additionRepeatTimes; j++) {
      addition.push(String(options['addition']))
    }

    additionStr = addition.join(options['additionSeparator'])
    string.push(String(str) + additionStr);
  } 

  return string.join(options['separator']);
};
