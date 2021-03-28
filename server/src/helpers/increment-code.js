const times = require('lodash/times');

const incrementCode = code => {
  let __code = times(code.length, (i) => code.toUpperCase().charCodeAt(i));
  for(let i = __code.length - 1; i>=0; i--) {
    if(__code[i] + 1 == 58) {
      __code[i] = 48;
    }
    else if(
      __code[i] + 1 == 91) {
      __code[i] = 65;
    }
    else {
      __code[i] += 1;
      break;
    }
  }
  return String.fromCharCode(...__code);
}

module.exports = incrementCode;

