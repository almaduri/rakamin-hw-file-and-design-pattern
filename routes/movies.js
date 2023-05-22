/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerformat: JWT
 *  schemas:
 *    Movies:
 *      type: object
 *      required:
 *        - title
 *        - genres
 *        - year
 *      properties:
 *        id:
 *          type: integer
 *          description: The auto-generated id of the movie
 *        title:
 *          type: string
 *          description: The title of the movie
 *        genres:
 *          type: string
 *          description: The genres of the movie
 *        year:
 *          type: string
 *          description: The year of the movie
 */

/**
 * @swagger
 * tags:
 *  name: Movies
 *  description: Movies managing API
 * /movies:
 *  get:
 *    summary: Get all movies
 *    tags: [Movies]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: string
 *        description: Page
 *      - in: query
 *        name: limit
 *        schema:
 *          type: string
 *        description: Limit
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Movies'
 */

/**
 * @swagger
 * tags:
 *  name: Movies
 *  description: Movies managing API
 * /movies/{id}:
 *  get:
 *    summary: Get movie by id
 *    tags: [Movies]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        description: ID of the movie to get
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Movies'
 */

/**
 * @swagger
 * tags:
 *  name: Movies
 *  description: Movies managing API
 * /movies:
 *  post:
 *    summary: Add new movie
 *    tags: [Movies]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *              genres:
 *                type: string
 *              year:
 *                type: string
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Movies'
 */

/**
 * @swagger
 * tags:
 *  name: Movies
 *  description: Movies managing API
 * /movies/{id}:
 *  put:
 *    summary: Edit movie by id
 *    tags: [Movies]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              title:
 *                type: string
 *              genres:
 *                type: string
 *              year:
 *                type: string
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        description: ID of the movie to get
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Movies'
 */

/**
 * @swagger
 * tags:
 *  name: Movies
 *  description: Movies managing API
 * /movies/{id}:
 *  delete:
 *    summary: Delete movie by id
 *    tags: [Movies]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        description: ID of the movie to get
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Movies'
 */

const express = require('express')
const router = express.Router()
const authenticateToken = require('../middleware/authenticateToken')
const { getAllMovies, getMovieById, addMovie, updateMovie, deleteMovie } = require('../controllers/moviesController')

router.get('/', authenticateToken, getAllMovies)

router.get('/:id', authenticateToken, getMovieById)

router.post('/', authenticateToken, addMovie)

router.put('/:id', authenticateToken, updateMovie)

router.delete('/:id', authenticateToken, deleteMovie)

module.exports = router