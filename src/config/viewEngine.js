import express from "express";
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

let configViewEngine = app => {
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
}


module.exports = configViewEngine;