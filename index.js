const express = require("express");
const app = express();

function loggingMiddleware(req, res, next) {
  const startTime = Date.now();

  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

  next();

  const duration = Date.now() - startTime;
  console.log(
    `[${new Date().toISOString()}] Request processed in ${duration}ms`
  );
}

app.use(loggingMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
