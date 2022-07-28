
# Get wifi password

Gets the wifi password of the current wifi
(Currently only working for Windows and Linux)

## Instalation

To install the package run

```bash
npm i current-w-pswd
```


## How to use

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



