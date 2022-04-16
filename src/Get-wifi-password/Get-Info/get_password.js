const { promisify } = require("node:util");
const exec = promisify(require("node:child_process").exec);

async function get_password(info_stdout, callback) {
  const password = await exec(
    `netsh wlan show profile name="${info_stdout}" key=clear`,
    { shell: "powershell.exe" },
    (error, stdout) => {
      if (error) {
        console.error(error);
      }

      callback(stdout.split("\n")[32].trim().replace("  ", ""));
    }
  );

  return password;
}

module.exports = get_password;
