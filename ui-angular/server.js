// //Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist'));

// app.get('*', function(req,res) {
    
  // res.sendFile(path.join(__dirname + '/dist/index.html'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

// Express app
const express = require('express');
const app = express();
// HTTPS only middleware
const forceSSL = function() { 
    return function(req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(
                ['https://', req.get('Host'), req.url].join('')
            );
        }
        next();
    }
};
app.use(forceSSL());
// Actual host of the static Angular content
app.use(express.static(__dirname + '/dist'));

// Nice and done!
app.get('/backend', (req, res) => {
  res.json({url: 'https://gateway20190603104549.azurewebsites.net'})
});

app.listen(process.env.PORT || 5000, function() {
    console.log("Angular app is running!");
});