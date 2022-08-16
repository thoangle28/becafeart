/**
 * Index
 */

const express = require("express");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");

require("dotenv").config();

//----------------------
const connectMongoDB = async () => {
  const mongoDB = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}`;

  try {
    await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const dbConnect = mongoose.connection;

    console.log("MongoDB connected 1");
  } catch (error) {
    console.log(error.message);
  }
};

const app = express();
app.use(express.json()) //send data from body

//app.get('/', (request, response) => response.send('Hello World,....'))

app.use("/api/auth", authRouter);

const PORT = 8010;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

//connect to MongoDB server
connectMongoDB();