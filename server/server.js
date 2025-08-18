const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const cors = require('cors')
const userRoutes = require('./routes/userRoutes.js');
const apiRoutes = require('./routes/apiRoutes.js');
// import patientRoutes from './routes/patientRoutes.js';

// Middleware to parse JSON data in request bodies
app.use(bodyParser.json());
app.use(cors());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Ryght Solutions API Server is running',
    timestamp: new Date().toISOString()
  });
});

// API routes
app.use('/api', apiRoutes);
app.use('/user', userRoutes);
// app.use('/api/login', async (req, res) => {
//   console.log("login!");
//   const { username, password } = req.query;
//   try {
//     const response = await fetch(
//       `http://www.ivronlogs.icu:8080/rsv1/generic_api/list/750?tid=19&fields=userid,username,fullname,email,password&where=username=^jgrahm^&orderby=fullname`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     if (!response.ok) {
//       return res.status(response.status).json({ error: "Login failed" });
//     }

//     const data = await response.json();
//     console.log(data);
//     if (data.length > 0 && username === data[0].username) {
//       console.log("true", data);
//       localStorage.setItem("UserID", res[0].userid);
//       res.json(data[0]);
//     }
//   } catch (err) {
//     return res.status(401).json({ error: "Invalid username or password" });
//   }
// ;
// })
// app.use('/api/users', userRoutes);
// app.use('/api/patients', patientRoutes);
// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
