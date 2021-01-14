const language = 'EN';
const strings = require('./strings.json');

const locale = (key) => {
  if (strings[key]) {
    return strings[key][language];
  }
  return key;
};

export default locale;
