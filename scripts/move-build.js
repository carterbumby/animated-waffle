const fs = require('fs-extra');
const path = require('path');

fs.move(path.join(__dirname, '../build'), path.join(__dirname, '../server/build'), err => {
    if (err) return console.log(err);
    console.log('build folder moved to ./server');
});