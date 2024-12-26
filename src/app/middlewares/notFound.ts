import { Request, Response } from 'express';
import sendResponse from '../utils/sendResponse';

const notFound = (req: Request, res: Response) => {
  sendResponse(res, {
    statusCode: 404,
    success: false,
    message: 'API not found',
    data: '',
  });
};

export default notFound;
