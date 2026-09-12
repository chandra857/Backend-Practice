// const express = require('express');
// const app = express();

//First Server with Express and API Endpoints    
// app.get("/", (req,res)=>{ 

//     res.send("Hello Express");
// })

// app.get("/users",(req,res)=>{
//      res.json([
//         {name:"John", age:30},
//         {name:"Jane", age:25},
//         {name:"Bob", age:35}
//      ])
// })

// app.get("/products",(req,res)=>{
//     res.json([
//         {name:"Laptop", price:1000}])    
// })

// app.get("/products",(req,res)=>{
//     res.status(200).json([
//         {name:"Laptop", price:1000},
//         {name:"Phone", price:500},
//         {name:"Tablet", price:300}
//     ])
// })
// app.get("/users/:id", (req, res) => {

//     console.log(req.params.id);

//     res.json({
//         id: req.params.id
//     });

// });

// app.get("/users" ,(req,res)=>{
    
//      res.json({
//        type:"All Users",
//        query:req.query
//      })
// })

// app.get("/users/:id", (req, res) => {

//     console.log("PARAMS:", req.params);
//     console.log("QUERY:", req.query);

//     res.json({
//         params: req.params,
//         query: req.query
//     });

// });


//Request Object Properties
// app.get("/users/:id", (req, res) => {

//     console.log("Method:", req.method);
//     console.log("URL:", req.url);
//     console.log("Path:", req.path);

//     console.log("Params:", req.params);
//     console.log("Query:", req.query);

//     console.log(
//         "User Agent:",
//         req.get("User-Agent")
//     );

//     res.status(200).json({
//         message: "User received",
//         params: req.params,
//         query: req.query
//     });
// });




// First Middleware Example 
// app.use((req,res,next)=>{
//     req.myValue = "Hello from Middleware";
//     console.log(req.headers);
//     next();

// });

// Second Middleware Example with Value
// app.get("/", (req,res)=>{
//     res.send(req.myValue);
// })

//Authentication Middleware Example
// app.use((req, res, next) => {

//     const authorized = false;

//     if (!authorized) {
//         return res.status(401).json({
//             message: "Unauthorized"
//         });
//     }

//     next();
// });


//MultipleMiddleware functions Example 

// app.use((req, res, next) => {{
     
//     console.log("First Middleware");
//     next();
// }})

// app.use((req, res, next) => {
//     console.log("Second Middleware");
//     next();
// })

// app.get("/", (req, res) => {
//     console.log("Route");
//     res.send("Hello from Express");
// })


//Building a POST API with Express
// const express = require('express');
// const app = express();

// // Middleware to parse JSON request body
// app.use(express.json()); 


// app.post("/users", (req, res) => {
//     const { name, email,age } = req.body;    
//     console.log(req.body);
//     res.status(201).json({
//         message:"User Created Successfully", 
//     }) 
// });



//Build the Application Point of View (POV) with Express 
// const express = require("express");

// const app = express();

// app.use((req, res, next) => {

//     console.log("Request received");
//     console.log("Method:", req.method);
//     console.log("URL:", req.url);

//     next();
// });

// app.use(express.json());

// app.post("/users", (req, res) => {

//     console.log("Body:", req.body);

//     res.status(201).json({
//         message: "User received",
//         user: req.body
//     });

// }); 

//validation Middleware Example
// const express = require("express");
// const app = express();
// app.use(express.json());

// app.post("/users", (req, res) => {

//     const { name, email, age } = req.body;  

//     if(!name || !email || !age){
//         return res.status(400).json({
//             message: "Missing required fields"
//         });
//     }   


//     res.status(201).json({
//         message: "User is Validated and received",
//         user: req.body
//     });     

// });


//API for get all users and get user by id 
// const express = require("express");
// const app = express();
// app.use(express.json()); 

// const users = [
//     { id: 1, name: "John Doe", email: "john@example.com", age: 30 },
//     { id: 2, name: "Jane Smith", email: "jane@example.com", age: 25 },  
//     { id: 3, name: "Bob Johnson", email: "bob@example.com", age: 35 }
// ];

// //Get all users 
// app.get("/users",(req,res)=>{
//     res.status(200).json(users);
// })

// //Get one user by id 

// app.get("/users/:id",(req,res)=>{

//     const userId = parseInt(req.params.id);
//     const user = users.find(user=>user.id===userId) 
    
//     if(!user){
//         return res.status(404).json({
//             message:"User not found"
//         })      
//     }
//     res.status(200).json(user);
// });


// //Create a new user 
// app.post("/users",(req,res)=>{

//     const {name,email,age} = req.body;
//     if(!name || !email || !age){
//         return res.status(400).json({
//            message:"Missing required fields"
//         })
//     }
    
//     const newUser = {
//         id:users.length+1,
//         name,
//         email,
//         age
//     }

//     users.push(newUser);
//     res.status(201).json({
//         message:"User created successfully",
//         user:newUser
//     });

// });


// //Update the User by id

// app.put("/users/:id",(req,res)=>{
 
//     const Id = parseInt(req.params.id);
//     const user = users.find(u =>u.id === Id);
    
//     //Check if user exists 
//     if(!user){
//         return res.status(404).json({
//             message:"User Not Found"
//         })
//     }

//     //Validate the request Body
//     const {name,email} = req.body;
    
//     if(!name || !email){
//         return res.status(400).json({
//             message:"Missing required fields"
//     })
//     }
    
//     //Update the User 
//     user.name = name;
//     user.email = email;

//     res.status(200).json({
//         message:"User updated successfully",
//         user
//     });

// });


// //Delete the User by id
// app.delete("/users/:id",(req,res)=>{
//     const Id = parseInt(req.params.id);
//     const userIndex = users.findIndex(u=>u.id === Id);

//     //Check if user exists 
//     if(userIndex === -1){
//         return res.status(404).json({
//             message:"User Not Found"
//         })
//     }

//     //Remove the user from the array
//     const deletedUser = users.splice(userIndex, 1)[0];

//     res.status(200).json({
//         message:"User deleted successfully",
//         user: deletedUser
//     });
// });

// //Patch the User by id 

// app.patch("/users/:id",(req,res)=>{
      
//     const id = parseInt(req.params.id);
//     const user = users.find(u=>u.id === id);
    
//     //Check if User Exists
//     if(!user){
//         return res.status(404).json({
//             message:"User Not Found"
//         })      
//     }
    
//     //Update the User
//     const {name,email,age} = req.body; 
    
//     if(name !== undefined){
//         user.name = name;
//     }
//     if(email !== undefined){
//         user.email = email;
//     }
//     if(age !== undefined){
//         user.age = age;
//     }

//     res.status(200).json({
//         message:"User updated successfully",
//         user
//     });

// });

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

const express = require("express");
const userRoutes = require("./routes/user.routes");
const app = express();

//Middleware
app.use(express.json())

//User Routes
app.use("/users", userRoutes);

app.listen(3000,()=>{
    console.log("Server is Listening on Port 3000")
});