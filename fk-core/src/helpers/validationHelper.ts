import { Request, Response, NextFunction } from 'express';
const { validationResult } = require('express-validator');

const validationHelper = (req: Request, res: Response, next: NextFunction) => {
  try {
    validationResult(req).throw();
    return next();
  }catch (err: any) {
    res.status(403).json({ errors: err.array() });
  }
}

module.exports = { validationHelper }