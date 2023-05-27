const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3001;
app.use(express.urlencoded());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Server is running...");
});
let n1;
let n2;
function validateInputs(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return { status: "error", message: "Invalid data types" };
  }
  if (num1 < -1000000 || num2 < -1000000 || num1 > 1000000 || num2 > 1000000) {
    return { status: "error", message: "Overflow/Underflow" };
  }
  return null;
}
app.post("/add", (req, res) => {
  n1 = req.body.num1;
  n2 = req.body.num2;
  const error = validateInputs(n1, n2);
  if (error) {
    res.status(400).json(error);
    return;
  }
  const sum = n1 + n2;
  if (sum < -1000000 || sum > 1000000) {
    res
      .status(400)
      .json({ status: "error", message: "Overflow/Underflow", sum: sum });
  } else {
    res.status(200).json({
      status: "success",
      message: "the sum of given two numbers",
      sum: sum,
    });
  }
});

app.post("/sub", (req, res) => {
  n1 = req.body.num1;
  n2 = req.body.num2;
  const error = validateInputs(n1, n2);
  if (error) {
    res.status(400).json(error);
    return;
  }
  const difference = n1 - n2;
  if (difference < -1000000 || difference > 1000000) {
    res.status(400).json({
      status: "error",
      message: "Overflow/Underflow",
      difference: difference,
    });
    return;
  }
  res.status(200).json({
    status: "success",
    message: "the difference of given two numbers",
    difference: difference,
  });
});

app.post("/multiply", (req, res) => {
  n1 = req.body.num1;
  n2 = req.body.num2;
  const error = validateInputs(n1, n2);
  if (error) {
    res.status(400).json(error);
    return;
  }
  const result = n1 * n2;
  if (result < -1000000 || result > 1000000) {
    res
      .status(400)
      .json({ status: "error", message: "Overflow/Underflow", result: result });
    return;
  }
  res.status(200).json({
    status: "success",
    message: "The product of given numbers",
    result: result,
  });
});

app.post("/divide", (req, res) => {
  n1 = req.body.num1;
  n2 = req.body.num2;
  const error = validateInputs(n1, n2);
  if (error) {
    res.status(400).json(error);
    return;
  }
  if (n2 === 0) {
    res.status(400).json({ status: "error", message: "Cannot divide by zero" });
    return;
  }
  const result = n1 / n2;
  if (result < -1000000 || result > 1000000) {
    res
      .status(400)
      .json({ status: "error", message: "Overflow/Underflow", result: result });
    return;
  }
  res.status(200).json({
    status: "success",
    message: "The division of given numbers",
    result: result,
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
module.exports = app;
