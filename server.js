const express = require('express');
const helmet = require('helmet');
const server = express();
server.use(helmet());

const actions = require("./actions")
const projects = require("./projects")

server.use(express.json())


server.use("/api/actions", actions)
server.use("/api/projects", projects)

module.exports = server;