const express = require("express");
const firebaseAdmin = require("firebase-admin");
const serviceAccount = require("./to-do-app-43476-firebase-adminsdk-7hjqh-de82a31007.json"); // Path to your service account key JSON file
const jwt = require("jsonwebtoken");

const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Initialize Firebase
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://to-do-app-43476-default-rtdb.firebaseio.com/", // Replace with your Firebase project's database URL
});

const database = firebaseAdmin.database();

const getData = (req, res) => {
  const todoRef = database.ref("Todo");
  todoRef
    .once("value")
    .then((snapshot) => {
      const data = snapshot.val();
      res.status(200).json({ data });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    });
};

const postData = (req, res) => {
  const todoRef = database.ref("Todo");
  const newData = req.body; // Assuming the client sends the data as JSON in the request body

  todoRef
    .push(newData)
    .then(() => {
      res.status(200).json({ message: "Data added successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    });
};
app.get("/get", getData);
app.post("/post", postData);






// Secret key for JWT
const secretKey =
  "c82796e28e08143cf47e5ec1cae06bced05c9a3c0f8077184db120ba8e5888d6";

// User registration route
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  // Store user information and hashed password in database
  const user = {
    username,
    email,
    password,
  };

  // Generate JWT
  const token = jwt.sign(user, secretKey);
  res.status(200).json({ token });
  console.log(user);
});

// Protected route that requires a valid JWT
app.get("/user", authenticateToken, (req, res) => {
  // Access user information from the request object (decoded from JWT)
  const { username, email } = req.user;

  res.status(200).json({ username, email });
});

// Middleware to authenticate JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});