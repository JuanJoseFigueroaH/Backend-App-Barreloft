import { Router } from 'express';
import LinkedAccountsController from '../controllers/linkedAccounts.controller';

const linkedAccountsController = new LinkedAccountsController();
const linkedAccountsRoute = Router();

/**
 * @swagger
 * /linkedAccounts/getLinkedAccount:
 *  get:
 *     description: Get linkend Account
 *     tags:
 *       - Linked Accounts
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
linkedAccountsRoute.get(
  '/getLinkedAccount',
  linkedAccountsController.getLinkedAccount
);

/**
 * @swagger
 * /linkedAccounts/linkAccount:
 *  post:
 *     description: Link Account
 *     tags:
 *       - Linked Accounts
 *     parameters:
 *       - name: email
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
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
linkedAccountsRoute.post(
  '/linkAccount',
  linkedAccountsController.linkAccount
);

/**
 * @swagger
 * /linkedAccounts/unlinkAccount:
 *  post:
 *     description: Unlink Account
 *     tags:
 *       - Linked Accounts
 *     parameters:
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
linkedAccountsRoute.post(
  '/unlinkAccount',
  linkedAccountsController.unlinkAccount
);

export default linkedAccountsRoute;
