const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/message', (req, res) => {
    const secretMessage = 'This is a message page!';
    res.send(secretMessage);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
