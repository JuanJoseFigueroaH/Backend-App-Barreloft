import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../errors';
import { body } from 'express-validator';
import BaseValidator from './_base.validator';
// import bcrypt from 'bcrypt';

class UsersValidator extends BaseValidator {
  // Validate fields for login method
  public login: any[] = [
    body('email').notEmpty().isEmail().withMessage('Email is required'),
    body('email').notEmpty().isEmail().withMessage('Email format is not valid'),
    body('password').notEmpty().withMessage('Password is required')
  ];

  public validateIfEmailExists = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { email } = req.body;
    const where: {} = { email, deleted: false };
    const user = await this.db.users.findFirst({
      where
    });
    if (user) {
      throw new BadRequestError(`${email} already registered`);
    }
    next();
  };
}

export default UsersValidator;
