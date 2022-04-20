module.exports = require("./Get-wifi-password/get_wifi_password.js");
const get_wifi_password = require("./Get-wifi-password/get_wifi_password.js");

(() => {
  get_wifi_password("windows", async (password) => {
    console.log(password);
  });
})();
