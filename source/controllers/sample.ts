import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';

const NAMESPACE = 'This is quick Test!!';
const sampleHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Sample health check route called`);

    return res.status(200).json({
        message: `You just entered ${req.params.string}`
    });
};

const secondHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Second health check route called`);

    return res.status(200).json({
        message: `You just entered /${req.params.firstString}/${req.params.secondString}`
    });
};

export default { sampleHealthCheck, secondHealthCheck };
