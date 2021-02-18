const jwt = require('jsonwebtoken');

export const generateToken = (res, user) => {
    const expiration = process.env.NODE_ENV === 'none' ? 86400000 : 604800000;
    const token = jwt.sign({ email: user.email }, 'my-secret-key', {
        expiresIn: process.env.NODE_ENV === 'none' ? '1d' : '7d',
    });

    return res.cookie('jwt', token, {
        expires: new Date(Date.now() + expiration)
    });
}