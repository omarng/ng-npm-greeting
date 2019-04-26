module.exports = function ngGreet(string) {
  if (typeof string !== "string") throw new TypeError("Ng wants a string!");
  return "Hello " + string + "! Greeting from Nuara Group.";
};
