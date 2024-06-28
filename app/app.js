import http from "http"
import os from "os"


const hostname = '0.0.0.0';
const port = 8000;

import dotenv from 'dotenv';
dotenv.config();


const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/hostname') {
            const hostName = os.hostname();
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`Hostname: ${hostName}\n`);
        } else if (req.url === '/author') {
            const author = process.env.AUTHOR || 'Unknown Author';
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`Author: ${author}\n`);
        } else if (req.url === '/id') {
            const uuid = process.env.UUID || 'No UUID provided';
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`UUID: ${uuid}\n`);
        } else {
            res.statusCode = 404;
            res.end('Not Found\n');
        }
    } else {
        res.statusCode = 405;
        res.end('Method Not Allowed\n');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
