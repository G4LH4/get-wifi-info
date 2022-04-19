const info_stdout = require("./Get-Info/info_stdout.js");
const get_password = require("./Get-Info/get_password.js");

const get_wifi_password = async (OSystem, callback) => {
  const get_info_stdout = await info_stdout(OSystem).catch(() => {
    console.log("Error getting the SSID");
  });

  const data = await get_password(get_info_stdout, OSystem).catch(() => {
    console.log("Error getting the password");
  });

  callback(data);
};

module.exports = get_wifi_password;
