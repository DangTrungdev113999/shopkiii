import express from 'express';
import passport from "passport";

import configViewEngine from "./config/viewEngine";
import session from "./config/session";

import connectDB from "./config/connectDB";
import adminRouter from "./routes/admin";
import apiAdminRouter from "./api/routers/admin";

const app = express();

// connect to mongodb
connectDB();

session(app);
// view engine setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

configViewEngine(app);

app.use("/admin", adminRouter);
app.use("/api/admin", apiAdminRouter);


module.exports = app;
