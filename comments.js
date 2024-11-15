// Create web server
const express = require('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Add comments route
app.get('/comments', (req, res) => {
    res.json([
        { id: 1, comment: 'Hello' },
        { id: 2, comment: 'World' }
    ]);
});