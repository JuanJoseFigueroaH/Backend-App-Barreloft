import { Request, Response } from 'express';
import BaseController from './_base.controller';

class LinkedAccountsController extends BaseController {
  public getLinkedAccount = async (req: Request, res: Response) => {
    const jsonAccount = [{ redSocial: '', name: '', avatar: '' }];
    res.status(200).send(jsonAccount);
  };

  public linkAccount = async (req: Request, res: Response) => {
    res.status(200).send({ message: 'Cuenta Vinculada correctamente' });
  };

  public unlinkAccount = async (req: Request, res: Response) => {
    res.status(200).send({ message: 'Cuenta Desvinculada correctamente' });
  };
}

export default LinkedAccountsController;
