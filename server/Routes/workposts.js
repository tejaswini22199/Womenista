import express from 'express'
import express from 'express'
import {getwork,PostWork} from '../Controllers/work.js'
const router=express.Router();
router.get('/',getwork);
router.post('/',PostWork);
export default router;