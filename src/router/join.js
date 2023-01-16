import express from 'express';

import joinController from "../controller/joinController.js"; 

const router = express.Router();

router.post('/', joinController);

export default router;