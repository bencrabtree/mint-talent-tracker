import Cookies from 'js-cookie';

export const getSession = () => {
    console.log(Cookies.get())
    const jwt = Cookies.get('jwt');
    console.log('getting session', jwt)
    let session;
    try {
        if (jwt) {
            const base64Url = jwt.split('.')[1]
            const base64 = base64Url.replace('-', '+').replace('_', '/')
            session = JSON.parse(window.atob(base64))
        }
    } catch (error) {
        console.log('Getting JWT', error)
    }
    return session;
}

// export const setSession = (jwt) => {
//     console.log(jwt)
//     try {
//         Cookies.set('token', jwt);
//     } catch (error) {
//         console.log('Setting JWT Session', error)
//     }
//     return jwt;
// }

export const logOut = () => {
    Cookies.remove('jwt')
}