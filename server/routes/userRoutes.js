const express = require("express");

const router = express.Router();

router.get("/login", async (req, res) => {
  console.log("login!");
  const { username, password } = req.query;
  try {
    const response = await fetch(
      `http://www.ivronlogs.icu:8080/rsv1/generic_api/list/750?tid=19&fields=userid,username,fullname,email,password&where=username=^jgrahm^&orderby=fullname`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      return res.status(response.status).json({ error: "Login failed" });
    }

    const data = await response.json();
    console.log(data);
    if (data.length > 0 && username === data[0].username) {
      console.log("true", data);
      localStorage.setItem("UserID", res[0].userid);
      res.json(data[0]);
    }
  } catch (err) {
    return res.status(401).json({ error: "Invalid username or password" });
  }
});

router.post("/", (req, res) => {
  // Handle POST request to /api/users here
  // ...
});

module.exports = router;
