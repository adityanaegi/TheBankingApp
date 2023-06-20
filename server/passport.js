import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";


const GOOGLE_CLIENT_ID ="120904456855-23ugf44v7p63gutdr6kup3hgpuq4h530.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, done) {
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

export default passport
