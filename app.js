const express = require("express");
const app = express();
const morgan = require("morgan");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

//// MORGAN ENABLED IN DEVELOPMENT
process.env.NODE_ENV === "development" && app.use(morgan("dev"));

//// CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    // "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    "*"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE");

  next();
});

//// ENABLE JSON
app.use(express.json({ limit: "10kb" }));

// //// ROUTERS
const mainMenuRouter = require("./routes/mainMenuRoutes");
// const kidsMenuRouter = require("./routes/kidMenuRouter");
// const dessertMenuRouter = require("./routes/dessertMenuRoutes");

// //// ROUTES
app.use("/api/v1/main-menu", mainMenuRouter);
// app.use("/api/v1/kids-menu", kidsMenuRouter);
// app.use("/api/v1/dessert-menu", dessertMenuRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

//// GLOBAL ERROR HANDLER MIDDLEWARE
app.use(globalErrorHandler);

module.exports = app;