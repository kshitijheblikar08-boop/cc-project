# Cloud Computing ESA Project

## Features
- Multi-stage Docker Build
- CI/CD using GitHub Actions
- Prometheus Monitoring
- Grafana Dashboard
- Node.js Application

## Run Application
docker build -t cc-project:v1 .
docker run -p 3001:3000 cc-project:v1

## Monitoring
docker compose up -d

Prometheus: localhost:9090
Grafana: localhost:3002
