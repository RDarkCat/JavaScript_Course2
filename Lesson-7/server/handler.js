const cart = require('./cart');
const fs = require('fs');
const moment = require('moment');

const actions = {
  add: cart.add,
  change: cart.change,
  remove: cart.remove
};

let handler = (req, res, action, file) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      let newCart = actions[action](JSON.parse(data), req);
      fs.writeFile(file, newCart, (err) => {
        if (err) {
          res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
          res.send(JSON.stringify({result: 1, text: 'SUCCESS!'}))
        }
      })
    }
  })
};

let readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    })
  });
};

let logHandler = (action, req, file = 'server/db/stats.json') => {

  // пришлось сделать костыль для add
  if (action === 'add') {
      readFile(file)
          .then(logArray => {
            logArray.push({
              "productName": req.body.product_name,
              "action": action,
              "time": moment().format('LTS')
            });
            fs.writeFile(file, JSON.stringify(logArray, null, 4), (err) => {
            })
          })
  } else {
    readFile('server/db/products.json')
        .then(result => {
          return new Promise((resolve, reject) => {
            resolve(result.find(el => el.id_product === +req.params.id));
          })
        })
        .then(el => {
          readFile(file)
              .then(logArray => {
                logArray.push({
                  "productName": el.product_name,
                  "action": action,
                  "time": moment().format('LTS')
                });
                fs.writeFile(file, JSON.stringify(logArray, null, 4), (err) => {
                })
              })
        }, (err) => {
        })
        .catch(error => console.log(error));
  }
};

module.exports = {
  logHandler,
  handler
};
