"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _address = _interopRequireDefault(require("address"));

var _qrcodeTerminal = _interopRequireDefault(require("qrcode-terminal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (api, {
  small = true,
  once = true
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
    once ? isFirstCompile && _qrcodeTerminal.default.generate(`http://${ip}:${port}`, {
      small
    }) : _qrcodeTerminal.default.generate(`http://${ip}:${port}`, {
      small
    });
  });
};

exports.default = _default;