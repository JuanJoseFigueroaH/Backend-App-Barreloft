import { Request, Response } from 'express';
import BaseController from './_base.controller';

class CompanysController extends BaseController {
  public getCompany = async (req: Request, res: Response) => {
    const jsonCompany = { nombre: '', direccion: '', whatsapp: '', correo: '', telefono: '' };
    res.status(200).send(jsonCompany);
  };

  public updateCompany= async (req: Request, res: Response) => {
    res.status(200).send({ message: 'Compañia Modificada Correctamente' });
  };
}

export default CompanysController;
