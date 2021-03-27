const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      newArr.push('reserved');
      i++;
    } else

    if (arr[i] === '--discard-prev') {
      newArr.pop();
    } else

    if (arr[i] === '--double-next') {
      if (i !== arr.length - 1) {
      newArr.push(arr[i+1]);
      }
    } else

    if (arr[i] === '--double-prev') {
      if (i !== 0) {
      newArr.push(newArr[newArr.length - 1]);
      }
    } else

    newArr.push(arr[i]);
  }
  return newArr.filter(elem => elem !== 'reserved');
};
