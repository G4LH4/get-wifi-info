const { promisify } = require("node:util");
const exec = promisify(require("node:child_process").exec);

async function info_stdout(OSystem) {
  return await OS[OSystem]();
}

const OS = {
  windows: async () => {
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
  },
  linux: async () => {
    return new Promise((resolve, reject) => {
      exec("iwgetid -r", { shell: "bash" }, (error, stdout) => {
        if (error) {
          reject(error);
        }

        resolve(stdout.trim());
      });
    });
  },
};

module.exports = info_stdout;
