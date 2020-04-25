import express from "express";
import mongoose from 'mongoose';
import graphlHTTP from "express-graphql";
import cors from "cors";

import schema from "./schema/schema";
import rootValue from './resolvers/index';
import isAuth from './middlewares/isAuth';

const app = express();
const PORT = 4300;

mongoose.connect("mongodb+srv://Surya:Surya@123@cluster0-rng2v.mongodb.net/notes?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.use(cors())
app.use(isAuth);
app.use(
    "/graphql",
    graphlHTTP({
      schema,
      rootValue,
      graphiql: true,
    })
  );

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});