// const firebaseAdmin = require("firebase-admin");
// const serviceAccount = require("./to-do-app-43476-firebase-adminsdk-7hjqh-de82a31007.json"); 


// firebaseAdmin.initializeApp({
//   credential: firebaseAdmin.credential.cert(serviceAccount),
//   databaseURL: "https://to-do-app-43476-default-rtdb.firebaseio.com/", 
// });



// const database = firebaseAdmin.database();

// const getData = (req, res) => {
//   const todoRef = database.ref("Todo");
//   todoRef
//     .get()
//     .then((snapshot) => {
//       const data = snapshot.val();
//       res.status(200).json(data);
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json({ message: "Internal server error" });
//     });
// };

// const postData = (req, res) => {
//   const todoRef = database.ref("Todo");
//   const newTodoRef = todoRef.push(); // Generates a new unique key
//   const newTodoKey = newTodoRef.key;

//   const newData = {
//     id: newTodoKey,
//     data: req.body,
//   };

//   newTodoRef
//     .set(newData)
//     .then(() => {
//       res.status(200).json({ message: "Todo added successfully" });
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json({ message: "Internal server error" });
//     });
// };

// module.exports = { postData, getData };