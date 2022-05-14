const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const connection = require('../db');

router.get("/", (req, res) => {
    connection.query("SELECT * FROM programaricasatorii", (err, results) => {
        if (err) {
            console.log(err);
            return res.send(err);
        }

        return res.json({
            programari: results,
        })
    })
});


router.post("/", (req, res) => {
    const {
        numeSot,
        numeSotie,
        email,
        data,
        locatieID
        
    } = req.body;

    if (!numeSot || !numeSotie || !email || !data || !locatieID) {
        return res.status(400).json({
            error: "All fields are required",
        })
    }

    connection.query(`INSERT INTO programaricasatorii (numeSot, numeSotie, email, data,locatieID) values (${mysql.escape(numeSot)},
     ${mysql.escape(numeSotie)}, ${mysql.escape(email)}, ${mysql.escape(data)}, ${mysql.escape(locatieID)})`, (err, results) => {
        if (err) {
            console.log(err);
            return res.send(err);
        }

        return res.json({
            results,
        })
    })

});

// // Delete a message
// router.delete("/:id", (req, res) => {
//     const { id } = req.params;
//     connection.query(`DELETE FROM messages where entryID = ${mysql.escape(id)}`, (err, results) => {
//         if (err) {
//             console.log(err);
//             return res.send(err);
//         }
//         return res.json({
//             results,
//         })
//     })
// });

// router.put("/:id", (req, res) => {
//     const { id } = req.params;
//     const {
//         senderName,
//         senderMail,
//         receiverMail,
//         messageContent,
//     } = req.body;

//     if (!senderName || !senderMail || !receiverMail || !messageContent) {
//         return res.status(400).json({
//             error: "All fields are required",
//         })
//     }

//     connection.query(`UPDATE messages SET senderName = ${mysql.escape(senderName)}, senderMail = ${mysql.escape(senderMail)}, receiverMail = ${mysql.escape(receiverMail)}, messageContent = ${mysql.escape(messageContent)} WHERE entryID = ${mysql.escape(id)}`, (err, results) => {
//         if (err) {
//             console.log(err);
//             return res.send(err);
//         }
//         return res.json({
//             results,
//         })
//     })
// });

module.exports = router;