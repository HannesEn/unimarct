const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const passportSetup = require("./passport");
const authRoute = require("./routes/auth");
const cors = require("cors");
const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["hege"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http:/localhost:300",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen("3001", () => {
  console.log("Listening to port 3001");
});
