const fs = require("fs");
const path = require("path");

const save_file = (get_info_stdout, get_password_stdout) => {
  // save file with the password

  const file_name = path.join(
    process.cwd(),
    `../../passwords/${get_info_stdout}.txt`
  );
  fs.writeFileSync(file_name, get_password_stdout, (err) => {
    if (err) {
      console.log("An error ocurred creating the file " + err.message);
    }
  });
};

module.exports = save_file;
