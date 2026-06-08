const express = require('express');
const client = require('prom-client');

const app = express();

const register = new client.Registry();

client.collectDefaultMetrics({
  register
});

const requestCounter = new client.Counter({
  name: 'node_requests_total',
  help: 'Total number of requests'
});

register.registerMetric(requestCounter);

app.get('/', (req, res) => {
  requestCounter.inc();

  res.send(`
    <h1>Cloud Computing ESA Project</h1>
    <h2>Multi-Stage Docker Build Optimization</h2>
    <h3>Registry Driven CI/CD Pipeline</h3>
    <p>Prometheus + Grafana Monitoring Enabled</p>
  `);
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
