import { Router } from 'express';
import VideoController from '../controllers/videos.controller';

const videoController = new VideoController();
const videoRoute = Router();

/**
 * @swagger
 * /videos/getAll:
 *  post:
 *     description: Get Video All
 *     tags:
 *       - Videos
 *     parameters:
 *       - name: planId
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
videoRoute.post(
  '/getAll',
  videoController.getAll
);

export default videoRoute;
