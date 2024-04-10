const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    // Extract headers from the request
    const headers = req.headers;

    // Set the response headers
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Write the HTML response
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Header Information</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Header Information</h1>');
    res.write('<table border="1">');
    res.write('<tr><th>Header</th><th>Value</th></tr>');

    // Iterate over the header keys and display them in the table
    Object.keys(headers).forEach(key => {
        res.write(`<tr><td>${key}</td><td>${headers[key]}</td></tr>`);
    });

    res.write('</table>');
    res.write('</body>');
    res.write('</html>');

    // End the response
    res.end();
});

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});