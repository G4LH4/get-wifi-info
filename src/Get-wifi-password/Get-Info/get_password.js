const { promisify } = require("node:util");
const exec = promisify(require("node:child_process").exec);

function get_password(info_stdout, OSystem) {
  return new Promise(async (resolve) => {
    await OS[OSystem](info_stdout, (info) => {
      resolve(info);
    });
  });
}

const OS = {
  win32: async (info_stdout, callback) => {
    const password = await exec(
      `netsh wlan show profile name="${info_stdout}" key=clear`,
      { shell: "powershell.exe" },
      (error, stdout) => {
        if (error) {
          console.error(error);
        }

        callback(
          stdout.match(/^\s*Contenido de la clave\s+:\s*(\w+)\s*$/m)?.[1]
        );
      }
    );

    return password;
  },
  linux: async (info_stdout, callback) => {
    const password = await exec(
      `cat /etc/NetworkManager/system-connections/${info_stdout}`,
      { shell: "bash" },
      (error, stdout) => {
        if (error) {
          console.error(error);
        }

        callback(stdout.trim());
      }
    );
    return password;
  },
};

module.exports = get_password;
