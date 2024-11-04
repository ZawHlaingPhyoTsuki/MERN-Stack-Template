import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import 'dotenv/config';
import productRouter from "./routes/productRoute.js";


// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json()); // using this middleware, we can access the req.body and parse it to json
app.use(cors()); // using this, we can access the backend from any frontend

// db connection
connectDB();

// api endpoints / routes
app.use('/api/product', productRouter)

app.get('/', (req, res) => {
    res.send("API is running");
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}) // running the express server