import express from 'express';

const app = express();
const port = 5000

app.get('/', (req, res) => {
    res.send('Library-react!')
})

app.listen(port, () => {
    console.log(`Library-react app listening on port ${port}`)
})
