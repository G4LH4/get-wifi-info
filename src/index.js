const readline = require("readline");

const get_wifi_password = require("./Get-wifi-password/get_wifi_password.js");
const get_wifi_info = require("./Get-wifi-info/get_wifi_info.js");
const name = require("./name.js");

(async () => {
  name("G4LH4 Wifi");

  get_wifi_password();
})();
