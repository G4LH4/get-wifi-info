const info_stdout = require("./Get-Info/info_stdout.js");
const get_password = require("./Get-Info/get_password.js");

const get_wifi_password = async (OSystem, callback) => {
  const SSID = await info_stdout(OSystem).catch(() => {
    console.log("Error getting the SSID");
  });

  const data = await get_password(SSID, OSystem).catch(() => {
    console.log("Error getting the password");
  });

  callback({ SSID, data });
};

module.exports = get_wifi_password;
