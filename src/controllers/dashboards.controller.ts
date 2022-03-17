import { Request, Response } from 'express';
import BaseController from './_base.controller';

class DashboardsController extends BaseController {
  public getAll = async (req: Request, res: Response) => {
    const jsonDashboard = {};

    const logros = [{ nombre: '', url_imagen: '', descripcion: '' }];
    jsonDashboard.logros = logros;

    const paqueteVigente = 'Gold';
    jsonDashboard.paqueteVigente = paqueteVigente;

    const proximaClase = '2022-07-03';
    jsonDashboard.proximaClase = proximaClase;

    const numeroClasesPendiente = '10';
    jsonDashboard.numeroClasesPendiente = numeroClasesPendiente;

    const progresoPerfil = [{ nombre: 'Inicio Sesion', progreso: '20%' }, { nombre: 'Paquete', progreso: '35%' }];
    jsonDashboard.progresoPerfil = progresoPerfil;

    res.status(200).send(jsonDashboard);
  };
}

export default DashboardsController;
