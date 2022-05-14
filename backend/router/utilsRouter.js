const express = require('express');
const router = express.Router();
const { sendMail } = require("../utils/mailFunctions")


router.post("/send", (req, res) => {
    const { receiverMail, messageContent} = req.body;

    sendMail(receiverMail, messageContent, `Echipa ProgramariCasatorii has sent you a message`);
    res.send(200);
})

module.exports = router;