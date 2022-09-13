import http from 'node:http';
import app from './lib/app.js';
import dotenv from 'dotenv';

dotenv.config();

const server = http.createServer(app);

const PORT = process.env.APP_PORT || 8080;
const hostname = process.env.APP_HOST || 'localhost';

server.listen(PORT, hostname, () => {
  console.log(server.address());
});
console.log('Listening...');
