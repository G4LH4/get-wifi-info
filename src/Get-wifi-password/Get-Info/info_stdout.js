const { promisify } = require("node:util");
const exec = promisify(require("node:child_process").exec);

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

info_stdout();

module.exports = info_stdout;
