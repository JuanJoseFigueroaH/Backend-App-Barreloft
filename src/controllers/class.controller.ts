import { Request, Response } from 'express';
import BaseController from './_base.controller';

class ClassController extends BaseController {
  public getClassCalendary = async (req: Request, res: Response) => {
    const jsonClassCalendary = [];
    jsonClassCalendary.push({ nombre: '', fecha: '18-03-2022', hora: '08:00', tipoClase: 'Avanzados', listaEspera: true, cantidadListaEspera: 1 });
    res.status(200).send(jsonClassCalendary);
  };

  public getClassReserved = async (req: Request, res: Response) => {
    const jsonClassReserved = [];
    jsonClassReserved.push({ nombre: '', fecha: '18-03-2022', hora: '08:00', tipoClase: 'Avanzados' });
    res.status(200).send(jsonClassReserved);
  };
}

export default ClassController;
