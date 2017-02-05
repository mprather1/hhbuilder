var config = {};

config.postgresURI = {
  development: "postgres://postgres:postgres@localhost:5432/hhbuilder_development",
  production: process.env.POSTGRES_URI,
};

module.exports = config;