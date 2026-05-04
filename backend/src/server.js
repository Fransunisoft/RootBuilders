import app from "./app.js";
import config from "./config/index.js";

const port = config.port;

const server = app.listen(port, () => {
  console.log(`${config.appName} listening on port ${port} (${config.env})`);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled rejection:", err);
  server.close(() => process.exit(1));
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught exception:", err);
  process.exit(1);
});
