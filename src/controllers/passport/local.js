import passport from "passport";
import passportLocal from "passport-local";
import passportJWT from "passport-jwt";

import User from "./../../models/User";

const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy   = passportJWT.Strategy;
const localStragery = passportLocal.Strategy;




let initPassportLocal = () => {
  passport.use(
    new localStragery(
      {
        usernameField: "username",
        passwordField: "password",
      },
      async (username, password, done) => {
        try {
          let user = await User.findOne({username, password}).exec();
          if (!user) {
            return done(null, false);
          }
          return done(null, user);
        } catch (error) {
          console.log(error);
          done(error, null)
        }
      }
    ),
  );

  passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET_KEY_JWT
      },
      async (user, done) => {
        try {
          let user = await User.findById(user._id).exec();
          return done(null, user);
        } catch (error) {
          return done(error, null);
        }
      }
    ))

}


module.exports = initPassportLocal;