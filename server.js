const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './client', dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json());
    server.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      next();
    });

    const userRoutes = require('./routes/userRoutes');
    const dashboardRoutes = require('./routes/dashboardRoutes');

    server.use(userRoutes);
    server.use(dashboardRoutes);

    const models = require('./models');

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    models.sequelize.sync().then(() => {
      server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`)
      })
    }).catch(err => console.log(err));

  });