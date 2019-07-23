# umi-plugin-qrcode

[![NPM version](https://img.shields.io/npm/v/umi-plugin-qrcode.svg?style=flat)](https://npmjs.org/package/umi-plugin-qrcode)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/umi-plugin-qrcode/peer/umi.svg)
> Output which address your umi-app is running at with qrcode in terminal.

![template](https://github.com/Eschere/umi-plugin-qrcode/blob/master/test/template.gif?raw=true)


## Usage
Install
```bash
yarn add umi-plugin-qrcode --dev
```
Configure in `.umirc.js`,

```js
export default {
  plugins: [
    ['umi-plugin-qrcode', options],
  ],
}
```

## Options
`small`: `boolean` default `true`
Size of qrcode is smaller or not.

`once`: `boolean` default `true`
Output qrcode at first time of `onDevCompileDone` or every times.

## LICENSE

MIT

## Thanks
1. [address](https://github.com/node-modules/address)
2. [qrcode-terminal](https://github.com/gtanner/qrcode-terminal)
