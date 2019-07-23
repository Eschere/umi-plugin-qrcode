import address from 'address';
import qrcode from 'qrcode-terminal';

export default (api, { small = true, once = true } = {}) => {
  let port;
  let ip = address.ip();

  api.afterDevServer(({ server, devServerPort }) => {
    port = devServerPort;
  });

  api.onDevCompileDone(({ isFirstCompile }) => {
    once
      ? isFirstCompile && qrcode.generate(`http://${ip}:${port}`, { small })
      : qrcode.generate(`http://${ip}:${port}`, { small })
  })
}
