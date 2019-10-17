import express from 'express';

import configViewEngine from "./config/viewEngine";
import configHandleError from "./config/handleError";
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

configHandleError(app);

module.exports = app;
