const { v4 } = require("uuid");
console.log(v4());
module.exports = () => {
  console.log("hello from package-b");
};
