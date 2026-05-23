import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/data', (req, res) => {
    res.json({ message: 'This is somedata from the backend!' });
});

app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'David' }
    ];
    res.json(users);
});

app.get("*name", (req, res) => {
    res.sendFile("public/index.html", { root: __dirname});
});

export default app;