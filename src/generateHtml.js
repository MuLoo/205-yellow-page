// const fs = require('fs');
// const path = require('path');
// const { parseCSV } = require('./utils/csvParser');

// const csvFilePath = path.join(__dirname, '../urls.csv');
// const outputHtmlPath = path.join(__dirname, '../output.html');

// function generateHtml() {
//   fs.readFile(csvFilePath, 'utf8', (err, data) => {
//     if (err) {
//       console.error('读取 CSV 文件时出错:', err);
//       return;
//     }

//     const lines = data.split('\n').filter(line => line.trim());
//     if (lines.length === 0) {
//       console.error('CSV 文件内容为空');
//       return;
//     }

//     const headers = lines[0].split(',');
//     let html = '<!DOCTYPE html><html lang="zh-cn">';
//     html += '<head><meta charset="UTF-8"><title>服务黄页</title></head>';
//     html += '<body>';
//     html += '<h1>服务黄页</h1>';
//     html += '<table border="1" cellspacing="0" cellpadding="5">';
//     html += '<thead><tr>';
//     headers.forEach(header => {
//       html += `<th>${header.trim()}</th>`;
//     });
//     html += '</tr></thead>';
//     html += '<tbody>';

//     lines.slice(1).forEach(line => {
//       const values = parseCSV(line);
//       console.log('values:', values);
//       if (values.length < headers.length) return;
//       html += '<tr>';
//       values.headers.forEach(value => {
//         html += `<td>${value.trim()}</td>`;
//       });
//       html += '</tr>';
//     });

//     html += '</tbody>';
//     html += '</table>';
//     html += '</body></html>';

//     fs.writeFile(outputHtmlPath, html, (err) => {
//       if (err) {
//         console.error('写入 HTML 文件时出错:', err);
//       } else {
//         console.log('HTML 文件已成功生成:', outputHtmlPath);
//       }
//     });
//   });
// }

// generateHtml();

const fs = require('fs');
const path = require('path');
const { parseCSV } = require('./utils/csvParser');

const csvFilePath = path.join(__dirname, '../urls.csv');
const outputHtmlPath = path.join(__dirname, '../index.html');

function generateHtml() {
  fs.readFile(csvFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('读取 CSV 文件时出错:', err);
      return;
    }

    const lines = data.split('\n').filter(line => line.trim());
    if (lines.length === 0) {
      console.error('CSV 文件内容为空');
      return;
    }

    const headers = lines[0].split(',').map(header => header.trim());
    let html = '<!DOCTYPE html><html lang="zh-cn">';
    html += '<head>';
    html += '<meta charset="UTF-8">';
    html += '<title>服务黄页</title>';
    html += `<style>
      body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        margin: 40px;
        background-color: #f4f6f8;
      }
      h1 {
        text-align: center;
        color: #333;
        margin: 60px auto;
      }
      table {
        margin: 0 auto;
        border-collapse: collapse;
        width: 90%;
        background-color: #fff;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      th, td {
        text-align: left;
        padding: 16px 20px;
        color: #666;
      }
      th {
        background-color: #007acc;
        color: #fff;
      }
      tr:nth-child(even) {
        background-color: #f9f9f9;
      }
      a {
        color: #007acc !important;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    </style>`;
    html += '</head>';
    html += '<body>';
    html += '<h1>DEV服务黄页</h1>';
    html += '<table>';
    html += '<thead><tr>';
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += '</tr></thead>';
    html += '<tbody>';

    lines.slice(1).forEach(line => {
      const values = parseCSV(line);
      if (values.length < headers.length) return;
      html += '<tr>';
      values.headers.forEach((value, index) => {
        let cellContent = value.trim();
        if (headers[index].toLowerCase() === 'url' && cellContent) {
          cellContent = `<a href="${cellContent}" target="_blank">${cellContent}</a>`;
        }
        html += `<td>${cellContent}</td>`;
      });
      html += '</tr>';
    });

    html += '</tbody>';
    html += '</table>';
    html += '</body></html>';

    fs.writeFile(outputHtmlPath, html, (err) => {
      if (err) {
        console.error('写入 HTML 文件时出错:', err);
      } else {
        console.log('HTML 文件已成功生成:', outputHtmlPath);
      }
    });
  });
}

generateHtml();