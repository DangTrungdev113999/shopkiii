import session from 'express-session';


let configCession = app => {
  app.use(session({
    secret: 'phieuyet',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 24 * 1000 }
  }));  
}

module.exports = configCession;