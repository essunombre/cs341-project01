const Validator = require("validate.js");
const validator = (body, rules, customMessages, callback) => {
  const validation = new Validator(body, rules, customMessages, callback);
  validation.passes(() => callback(null, true));
  validation.fails(() => callback(validation.errors, false));
};

module.exports = validator;