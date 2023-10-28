const { token } = require("../models/Token.js");
const crypto = require("crypto");

const checkIfTokenExist = async () => {
  const tokens = await token.find({});
  return Boolean(tokens.length);
};
const configureToken = async () => {
  try {
    const isExist = await checkIfTokenExist();
    if (!isExist) {
      const generatedToken = crypto.randomBytes(40).toString("hex");
      const newToken = new token({ token: generatedToken });
      await newToken.save();
    }
  } catch (error) {
    throw error;
  }
};
module.exports = { configureToken };
