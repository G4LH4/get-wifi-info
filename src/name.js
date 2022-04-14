const figlet = require("figlet");

const name = () => {
  figlet("Galha psswd", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
};

module.exports = name;
