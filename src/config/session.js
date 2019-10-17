import session from 'express-session';
import connectMongo from "connect-mongo";

let NongoStore = connectMongo(session);

let sessionStore = new NongoStore({
  url: 'mongodb://localhost/shopki',
  autoReconnect: true,
})


let config = app => {
  app.use(session({
    key: "sid",
    secret: 'phieuyet',
    store: sessionStore,
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 24 * 1000 }
  }));  
}


module.exports = config;