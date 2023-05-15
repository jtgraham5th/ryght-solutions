const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const cors = require('cors')
const userRoutes = require('./routes/userRoutes.js');
// import patientRoutes from './routes/patientRoutes.js';

// Middleware to parse JSON data in request bodies
app.use(bodyParser.json());
app.use(cors());
// Example route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// Example route to handle POST requests to a URL
// app.post('/api/users', (req, res) => {
//   const { name, email } = req.body;
//   // Save the user to a database or perform other actions
//   res.send(`User ${name} (${email}) has been created!`);
// });
app.use('/api/login', async (req, res) => {
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
;
})
// app.use('/api/users', userRoutes);
// app.use('/api/patients', patientRoutes);
// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
