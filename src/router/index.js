import express from 'express';

import join from './join.js';
import login from './login.js'
import list from './list.js'

const rootRouter = express.Router();

rootRouter.use('/join', join);
rootRouter.use('/login', login);
rootRouter.use('/list', list);


export default rootRouter;