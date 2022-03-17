import { Router } from 'express';
import CompanyController from '../controllers/companys.controller';

const companysController = new CompanyController();
const companysRoute = Router();

/**
 * @swagger
 * /companys/getCompany:
 *  get:
 *     description: Get Company
 *     tags:
 *       - Companys
 *     responses:
 *      200:
 *        examples:
 *          application/json: {
 *          }
 *      400:
 *       schema:
 *         type: object
 *         properties:
 *           errors:
 *             type: object
 *       examples:
 *         application/json: {
 *           "errors": [
 *            ],
 *          }
 */
companysRoute.get(
  '/getCompany',
  companysController.getCompany
);

/**
 * @swagger
 * /companys/updateCompany:
 *  put:
 *     description: Update companys
 *     tags:
 *       - Companys
 *     parameters:
 *       - name: nombre
 *         in: formData
 *         required: true
 *         type: string
 *       - name: direccion
 *         in: formData
 *         required: true
 *         type: string
 *       - name: correo
 *         in: formData
 *         required: true
 *         type: string
 *       - name: telefono
 *         in: formData
 *         required: true
 *         type: string
 *       - name: id
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *      200:
 *        examples:
 *          application/json: {
 *          }
 *      400:
 *       schema:
 *         type: object
 *         properties:
 *           errors:
 *             type: object
 *       examples:
 *         application/json: {
 *           "errors": [
 *            ],
 *          }
 */
companysRoute.put(
  '/updateCompany',
  companysController.updateCompany
);

export default companysRoute;
