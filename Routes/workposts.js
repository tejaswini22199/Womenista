import express from 'express'

import {getWork,createWork} from '../Controllers/work.js'

const router=express.Router();

router.get('/',getWork);
router.post('/',createWork);

export default router;