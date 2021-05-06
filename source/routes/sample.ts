import express, { Router } from 'express';
import controller from '../controllers/sample';

const router = express.Router();

router.get('/:string', controller.sampleHealthCheck);
router.get('/:firstString/:secondString', controller.secondHealthCheck);

export = router;
