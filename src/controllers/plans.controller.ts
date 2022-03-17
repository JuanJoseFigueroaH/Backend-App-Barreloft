import { Request, Response } from 'express';
import BaseController from './_base.controller';

class PlansController extends BaseController {
  public getPlanCurrent = async (req: Request, res: Response) => {
    const jsonPlanCurrent = [];
    jsonPlanCurrent.push({ plan: '', vigencia: '', vencimiento: '', claseRestante: '', precio: '' });
    jsonPlanCurrent.push({ plan: '', vigencia: '', vencimiento: '', claseRestante: '', precio: '' });
    res.status(200).send(jsonPlanCurrent);
  };
}

export default PlansController;
