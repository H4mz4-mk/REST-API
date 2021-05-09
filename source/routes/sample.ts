import express, { Router } from 'express';
import controller from '../controllers/sample';

const router = express.Router();

router.get('/', controller.pathController);
router.get('/:path', controller.secondPathController);
router.get('/:path/:secondPath', controller.thirdPathController);


export = router;
