const fs = require('fs');
const path = require('path');


const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'userCreated.json'
);

const getDetailsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    };
  });
};

module.exports = class UserDetail {
  constructor(id, name, email, phoneNumber) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
  };

  save() {
    getDetailsFromFile(details => {
      if (this.id) {
        const existingDetailIndex = details.findIndex(
          detail => detail.id === this.id
        );
        const updatedDetails = [...details];
        updatedDetails[existingDetailIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedDetails), err => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        details.push(this);
        fs.writeFile(p, JSON.stringify(details), err => {
          console.log(err);
        });
      };
    });
  };
};