const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductFromFile = (cb) => {
  fs.readFile(p, (err, fileContents) => {
    if (err) {
      return cb([]);
    } else cb(JSON.parse(fileContents));
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductFromFile((products) => {
      fs.readFile(p, (err, fileContent) => {
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
      });
    });
  }

  static fetchAll(cb) {
    getProductFromFile(cb);
  }
};
