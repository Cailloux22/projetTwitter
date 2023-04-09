const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
var fetchUrl = require("fetch").fetchUrl;
app.use(cors());
const server = http.createServer(app);
server.listen(3001, () => {
  console.log("listening on :3001");
});

app.get("/api/v1/getAccountIdByName", async (req, res) => {
  console.log("getAccountIdByName");
  fetchUrl(
    "https://api.twitter.com/2/users/by/username/elonmusk",
    {
      headers: {
        authorization:
          "Bearer AAAAAAAAAAAAAAAAAAAAAHMflgEAAAAALPWElwpK3pSg8lAJJAHz4P%2Fz4Pk%3DYAzTthQCsIbnMMTCu7bYMeRcrMZizTAuAgfG5KLJci4l5BwVUq",
      },
    },
    (err, meta, body) => {
      if (err) {
        console.log("error", err);
        return false;
      }
      res.json({
        status: meta.status,
        apiTwitter: JSON.parse(body.toString()),
      });
      console.log("body", body.toString());
      console.log("meta", meta);
    }
  );
});

app.get("/api/v1/getAccountById/:id", async (req, res) => {
  console.log("getAccountById", req.params.id);
  fetchUrl(
    "https://api.twitter.com/2/users/" +
      req.params.id +
      "?user.fields=profile_image_url",
    {
      headers: {
        authorization:
          "Bearer AAAAAAAAAAAAAAAAAAAAAHMflgEAAAAALPWElwpK3pSg8lAJJAHz4P%2Fz4Pk%3DYAzTthQCsIbnMMTCu7bYMeRcrMZizTAuAgfG5KLJci4l5BwVUq",
      },
    },
    (err, meta, body) => {
      if (err) {
        console.log("error", err);
        return false;
      }
      res.json({
        status: meta.status,
        apiTwitter: JSON.parse(body.toString()),
      });
      console.log("body", body.toString());
      console.log("meta", meta);
    }
  );
});

// https://api.twitter.com/2/users/:id/tweets

app.get("/api/v1/getTimelineByUserId/:id", async (req, res) => {
  console.log("getAccountById", req.params.id);
  fetchUrl(
    "https://api.twitter.com/2/users/" + req.params.id + "/tweets",
    {
      headers: {
        authorization:
          "Bearer AAAAAAAAAAAAAAAAAAAAAHMflgEAAAAALPWElwpK3pSg8lAJJAHz4P%2Fz4Pk%3DYAzTthQCsIbnMMTCu7bYMeRcrMZizTAuAgfG5KLJci4l5BwVUq",
      },
    },
    (err, meta, body) => {
      if (err) {
        console.log("error", err);
        return false;
      }
      res.json({
        status: meta.status,
        apiTwitter: JSON.parse(body.toString()),
      });
      console.log("body", body.toString());
      console.log("meta", meta);
    }
  );
});
