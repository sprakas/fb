import express from "express";
import mongoose from 'mongoose';
import graphlHTTP from "express-graphql";
import schema from "./schema";
import cors from "cors";

const app = express();
const PORT = 4300;

mongoose.connect("mongodb+srv://Surya:Surya@123@cluster0-rng2v.mongodb.net/notes?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.use(cors())
app.get("/", (req, res) => {                                
  res.json({
    message: "Notetaking API v1"
  });
});

app.use(
    "/graphql",
    graphlHTTP({
      schema: schema,
      graphiql: true
    })
  );

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});