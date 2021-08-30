const express = require('express');
require('dotenv').config();
const debug = require('debug')('sweetMakeUp');
const chalk = require('chalk');
const morgan = require('morgan');

require('./src/config/mongooseConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const userRouter = require('./src/routes/userRoutes');
const serviceRouter = require('./src/routes/serviceRoutes');
const cartRouter = require('./src/routes/cartRoutes');
const bookingRouter = require('./src/routes/bookingRoutes');

server.use('/api', userRouter);
server.use('/api', serviceRouter);
server.use('/api', cartRouter);
server.use('/api', bookingRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.bgBlue(`http://localhost:${port}`)}`)
);
