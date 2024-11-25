import express from 'express';
import path from 'path';
//import router from './routes';

const app = express();
const port = 3002;

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../public/views'));

app.get ('/', (req,res) => {
    res.send('Hello Human')
});


//app.use(router);

app.listen(port, () => {
    console.log('Server is running on http://localhost:3000');
});
