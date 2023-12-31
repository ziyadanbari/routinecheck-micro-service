const { Schema, model } = require("mongoose");

const TokenSchema = new Schema({
  token: {
    type: String,
    required: true,
  },
  createdat: {
    type: Date,
    default: Date.now,
  },
});

const token = model("whatsappservicetoken", TokenSchema);
module.exports = { token };
