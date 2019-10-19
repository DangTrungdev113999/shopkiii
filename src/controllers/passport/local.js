import passport from "passport";
import passportLocal from "passport-local";
import User from "./../../models/User";

let localStragery = passportLocal.Strategy;

let initPassportLocal = () => {
  passport.use(
    new localStragery(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      async (req, username, password, done) => {
        try {
          let user = await User.findOne({username, password}).exec();
          if (!user) {
            return done(null, false)
          }
          return done(null, user);
        } catch (error) {
          console.log(user);
          done(error, null)
        }
      }
    ),

  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser( async (id, done) => {
    try {
      let user = await User.findById(id).exec();
      done(null, user);
    } catch (error) {
      return done(error, null)
    }
  })
}


module.exports = initPassportLocal;