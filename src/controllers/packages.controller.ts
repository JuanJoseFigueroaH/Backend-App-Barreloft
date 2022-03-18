import { Request, Response } from 'express';
import BaseController from './_base.controller';

class PackagesController extends BaseController {
  public getAvailablePackages = async (req: Request, res: Response) => {
    const jsonPackageAvailable = [];
    jsonPackageAvailable.push({ cantidadClase: '', valor: '' });
    jsonPackageAvailable.push({ cantidadClase: '', valor: '' });
    res.status(200).send(jsonPackageAvailable);
  };
}

export default PackagesController;
