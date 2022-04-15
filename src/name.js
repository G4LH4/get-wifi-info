const figlet = require("figlet");

const name = (title) => {
  figlet(`${title}`, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log("\x1b[31m%s\x1b[0m", data);
  });
};

module.exports = name;
