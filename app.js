import express  from 'express';
import morgan from 'morgan';
import indexRouter from './routes/index.js';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/',indexRouter);



app.listen(PORT, ()=>console.log(' server running on port '+ PORT));