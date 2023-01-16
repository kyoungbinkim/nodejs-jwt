import express from 'express';

import { getUserList } from '../controller/listController.js';
import { authmiddleware } from '../middleware/aut.js';

const router = express.Router();

router.get('/', authmiddleware, getUserList);

export default router;