import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import { validateRequest, currentUser } from '../middlewares';
import UsersValidator from '../validators/users.validator';

const usersController = new UsersController();
const usersValidator = new UsersValidator();
const usersRoute = Router();

/**
 * @swagger
 * /users/login:
 *  post:
 *    description: Login user
 *    tags:
 *      - Users
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: email
 *        in: formData
 *        required: true
 *        type: string
 *      - name: password
 *        required: true
 *        in: formData
 *        type: string
 *    responses:
 *     200:
 *      description: login success
 *      examples:
 *       application/json: {
 *        "token": am1m0m01m0m1f89784g12ged798hgj9dsda
 *       }
 *     400:
 *        schema:
 *          type: object
 *          properties:
 *            errors:
 *              type: object
 *        examples:
 *          application/json: {
 *            "errors": [
 *                 "message": "Incorrect password"
 *             ],
 *          }
 */
usersRoute.post(
  '/login',
  usersValidator.login,
  validateRequest,
  usersController.login
);

/**
 * @swagger
 * /users/logout:
 *  get:
 *    description: Logout user by sending token
 *    tags:
 *      - Users
 *    security:
 *     - bearerAuth: []
 *    produces:
 *      - application/json
 *    responses:
 *     200:
 *      description: logout success
 *      examples:
 *       application/json: {
 *        "token": null
 *       }
 *     400:
 *        schema:
 *          type: object
 *          properties:
 *            errors:
 *              type: object
 *        examples:
 *          application/json: {
 *            "errors": [
 *                 "message": "token not sent"
 *             ],
 *          }
 */
usersRoute.post(
  '/logout',
  currentUser,
  usersController.logout
);

/**
 * @swagger
 * /users/signup:
 *  post:
 *     description: Create user
 *     tags:
 *       - Users
 *     parameters:
 *       - name: name
 *         in: formData
 *         required: true
 *         type: string
 *       - name: email
 *         in: formData
 *         required: true
 *         type: string
 *       - name: telefono
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *      200:
 *        description: register successfully
 *        examples:
 *          application/json: {
 *            "id": 2,
 *            "name": "Luis Jaramillo",
 *            "email": "luisj@gmail.com",
 *            "password": "$2b$10$fKfWwNnFl8akpezlrEYv/OVrjt9CQmh50LgpGq7E7uCMRLr6HJ/A2",
 *            "session": 0,
 *            "deleted": false,
 *            "created_at": "2021-06-26T16:24:37.127Z",
 *            "updated_at": "2021-06-26T16:24:37.127Z",
 *            "deleted_at": null,
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
 *             {
 *               "message": "Email: pedrop@gmail.com exists in db"
 *             },
 *             {
 *               "message": "Invalid value",
 *               "field": "email"
 *             },
 *             {
 *               "message": "Email is required",
 *               "field": "email"
 *             },
 *             {
 *               "message": "Invalid value",
 *               "field": "email"
 *             },
 *             {
 *               "message": "Email format is not valid",
 *               "field": "email"
 *              }
 *            ],
 *          }
 */
usersRoute.post(
  '/signup',
  usersController.signup
);

/**
 * @swagger
 * /users/validation-code:
 *  post:
 *     description: Validation code - User
 *     tags:
 *       - Users
 *     parameters:
 *       - name: code
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *      200:
 *        description: register successfully
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
usersRoute.post(
  '/validation-code',
  usersController.validationCode
);

export default usersRoute;
