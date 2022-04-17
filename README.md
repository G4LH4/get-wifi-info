
# Get wifi password

Gets the wifi password of the current wifi, creates a folder and saves a file with the password on it.


## Instalation

To install the package run

```bash
npm i current-pswd
```


## How to use

#### Get all items

```js
const getWifiPassword = require("current-pswd");

(async () => {
  await getWifiPassword("windows", (data) => {
    console.log(data);
  });
})();

```
#getWifiPassword function
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `OS` | `string` | **Required** |

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `callback` | `function` | prints the returned data |



