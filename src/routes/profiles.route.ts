import { Router } from 'express';
import ProfilesController from '../controllers/profiles.controller';

const profilesController = new ProfilesController();
const profilesRoute = Router();

/**
 * @swagger
 * /profiles/getProfile:
 *  post:
 *     description: Get Profile
 *     tags:
 *       - Profiles
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
profilesRoute.post(
  '/getProfile',
  profilesController.getProfile
);

/**
 * @swagger
 * /profiles/updateProfile:
 *  put:
 *     description: Update Profile
 *     tags:
 *       - Profiles
 *     parameters:
 *       - name: nombre
 *         in: formData
 *         required: true
 *         type: string
 *       - name: edad
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
profilesRoute.put(
  '/updateProfile',
  profilesController.updateProfile
);

export default profilesRoute;
