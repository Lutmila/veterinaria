const { createServer } = require('@vercel/express');
const app = require('../app.js');

module.exports = createServer(app);