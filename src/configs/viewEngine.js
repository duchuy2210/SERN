import express from 'express';
const configViewEngine = app => {
  //config express static
  app.use(express.static('./src/public'));
  //config view engine
  app.set('view engine', 'ejs');
  app.set('views', './src/views');
};
export default configViewEngine;
