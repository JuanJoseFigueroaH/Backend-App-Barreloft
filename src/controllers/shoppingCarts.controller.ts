import { Request, Response } from 'express';
import BaseController from './_base.controller';

class ShoppingCartsController extends BaseController {
  public getProduct = async (req: Request, res: Response) => {
    const jsonProduct = [{ nombre: '', precio: '' }];
    res.status(200).send(jsonProduct);
  };

  public addProduct = async (req: Request, res: Response) => {
    res.status(200).send({ message: 'Producto Agregado Correctamente' });
  };

  public deleteProduct = async (req: Request, res: Response) => {
    res.status(200).send({ message: 'Producto Eliminado Correctamente' });
  };

  public validateCoupon = async (req: Request, res: Response) => {
    res.status(200).send({ message: 'Cupón Valido' });
  };
}

export default ShoppingCartsController;
