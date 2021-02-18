const router = require('express').Router();
import { userProfile, clearUsersession } from '../auth/passport';
import { generateToken } from '../auth/util';

export default function(googleAuth) {
    router.get('/signin', 
        (req, res, next) => {
            try {
                console.log('singing in')
                googleAuth.authenticate('google', { scope : ['profile', 'email'] })(req, res, next);
            } catch (error) {
                console.log(error)
            }
        }
    );

    router.get('/callback', 
        (req, res, next) => {
            try {
                googleAuth.authenticate('google', { failureRedirect: '/auth/error' }, async (err, user, info) => {
                    console.log('callbacking', user);

                    // generate a signed json web token with the contents of user object and return it in the response
                    await generateToken(res, user);
                    return res.redirect('/home')
                })(req, res, next);

            } catch (error) {
                console.log('callback error', error)
            }
        }
    );

    router.get('/signout',
        (req, res) => {
            console.log('Signing Out');
            clearUsersession();
            req.logout();
            res.redirect("/auth/isLoggedOut");
        }
    );

    return router;
}