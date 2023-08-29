exports.connect = () => {
  const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "root",
      password: "eeAd149520!@Q#",
      database: "ecommerce",
    },
  });

  return knex;
};
