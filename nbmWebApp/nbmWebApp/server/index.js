
const cors = require("cors");
const PgPromise = require("pg-promise");
const express = require("express");
const fs = require("fs");
require("dotenv").config();
const { default: axios } = require("axios");



const API = require("./api");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cors());

const DATABASE_URL = process.env.DATABASE_URL;
const pgp = PgPromise({});

const config = {
    connectionString:
       

        process.env.DATABASE_URL || "postgresql://bonny:pg123@localhost:5432/nbm_db",

};

if (process.env.NODE_ENV == 'PRODUCTION') {
    config.ssl = { rejectUnauthorized: false }
}

const db = pgp(config);

API(app, db);

const PORT = process.env.PORT || 2000;

app.listen(PORT, function () {
    console.log(`App started on port http://localhost:${PORT}`);
});

