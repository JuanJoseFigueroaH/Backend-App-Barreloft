import { Router } from 'express';
import PlansController from '../controllers/plans.controller';

const plansController = new PlansController();
const plansRoute = Router();

/**
 * @swagger
 * /plans/getPlansCurrent:
 *  get:
 *     description: Get Plans Currents
 *     tags:
 *       - Plans
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
plansRoute.get(
  '/getPlansCurrent',
  plansController.getPlanCurrent
);

export default plansRoute;
