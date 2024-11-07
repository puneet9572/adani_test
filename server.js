const express = require('express');
const app = express();
const PORT = 3000;

// Blocking Endpoint
app.get('/block', (req, res) => {
    const start = Date.now();
    while (Date.now() - start < 20000) {
        // Blocking the main thread for 20 seconds
    }
    res.send('Blocked for 20 seconds');
});

// Non-blocking Endpoint
app.get('/non-block', (req, res) => {
    // Simulate 20-second non-blocking delay
    setTimeout(() => {
        res.send('Non-blocking: waited for 20 seconds');
    }, 20000);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
