import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './configs/viewEngine';
import connectDB from './configs/connectDB'
import routes from './routes';
import dotenv from 'dotenv';

//dotenv config
dotenv.config();

const app = express();
//config app with body-Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//
viewEngine(app);
routes(app);
connectDB();
//listen on port
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
