// src/index.ts
var import_node_server = require("@hono/node-server");
var import_hono = require("hono");
var app = new import_hono.Hono();
app.get("/", (c) => c.text("Hello Hono!"));
(0, import_node_server.serve)(app);
