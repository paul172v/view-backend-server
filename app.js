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
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  next();
});

//// ENABLE JSON
app.use(express.json({ limit: "10kb" }));

// //// ROUTERS
const mainMenuRouter = require("./routes/mainMenuRoutes");
const kidsMenuRouter = require("./routes/kidsMenuRoutes");
const drinksMenuRouter = require("./routes/drinksMenuRoutes");

// //// ROUTES
app.use("/api/v1/main-menu", mainMenuRouter);
app.use("/api/v1/kids-menu", kidsMenuRouter);
app.use("/api/v1/drinks-menu", drinksMenuRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

//// GLOBAL ERROR HANDLER MIDDLEWARE
app.use(globalErrorHandler);

module.exports = app;
