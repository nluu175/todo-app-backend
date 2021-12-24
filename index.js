// user-defined
const app = require("./app");
const logger = require("./utils/logger");
const config = require("./utils/config");

// libs
const http = require("http");

// config
const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server is currently running on port ${config.PORT}`);
});
