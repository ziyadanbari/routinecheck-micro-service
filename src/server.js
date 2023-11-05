const express = require("express");
const { config } = require("dotenv");
const router = require("./routes/router");
const { connectToDB } = require("./helpers/mongodb.helper.js");
const { configureToken } = require("./helpers/configureToken.helper.js");
const { configureSession } = require("./helpers/configureNewSession.helper.js");

const app = express();
const parsed = config().parsed;
const { DB_URL, PORT } = parsed;

app.use(express.json());
app.use("/api/v1/whatsapp/", router);
configureSession();
connectToDB(DB_URL, async () => {
  try {
    await configureToken();
    app.listen(PORT, "0.0.0.0", (err) => {
      if (err) return console.log(err);
      console.log(`App listening on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
});
