import express from "express";
import path from 'path';
import cookieParser from 'cookie-parser';


let configViewEngine = app => {
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'pug');
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, '../public')));
}


module.exports = configViewEngine;