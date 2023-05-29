const express = require("express");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await fetch(
      `http://ivronlogs.icu:8080/rsv1/generic_api/list/19?fields=*&where=email=${email}&orderby=fullname`
    );
    if (response.ok) {
      const data = await response.json();
      console.log("!!!",data[0].UseriD)
      if (data.length > 0) {
        res.json(data[0]);
      }
    }
  } catch (err) {
    console.error(err);
    res.send(false);
  }
});

router.post("/", (req, res) => {
  // Handle POST request to /api/users here
  // ...
});

module.exports = router;
