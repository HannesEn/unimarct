const passport = require("passport");
const GOOGLE_CLIENT_ID =
  "135744594815-chomnc8nm85b1hsf4bhguae5nvjef1qc.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
