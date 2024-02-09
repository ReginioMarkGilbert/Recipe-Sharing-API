/**
 * Configures an Express server with the following routes:
 *  - GET '/' - Sends the text 'Test 1'
 *  - GET '/api/test' - Sends a test object as JSON
 * Starts the server listening on a dynamically assigned port, defaulting to 3000 if not provided through environment variable.
*/
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Test 1')
});

app.get('/api/test', (req, res) => {
    res.send([{ id: 1, text: 'Test Object' }]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});

