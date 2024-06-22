import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToMongoDb from "./database/connectToMongoDb.js";
import movieRoutes from "./routes/MovieRouter.js";
import cors from 'cors';


dotenv.config();
const app = express();

// PORT should be assigned after calling dotenv.config() because we need to access the env variables. Didn't realize while recording the video. Sorry for the confusion.
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());
app.use('/api/movies', movieRoutes);
app.use((req, res) => {
  res.status(404).send({ status: false, message: "Url not found" });
});


app.listen(PORT, () => {
    connectToMongoDb();
  console.log(`Server Running on port ${PORT}`);
});

export default app;