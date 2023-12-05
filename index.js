import express from "express"
import { studentsRouter } from "./Routers/student.js";
import { mentorsRouter } from "./Routers/mentor.js";
import cors from "cors"

//initiating the server
const app = express();

//middleware
app.use(express.json());

app.use(cors());

//students routers
app.use("/students", studentsRouter)     
app.use("/mentors", mentorsRouter )      

//starting the server
app.listen(9090, ()=>console.log("server running in localhost:9090")) 
