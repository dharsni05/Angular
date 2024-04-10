const http = require('http');
const url = require('url');

function passThePillow(n, time) {
    let currentIndex = 0;
    let direction = 1; // 1 indicates moving right, -1 indicates moving left

    for (let i = 1; i <= time; i++) {
        if (currentIndex === 0 && direction === -1) {
            direction = 1; // Change direction when reaching the start
        } else if (currentIndex === n - 1 && direction === 1) {
            direction = -1; // Change direction when reaching the end
        }
        currentIndex += direction;
    }

    return currentIndex + 1; // Adjust index to start from 1 instead of 0
}

// Create a server
const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;
    const n = 4;
    const time = 5;

    // Calculate the result
    const result = passThePillow(n, time);

    // Send the response
    res.writeHead(200, { 'Content-Type': 'text/html', 
                         'Server': `Node.js ${process.version}` 
        });
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Pass the Pillow</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Pass the Pillow Result</h1>');
     
     
    res.write(`n:${n} time:${time} Result:${result}`);
   
    res.write('</body>');
    res.write('</html>');
    res.end();
});

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
 