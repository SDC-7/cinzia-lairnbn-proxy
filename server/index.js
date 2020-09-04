require('newrelic');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/../client')));
app.use('/:id', express.static(path.join(__dirname, '/../client')));

// Carousel
app.use('/api/images/:id', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));

// Booking service
app.use('api/booking/:id', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));

// Reviews
app.use('/api/overall_reviews/:id', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));
app.use('/api/individual_reviews/:id', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));

// More places
app.use('/residences', createProxyMiddleware({ target: 'http://localhost:3004', changeOrigin: true }));

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
