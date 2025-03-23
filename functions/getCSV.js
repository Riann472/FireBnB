const fs = require  ('fs');
const csv = require('csv-parser');

function getCSV(path) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(path)
            .pipe(csv({ separator: ',' }))
            .on('data', data => results.push(data))
            .on('end', () => resolve(results))
            .on('error', err => reject(err));
    });
}

module.exports = getCSV;