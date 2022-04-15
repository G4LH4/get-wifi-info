const fs = require("fs");
const path = require("path");

const save_file = require("./save_file.js");

const save_password = (get_info_stdout, get_password_stdout) => {
  const folder_name = path.join(process.cwd(), "../../passwords/");

  if (!fs.existsSync(folder_name)) {
    fs.mkdir(folder_name, (err) => {
      if (err) {
        console.log("An error ocurred creating the folder " + err.message);
      }
    });
  }

  save_file(get_info_stdout, get_password_stdout);
  console.log("File saved!");
};

module.exports = save_password;
