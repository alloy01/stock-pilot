import express from "express"; 
import { connectDB } from "./configs/db_config.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { auth_router } from "./routes/auth_routes.js";
import 'dotenv/config'
import { item_router } from "./routes/item_routes.js";

const app = express(); 
//create the Express application instance

const port = process.env.PORT || 4000; 
//if there is an enviornment variable named PORT use it if not then use 4000 as default

connectDB();

app.use(express.json()) 
//parse incoming JSON request bodies

app.use(express.urlencoded({extended:true})) 
//parse URL-encoded form data, including nested objects

app.use(cookieParser()) 
//server can now parse and read cookies

app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true
}))
//allows cors policy for client url credentials:true means that we can send and receive cookies from the client url

app.get('/api',(req,res)=>{
  res.send('API is running...');
})
//create a /api route such that we know our api/server is running or not

app.use('/api/auth',auth_router);
//using auth_router as a middleware that executes desired functions

app.use('/api/item',item_router);
//using item_router as a middleware that executes desired fucntions

app.listen(port,()=>{
  console.log(`Server has been started on PORT:${port}`)
})
//start the server and listen for incoming requests on the specified port