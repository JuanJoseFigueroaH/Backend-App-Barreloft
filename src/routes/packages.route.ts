import { Router } from 'express';
import PackagesController from '../controllers/packages.controller';

const packagesController = new PackagesController();
const packagesRoute = Router();

/**
 * @swagger
 * /packages/getAvaliablePackages:
 *  get:
 *     description: Get Packages Avaliable
 *     tags:
 *       - Packages
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
packagesRoute.get(
  '/getAvaliablePackages',
  packagesController.getAvailablePackages
);

export default packagesRoute;
