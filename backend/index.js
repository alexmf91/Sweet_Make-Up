const express = require('express');
require('dotenv').config();
const debug = require('debug')('sweetMakeUp');
const chalk = require('chalk');
const morgan = require('morgan');

require('./src/config/mongooseConfig');
require('./src/config/passportConfig');

const server = express();
const port = process.env.PORT || 5000;

server.use(morgan('dev'));
server.use(express.json());

const userRouter = require('./src/routes/userRoutes');

server.use('/api', userRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.bgBlue(`http://localhost:${port}`)}`)
);
