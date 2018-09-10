'use strict'

const express = require('express');
const router = express.Router();


/**
 * @swagger
 * /hello:
 *   get:
 *     tags:
 *       - Hello
 *     description: Retrieve a string
 *
 */
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.2"
    });
});

module.exports = route;