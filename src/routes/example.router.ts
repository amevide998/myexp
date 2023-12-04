import express from 'express'
import * as exampleController from "../controllers/example.controller";

const exampleRouter = express.Router()

/**
 * @swagger
 * tags:
 *  - name: Example
 *    description: it's just an example route
 * /example:
 *   get:
 *     summary: example api
 *     description: tho check if the api is working or not
 *     responses:
 *       200:
 *         description: example end point
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *
 */
exampleRouter.get('/', exampleController.exampleGet)

export default exampleRouter