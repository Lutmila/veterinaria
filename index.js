const { createServer } = require('@vercel/express');
const app = require('../app');

module.exports = createServer(app);