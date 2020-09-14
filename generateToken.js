const jwt = require("jsonwebtoken");

const payload = {
  "https://hasura.io/jwt/claims": {
    "x-hasura-allowed-roles": ["crm"],
    "x-hasura-default-role": "crm",
  },
};

const token = jwt.sign(payload, process.env.JWT_KEY, {
  expiresIn: "7",
  issuer: "creatable-script-johnwook",
});

console.log(token);
