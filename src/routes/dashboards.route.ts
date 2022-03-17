import { Router } from 'express';
import DashboardsController from '../controllers/dashboards.controller';

const dashboardsController = new DashboardsController();
const dashboardsRoute = Router();

/**
 * @swagger
 * /dashboards/getAll:
 *  post:
 *     description: Dashboards Get All
 *     tags:
 *       - Dashboards
 *     parameters:
 *       - name: user_id
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
dashboardsRoute.post(
  '/getAll',
  dashboardsController.getAll
);

export default dashboardsRoute;
