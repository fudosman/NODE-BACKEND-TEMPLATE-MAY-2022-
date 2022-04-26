const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

module.exports = (app) => {
  app.use(cors());
  app.use(helmet());
  app.use(xss());
  app.use(morgan("dev"));
  app.set('trust proxy', 1);
  app.use(
    rateLimiter({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    })
  );
  app.use(express.json());
  app.use(express.static("/public"));
  app.use(express.urlencoded({
    extended: false
  }));
  app.use("/uploads", express.static("/uploads"));

  return app;
};