require("dotenv").config({ path: "./config.env" });
const app = require("./app");
const mongoose = require("mongoose");

//// Uncaught Exception Safety Net
process.on("uncaughtException", (err) => {
  console.log(`❗Uncaught Exception! Shutting down!`);
  console.log(`❌ ${err}`);
  process.exit(1);
});

//// Connect to Database
const db = process.env.DATABASE_URL.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose.connect(db).then(console.log("✅ Connected to database"));

//// Launch Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`✅ Listening on port... ${port}`));

//// Unhandled Rejection Safety Net
process.on("unhandledRejection", (err) => {
  console.log(`❗Unhandled Rejection! Shutting down!`);
  console.log(`❌ ${err}`);
  server.close(() => {
    process.exit(1);
  });
});
