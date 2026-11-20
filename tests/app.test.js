const test = require("node:test");
const assert = require("node:assert");
const { telOp } = require("../app.js");

test("teller gaat van 0 naar 1", () => assert.strictEqual(telOp(0), 1));
test("teller gaat van 5 naar 6", () => assert.strictEqual(telOp(5), 6));
