const { promisify } = require("node:util");
const exec = promisify(require("node:child_process").exec);

const name = require("../name.js");

const get_wifi_info = async () => {
  name("Wifi-Info");

  await exec("Arp -a", { shell: "powershell.exe" }, (error, stdout) => {
    if (error) {
      reject(error);
    }

    console.log(stdout.trim());

    process.exit();
  });
};

module.exports = get_wifi_info;
