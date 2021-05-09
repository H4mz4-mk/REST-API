import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';

const NAMESPACE = 'This is quick Test!!';
const pathController = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Sample health check route called`);

    return res.status(200).json({
        path: '/'
    });
};

const secondPathController = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Sample health check route called`);

    return res.status(200).json({
        path: `/${req.params.path}`
    });
};

const thirdPathController = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Sample health check route called`);

    return res.status(200).json({
        path: `/${req.params.path}/${req.params.secondPath}`
    });
};

export default { pathController, secondPathController, thirdPathController };
