const express = require("express");

const router = express.Router();

function validateEchoPayload(body) {
  const errors = [];

  if (!body || typeof body !== "object") {
    errors.push("Request body is required.");
    return errors;
  }

  if (!body.message || typeof body.message !== "string") {
    errors.push("message field is required.");
  }

  if (body.message && body.message.length < 3) {
    errors.push("message must be at least 3 characters.");
  }

  return errors;
}

router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "checkpoint2-api",
    time: new Date().toISOString(),
  });
});

router.get("/info", (req, res) => {
  res.json({
    project: "CSP451 CheckPoint 2",
    owner: "mudincer",
    routes: ["/api/health", "/api/info", "/api/echo"],
  });
});

router.post("/echo", (req, res) => {
  const errors = validateEchoPayload(req.body);

  if (errors.length > 0) {
    return res.status(400).json({
      ok: false,
      errors,
    });
  }

  return res.status(201).json({
    ok: true,
    received: req.body.message,
    length: req.body.message.length,
  });
});

module.exports = { router, validateEchoPayload };