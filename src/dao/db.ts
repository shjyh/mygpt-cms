import knex from "knex";

const db = knex({
    client: "pg",
    connection: import.meta.env.DB_CONNECTION_URL,
    searchPath: ["public"],
    debug: process.env.NODE_ENV === "development"
})

export default db;