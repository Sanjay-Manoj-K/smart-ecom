const express = require("express");
const app = express();
app.use(express.json());

const handler = require("./handler");

app.post("/dev/apply-discount", async (req, res) => {
  const result = await handler.apply({ body: JSON.stringify(req.body) });
  res.status(result.statusCode).json(JSON.parse(result.body));
});

app.listen(3000, () => console.log("Discount Function running on port 3000"));
