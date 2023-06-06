const { promisify } = require("node:util");
const exec = promisify(require("node:child_process").exec);

async function info_stdout(OSystem) {
  return await OS[OSystem]();
}

const OS = {
  win32: async () => {
    return new Promise((resolve, reject) => {
      exec(
        'netsh wlan show interfaces | findstr "SSID"',
        { shell: "powershell.exe" },
        (error, stdout) => {
          if (error) {
            reject(error);
          }

          const split_line = stdout.trim().split("\n")[0].split(":")[1].trim();
          resolve(split_line);
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
