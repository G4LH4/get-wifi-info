const info_stdout = require("./Get-Info/info_stdout.js");
const get_password = require("./Get-Info/get_password.js");

const name = require("../name.js");
const create_folder = require("./Get-Info/create_folder.js");

const get_wifi_password = async () => {
  name("Wifi-Password");

  const get_info_stdout = await info_stdout();

  await get_password(get_info_stdout, (data) => {
    console.log(data);
    create_folder(get_info_stdout, data);

    process.exit();
  });
};

module.exports = get_wifi_password;
