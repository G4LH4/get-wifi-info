const readline = require("readline");

const get_wifi_password = require("./Get-wifi-password/get_wifi_password.js");
const get_wifi_info = require("./Get-wifi-info/get_wifi_info.js");
const name = require("./name.js");

(async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  name("G4LH4 Wifi");

  setTimeout(() => {
    console.log("Options: Connected devices[1] \n\nWifi password[2]");

    rl.question("\nSelect option: ", (answer) => {
      return options[answer]();
    });
  }, 1000);
})();

const options = {
  1: () => get_wifi_info(),
  2: () => get_wifi_password(),
};
