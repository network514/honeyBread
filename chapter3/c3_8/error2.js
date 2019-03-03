const fs = require('fs');

setInterval(() => {
    fs.unlink('./abcdefg.js', (err) => {
        console.error(err);
    });
}, 1000);