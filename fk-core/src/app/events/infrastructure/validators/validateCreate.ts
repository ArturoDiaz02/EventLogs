import { Request, Response, NextFunction } from 'express';
const { check } = require('express-validator');
const { validationHelper } = require('../../../../helpers/validationHelper');

export const validateCreate = [
  check('name').exists().notEmpty().withMessage('Name is required'),
  check('start').exists().notEmpty().custom((value: string) => {
    const date = new Date(value);
    if (date.toString() === 'Invalid Date') {
      throw new Error('Invalid date format');
    }

    return true;
  }),
  check('end').exists().notEmpty().custom((value: string) => {
    const date = new Date(value);
    if (date.toString() === 'Invalid Date') {
      throw new Error('Invalid date format');
    }

    return true;
  }),
  check('type').exists().notEmpty().withMessage('Type is required'),
  (req: Request, res: Response, next: NextFunction) => validationHelper(req, res, next)
];