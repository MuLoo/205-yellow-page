// filepath: /csv-to-html/csv-to-html/src/utils/csvParser.js
const fs = require('fs');

function parseCSV(data) {
    const lines = data.split('\n').filter(line => line.trim());
    const headers = lines[0].split(',').map(header => header.trim());
    const rows = lines.slice(1).map(line => {
        const values = line.split(',').map(value => value.trim());
        return headers.reduce((acc, header, index) => {
            acc[header] = values[index] || '';
            return acc;
        }, {});
    });
    return { headers, rows };
}

module.exports = { parseCSV };