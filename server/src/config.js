const NODE_ENV = process.env.NODE_ENV || "development";

const ENV_VARIABLES = {
  production: {
    ENV: process.env.NODE_ENV,
  },
  development: {
    ENV: "development",
  },
};

module.exports = ENV_VARIABLES[NODE_ENV];
