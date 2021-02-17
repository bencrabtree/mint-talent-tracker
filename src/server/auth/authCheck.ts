export async function isAuth(req, res, next) {
    if (req.isAuthenticated() || req.url.startsWith('/auth') || req.originalUrl.startsWith('/js/app.js')) {
        return next();
    } else {
        res.redirect('/auth/signin');
    }
}