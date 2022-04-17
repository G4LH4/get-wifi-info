const info_stdout = require("./Get-Info/info_stdout.js");
const get_password = require("./Get-Info/get_password.js");

const create_folder = require("./Get-Info/create_folder.js");

const get_wifi_password = async (OSystem, callback) => {
  const get_info_stdout = await info_stdout(OSystem);

  const data = await get_password(get_info_stdout, OSystem);
  create_folder(get_info_stdout, data);

  callback(data);

  process.exit();
};

module.exports = get_wifi_password;
