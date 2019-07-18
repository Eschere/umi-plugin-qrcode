# umi-plugin-umi-plugin-qrcode

[![NPM version](https://img.shields.io/npm/v/umi-plugin-qrcode.svg?style=flat)](https://npmjs.org/package/umi-plugin-qrcode)
[![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-qrcode.svg?style=flat)](https://npmjs.org/package/umi-plugin-qrcode)

> Output which address is your umi-app running at with qrcode.

## Usage

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
the size of qrcode is smaller or not.

`once`: `boolean` default `true`
output the qrcode at first time of `onDevCompileDone` or every times.

## LICENSE

MIT

## thanks
1. [address](https://github.com/node-modules/address)
2. [qrcode-terminal](https://github.com/gtanner/qrcode-terminal)
