"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _address = _interopRequireDefault(require("address"));

var _qrcodeTerminal = _interopRequireDefault(require("qrcode-terminal"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (api, {
  small = true,
  once = true,
  outputFormat
} = {}) => {
  let port;

  let ip = _address.default.ip();

  api.afterDevServer(({
    server,
    devServerPort
  }) => {
    port = devServerPort;
  });
  api.onDevCompileDone(({
    isFirstCompile
  }) => {
    let output = typeof outputFormat === 'function' ? outputFormat(`http://${ip}:${port}/`) : `http://${ip}:${port}/`;
    once ? isFirstCompile && (console.log(`QRCODE: ${_chalk.default.cyan(output)}`), _qrcodeTerminal.default.generate(output, {
      small
    })) : (console.log(`QRCODE: ${_chalk.default.cyan(output)}`), _qrcodeTerminal.default.generate(output, {
      small
    }));
  });
};

exports.default = _default;