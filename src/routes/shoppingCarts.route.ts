import { Router } from 'express';
import ShoppingCartsController from '../controllers/shoppingCarts.controller';

const shoppingCartsController = new ShoppingCartsController();
const shoppingCartsRoute = Router();

/**
 * @swagger
 * /shoppingCarts/addProduct:
 *  post:
 *     description: Add Product to shopping carts
 *     tags:
 *       - Shopping Carts
 *     parameters:
 *       - name: product_id
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
shoppingCartsRoute.post(
  '/addProduct',
  shoppingCartsController.addProduct
);

/**
 * @swagger
 * /shoppingCarts/getProduct:
 *  post:
 *     description: Get Products To Shopping Carts
 *     tags:
 *       - Shopping Carts
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
shoppingCartsRoute.post(
  '/getProduct',
  shoppingCartsController.getProduct
);

/**
 * @swagger
 * /shoppingCarts/deleteProduct:
 *  get:
 *     description: Delete Product To Shopping Carts
 *     tags:
 *       - Shopping Carts
 *     parameters:
 *       - name: product_id
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
shoppingCartsRoute.post(
  '/deleteProduct',
  shoppingCartsController.deleteProduct
);

/**
 * @swagger
 * /shoppingCarts/validateCoupon:
 *  post:
 *     description: Validate Coupon
 *     tags:
 *       - Shopping Carts
 *     parameters:
 *       - name: coupon
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
shoppingCartsRoute.post(
  '/validateCoupon',
  shoppingCartsController.validateCoupon
);

export default shoppingCartsRoute;
