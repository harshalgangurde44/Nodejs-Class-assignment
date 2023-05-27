const bcrypt = require("bcrypt");
const password = "harshalk";
const salt = 10;
const hash = "harshalk";
bcrypt.genSalt(salt, (saltErr, saltValue) => {
  if (saltErr) {
    console.log(err);
  } else {
    bcrypt.hash(hash, saltValue, (hashErr, hashValue) => {
      bcrypt.compare(hash, hashValue, (err, val) => {
        console.log(val);
      });
    });
  }
});
