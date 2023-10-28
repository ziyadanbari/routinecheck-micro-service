const sendMessage = async (req, res) => {
  try {
    const { phone, message } = req.body;
    await client.sendMessage(`${phone}@c.us`, message);
    console.log(`sending message to +${phone}`);
    res.status(200).json("sended!");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

module.exports = { sendMessage };
