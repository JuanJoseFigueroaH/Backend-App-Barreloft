import { Router } from 'express';
import ClassControler from '../controllers/class.controller';

const classControlelr = new ClassControler();
const classRoute = Router();

/**
 * @swagger
 * /class/getClassCalendary:
 *  post:
 *     description: Get Class - Calendary
 *     tags:
 *       - Class
 *     parameters:
 *       - name: tipoClase
 *         in: formData
 *         required: true
 *         type: string
 *       - name: fecha
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
classRoute.post(
  '/getClassCalendary',
  classControlelr.getClassCalendary
);

/**
 * @swagger
 * /class/getClassReserved:
 *  post:
 *     description: Get Class - Reserved
 *     tags:
 *       - Class
 *     parameters:
 *       - name: userId
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
classRoute.post(
  '/getClassReserved',
  classControlelr.getClassReserved
);

export default classRoute;
