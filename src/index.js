"use strict";

const { promisify } = require("node:util");
const exec = promisify(require("node:child_process").exec);

const name = require("./name.js");

(async () => {
  name();

  const get_info_stdout = await info_stdout();
  const get_password_stdout = await get_password(get_info_stdout);

  console.log(get_password_stdout);
})().catch(console.error);

function info_stdout() {
  return new Promise((resolve, reject) => {
    exec(
      "netsh wlan show interfaces | select-string SSID",
      { shell: "powershell.exe" },
      (error, stdout) => {
        if (error) {
          reject(error);
        }

        resolve(stdout.split("\n")[1].split(":")[1].trim());
      }
    );
  });
}

function get_password(info_stdout) {
  return new Promise((reject, resolve) => {
    exec(
      `netsh wlan show profile name="${info_stdout}" key=clear`,
      { shell: "powershell.exe" },
      (error, stdout) => {
        if (error) {
          reject(error);
        }

        resolve(stdout.split("\n")[32].trim());
      }
    );
  });
}
