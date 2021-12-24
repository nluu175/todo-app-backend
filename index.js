// user-defined
const app = require("./app");
const logger = require("./Utils/logger");
const config = require("./Utils/config");

// libs
const http = require("http");

// config
const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server is currently running on port ${config.PORT}`);
});
