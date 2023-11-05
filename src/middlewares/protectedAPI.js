const { token } = require("../models/Token.js");

const protectedAPI = async (req, res, next) => {
  const { authorization: sendedToken } = req.headers;
  console.log(req.headers);
  console.log(req.body);
  try {
    const isCorrect = await token.find({ token: sendedToken });
    if (Boolean(isCorrect.length)) return next();
    res.status(403).json({ message: "You are not authorized" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
module.exports = { protectedAPI };
