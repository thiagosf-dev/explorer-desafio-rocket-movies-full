"use strict";

require("express-async-errors");

const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const migrationsRun = require("./database/sqlite/migrations");
const uploadConfig = require("./configs/upload.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));
app.use(routes);

const PORT = 3334;

migrationsRun();

// app.get("/", (request, response) => {
//   response.status(200).send({ status: "API ok" });
// });

// ROUTE PARAMS (:)
// QUERY PARAMS (?)
// BODY PARAMS ({})

/**
 * index - GET para listar usuários registrados
 * show - GET para exibir um registro específico
 * create - POST para criar registro
 * update - PUT para criar registro
 * delete - DELETE para criar registro
 */

// app.get("/id/:id", (request, response) => {
//   response.status(200).send({
//     status: "API ok",
//     id: request.params.id,
//   });
// });

// app.get("/user/:id", (request, response) => {
//   response.status(200).send({
//     status: "API ok",
//     id: request.params.id,
//     limit: request.query.limit,
//   });
// });

// app.use((error, _request, response, _next) => {
//   console.error(`⛔`, error);

//   if (error instanceof AppError) {
//     return response.status(error.statusCode).json({
//       status: "error",
//       message: error.message,
//       statusCode: error.statusCode,
//     });
//   }

//   return response.status(500).json({
//     status: "error",
//     message: "Internal server error",
//     messageLog: error.message,
//     statusCode: error.statusCode,
//   });
// });

app.listen(PORT, () =>
  console.info(`Server running in http://localhost:${PORT}`)
);
