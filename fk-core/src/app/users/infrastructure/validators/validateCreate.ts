import { Request, Response, NextFunction } from 'express';
const { check } = require('express-validator');
const { validationHelper } = require('../../../../helpers/validationHelper');

export const validateCreate = [
  check('firstName').exists().notEmpty().withMessage('FirstName is required'),
  check('lastName').exists().notEmpty().withMessage('LastName is required'),
  check('email').exists().notEmpty().isEmail().withMessage('Email is required and must be valid'),
  (req: Request, res: Response, next: NextFunction) => validationHelper(req, res, next)
];