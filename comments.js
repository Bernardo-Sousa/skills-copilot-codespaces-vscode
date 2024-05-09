// Create web server
// 1. Import express
const express = require('express');
// 2. Create an express application
const app = express();
// 3. Create a port number
const port = 3000;
// 4. Create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});
// 5. Start the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

// 6. Create a route for comments
app.get('/comments', (req, res) => {
    res.send('Comments Page');
});

// 7. Create a route for comments
app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Comments Page ${id}`);
});

// 8. Start the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

// 9. Create a route for comments
app.post('/comments', (req, res) => {
    res.send('Comments Page');
});

// 10. Start the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

// 11. Create a route for comments
app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Comments Page ${id}`);
});

// 12. Start the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

// 13. Create a route for comments
app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Comments Page ${id}`);
});

// 14. Start the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

// 15. Create a route for comments
app.patch('/comments/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Comments Page ${id}`);
});

// 16. Start the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

// 17. Create a route for comments
app.options('/comments', (req, res) => {
    res.send('Comments