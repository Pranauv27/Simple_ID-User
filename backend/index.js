const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(cors());

app.use(express.json());

const users= [];

app.get('/' , (req,res) => {
    res.write('Go to /users');
    res.end();
})

// TO GET ALL THE USERS
app.get('/users' , (req,res) => {
    console.log("GET: /users (all) is triggered.");
    console.log();

    res.json(users);
})

// TO ADD A USER TO USERS ARRAY
app.post('/users', (req,res) => {
    console.log("POST: /users is triggered");
    const user = req.body;

    const user1 = users.find((user2) => user2.id == user.id);

    if (user1) {
        console.log("The user with given ID:",user.id, "already exists. Try with another ID");
        return res.status(409).json({ error: "User ID already exists" });
    }

    users.push(user);
    console.log('User added successfully');
    console.log("Current Data in the users array:",users);
    console.log();

    res.status(201).json(user);
})

// TO FIND A PARTICULAR USER
app.get('/searchuser', (req, res) => {
    console.log("GET: /searchuser is triggered");
    const userid = req.query.id;
  
    // Find the user with the given ID
    const user = users.find((user) => user.id === userid);
  
    if (user) {
      console.log("User with ID", userid, "found:", user);
      console.log();
      res.status(200).json(user);
    } else {
      console.log("The user with given UserID", userid, "is not found");
      console.log();
      res.status(404).json({ error: "User not Found" });
    }
  })

// TO UPDATE THE NAME OF THE USER
app.put('/users/:id', (req,res) => {
    console.log("PUT: /users/",req.params.id," is triggered");
    const userid = req.params.id;
    const username = req.body.name;
    const user = users.find((user) => user.id === userid);

    if (!user) {
        console.log("The user with given ID:",userid, "is not found");
        return res.status(404).json({ error: "User not Found" });
    }

    user.name = username;

    console.log("User name with ID", user.id, "is updated to:", user.name);
    console.log();

    res.status(200).json(user);
})

// TO DELETE THE USER DETAILS WITH GIVEN ID
app.delete('/users/:id', (req,res) => {
    console.log("DELETE: /users/",req.params.id," is triggered");
    const userid = req.params.id;
    const index = users.findIndex((user) => user.id == userid);

    if(index == -1){
        console.log("The user with given ID:", userId, "is not found");
        return res.status(404).json({ error: "User not Found" });
    }

    const DeletedUser = users.splice(index, 1)[0];

    console.log("User with ID:",userid,"has been deleted");
    console.log("Deleted User details:");
    console.log(DeletedUser);
    console.log();

    res.status(200).json(DeletedUser);
})

app.listen(port, () => {
    console.log('Server is running on http://localhost:%d',port);
})