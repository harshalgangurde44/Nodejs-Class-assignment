const express = require("express");
const app = express();
const bcript = require("bcryptjs");
const bluePrint = require("./model/userModel");
const mongoose = require("mongoose");

app.listen(3000, () => {
  console.log("Server is running.");
});

mongoose
  .connect("mongodb://localhost/db1")
  .then(() => {
    console.log("mongoose connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.get("/blog", (req, res) => {
  let page = req.query.page;
  let search = req.query.search;
  if (page === undefined || search === undefined) {
    res.send("undefined data");
  } else {
    res.send(`{
            status:success,
            result:[
            {
            id: xyz,
            topic:react,
            description:This api will used be for fetching the blog from database according to query parameters,
            posted_at: 12,
            posted_by:. Harshal.
            }
            `);
  }
});
app.post("/blog", (req, res) => {
  bluePrint
    .create({
      topic: req.body.topic,
      description: req.body.description,
      posted_at: req.body.posted_at,
      posted_by: req.body.posted_by,
    })
    .then((data) => {
      res.send(`{
            status:success,
            result:[
            {
            id: ${data.id},
            topic:${data.topic} is topic,
            description:${data.description} This api is used for storing blog in database,
            posted_at: ${data.posted_at} ,
            posted_by:. ${data.posted_by}.
            }
            `);
    });
});
app.put("/put/:id", (req, res) => {
  let id = req.params.id;
  bluePrint.findByIdAndUpdate(id, req.body).then((data) => {
    if (data) {
      res.send(`{
              status: "success",
              result: {
                id: ${data.id},
                topic: "${data.topic}",
                description: "${data.description} This api is used for updating blog",
                posted_at: ${data.posted_at},
                posted_by: "${data.posted_by}"
              }
            }`);
    } else {
      res.status(404).send("Blog post not found");
    }
  });
});
app.delete("/delete/:id", (req, res) => {
  let id = req.params.id;
  bluePrint.findByIdAndDelete(id).then((data) => {
    if (data) {
      res.send(`The data with id: ${id} been deleted`);
    } else {
      res.status(404).send("Blog post not found");
    }
  });
});
