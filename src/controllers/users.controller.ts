import { Request, Response } from 'express';
import BaseController from './_base.controller';
import { BadRequestError } from '../errors';
/* import crypto from 'crypto';
import moment from 'moment'; */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import mailService from '../services/mail.service';

class UsersController extends BaseController {
  private saltRound = 10;

  public login = async (req: Request, res: Response) => {
    const { email } = req.body;
    const user = await this.db.users.findFirst({
      where: {
        email,
        deleted: false
      }
    });

    if (!user) {
      throw new BadRequestError('User not found');
    }

    await this.db.users.update({
      where: {
        id: user.id
      },
      data: { session: user.session + 1 }
    });

    const userJwt = jwt.sign(user!, process.env.JWT_KEY!, {
      expiresIn: process.env.JWT_EXPIRATION_TIME!
    });
    res.status(200).send({ token: userJwt });
  };

  public signup = async (req: Request, res: Response) => {
    const { name, email, password, telefono } = req.body;
    const hashedPassword = await bcrypt.hash(password, this.saltRound);
    const userData = {
      name,
      email,
      password: hashedPassword,
      telefono
    };
    const newUser = await this.db.users.create({
      data: userData
    });

    // await userService.createClient(newUser.id);
    /* mailService.sendWelcomeEmailClient(
      newUser.email,
      newUser.name,
      token,
      newUser.id
    ); */
    res.status(201).send(newUser);
  };

  public logout = async (req: Request, res: Response) => {
    const { email } = req.body;
    const user = await this.db.users.findFirst({
      where: {
        email,
        deleted: false
      }
    });

    if (!user) {
      throw new BadRequestError('User not found');
    }

    await this.db.users.update({
      where: {
        id: user.id
      },
      data: { session: 0 }
    });

    if (!req.currentUser) {
      throw new BadRequestError('token not sent');
    }

    res.status(200).send({ token: null });
  };

  public validationCode = async (req: Request, res: Response) => {
    const { code } = req.body;

    if (code !== '12345') {
      throw new BadRequestError('Code not found');
    }

    res.status(200).send({ message: 'Codigo correcto' });
  };
}

export default UsersController;
