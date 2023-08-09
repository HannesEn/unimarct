const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "https://localhost:3000/";
const FAIL_REDIRECT = "/login/failed";

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failed to authenticate",
  });
});
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfully authenticated",
      user: req.user,
      cookies: req.cookies,
    });
  }
});

router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect(CLIENT_URL);
});
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: FAIL_REDIRECT,
  })
);

module.exports = router;
