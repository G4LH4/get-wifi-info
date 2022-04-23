
# Get wifi password

Gets the wifi password of the current wifi, creates a folder and saves a file with the password on it.


## Instalation

To install the package run

```bash
npm i current-w-pswd
```


## How to use

#### Get all items

```js
const getWifiPassword = require("current-w-pswd");

(() => {
  getWifiPassword((data) => { // Detects automatically the OS
    console.log(data);
  });
})();

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `callback` | `function` | prints the returned data |



