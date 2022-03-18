import { Request, Response } from 'express';
import BaseController from './_base.controller';

class VideosController extends BaseController {
  public getAll = async (req: Request, res: Response) => {
    const jsonVideo = { nombre: '', elementos: [], urlVideo: '', descripcion: '', nivel: '', paquete: '', claseTomada: true };
    res.status(200).send(jsonVideo);
  };
}

export default VideosController;
