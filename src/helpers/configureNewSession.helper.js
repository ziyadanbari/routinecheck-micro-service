const { Client, LocalAuth } = require("whatsapp-web.js");
const qrTerminal = require("qrcode-terminal");

async function configureSession() {
  global.client = new Client({
    authStrategy: new LocalAuth({
      clientId: "server",
      dataPath: "../../whatsapp_auth",
    }),
  });
  client.on("qr", (qr) => {
    console.log(qr);
    qrTerminal.generate(qr, { small: true });
  });
  client.on("ready", () => {
    console.log("client ready");
  });
  client.on("authenticated", (session) => {
    console.log("authenticated");
  });
  client.on("auth_failure", (m) => {
    console.log(m);
  });
  client.initialize();
}

module.exports = { configureSession };
