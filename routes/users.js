/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerformat: JWT
 *  schemas:
 *    Users:
 *      type: object
 *      required:
 *        - email
 *        - gender
 *        - password
 *        - role
 *      properties:
 *        id:
 *          type: integer
 *          description: The auto-generated id of the user
 *        email:
 *          type: string
 *          description: The email of the user
 *        gender:
 *          type: string
 *          description: The gender of the user
 *        password:
 *          type: string
 *          description: The password of the user
 *        role:
 *          type: string
 *          description: The role of the user
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Users managing API
 * /users:
 *  get:
 *    summary: Get all users
 *    tags: [Users]
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
 *              $ref: '#/components/schemas/Users'
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Users managing API
 * /users/{id}:
 *  get:
 *    summary: Get user by id
 *    tags: [Users]
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
 *              $ref: '#/components/schemas/Users'
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Users managing API
 * /users:
 *  post:
 *    summary: Add new user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              gender:
 *                type: string
 *              password:
 *                type: string
 *              role:
 *                type: string
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Users'
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Users managing API
 * /users/{id}:
 *  put:
 *    summary: Edit user by id
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              gender:
 *                type: string
 *              password:
 *                type: string
 *              role:
 *                type: string
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        description: ID of the user to get
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Users'
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Users managing API
 * /users/{id}:
 *  delete:
 *    summary: Delete user by id
 *    tags: [Users]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        description: ID of the user to get
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Users'
 */

const express = require('express')
const router = express.Router()
const authenticateToken = require('../middleware/authenticateToken')
const { getAllUsers, getUserById, addUser, updateUser, deleteUser } = require('../controllers/usersController')

router.get('/', authenticateToken, getAllUsers)

router.get('/:id', authenticateToken, getUserById)

router.post('/', authenticateToken, addUser)

router.put('/:id', authenticateToken, updateUser)

router.delete('/:id', authenticateToken, deleteUser)

module.exports = router