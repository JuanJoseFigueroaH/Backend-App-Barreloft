import { Request, Response, NextFunction } from 'express'
import { BadRequestError } from '../errors'
import jwt from 'jsonwebtoken'
import { IUser } from '../interfaces/user.interface'
export const currentUser = (req:Request, res:Response, next: NextFunction) => {
  const authHeader = req.get('Authorization');
  console.log(authHeader)
  if (!authHeader) {
    return next();
  }
  try {
    const token = authHeader.split(' ')[1];
    const payload = <IUser>jwt.verify(token, process.env.JWT_KEY!)
    console.log(payload)
    req.currentUser = payload
  } catch (err) {
    throw new BadRequestError('session expired or not founded, please login again');
  }
  next()
}
