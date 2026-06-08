import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello, vishakha whats app!');
});

app.get('/echo', (req, res) => {
    res.send({
        message: 'This is an echo endpoint',
});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
