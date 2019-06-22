const express = require('express');
const fs = require('fs');
const handler = require('./handler');
const router = express.Router();

router.get('/', (req, res) => {
    fs.readFile('server/db/userCart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    })
});

router.post('/', (req, res) => {
    handler.handler(req, res, 'add', 'server/db/userCart.json');
    handler.logHandler('add', req, 'server/db/stats.json')
});

router.put('/:id', (req, res) => {
    handler.handler(req, res, 'change', 'server/db/userCart.json');
    handler.logHandler('change', req, 'server/db/stats.json')
});

router.delete('/:id', (req, res) => {
    handler.handler(req, res, 'remove', 'server/db/userCart.json');
    handler.logHandler('remove', req, 'server/db/stats.json')
});

module.exports = router;
