import address from 'address';
import qrcode from 'qrcode-terminal';
import chalk from 'chalk';

export default (api, { small = true, once = true, outputFormat} = {}) => {
  let port;
  let ip = address.ip();

  api.afterDevServer(({ server, devServerPort }) => {
    port = devServerPort;
  });

  api.onDevCompileDone(({ isFirstCompile }) => {
    let output = typeof outputFormat === 'function' ? outputFormat(`http://${ip}:${port}/`) : `http://${ip}:${port}/`

    once
      ? isFirstCompile && (console.log(`QRCODE: ${chalk.cyan(output)}`), qrcode.generate(output, { small }))
      : (console.log(`QRCODE: ${chalk.cyan(output)}`), qrcode.generate(output, { small }))
  })
}
