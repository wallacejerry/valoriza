import "reflect-metadata";
import express from "express";

import "./database";

// @types/express
const app = express();

// http://localhost:3000
app.listen(3000, () => console.log("Server is running."))