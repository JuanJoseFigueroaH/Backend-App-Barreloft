import { Request, Response } from 'express';
import BaseController from './_base.controller';

class ProfilesController extends BaseController {
  public getProfile = async (req: Request, res: Response) => {
    const jsonPerfil = { nombre: '', url_imagen: '', edad: '', correo: '', telefono: '' };
    res.status(200).send(jsonPerfil);
  };

  public updateProfile = async (req: Request, res: Response) => {
    res.status(200).send({ message: 'Perfil Modificado Correctamente' });
  };
}

export default ProfilesController;
