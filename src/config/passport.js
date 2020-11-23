import passport from 'passport'
import passportjwt from 'passport-jwt'
import passportlocal from 'passport-local'
import bcrypt from 'bcryptjs'

const JWTStrategy = passportjwt.Strategy
const localStrategy = passportlocal.Strategy


const {ExtractJwt} = passportjwt
import User from '../models/user.js'

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: 'wefwfewfasdf2924jfrijioesdfwafjkapiojfdafgadgdfasgagggadsfgsdfgsdfge3rg34g3gwqgwsbewgewrgegegeg'
}, async (payload, done, next) => {
    try {
        //find specific token
        const user = await User.findById(payload.sub)

        //user is not exits
        if (!user) {
            console.log('user is not exits');
            return done(null, false)
        }
        //Otherwise, return user
        done(null, user)

    } catch (err) {
        done(err, false)
    }
}))

//local user strategy
passport.use(new localStrategy({
    usernameField: 'username'
}, async (username, password, done) => {
    try {
        //find specific token
        const user = await User.findOne({
                username: username
        }).then(async (aUser) => {
            const isMatch = await bcrypt.compare(password, aUser.password);

            if (!isMatch) {
                return done(null, false)
            }

            done(null, aUser)
        })
        //user is not exits
        if (!user) {
            return done(null, false)
        }
        //Otherwise, Check password is correct
    } catch (err) {
        done(err, false)
    }
}))

export default passport

