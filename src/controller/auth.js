const getAuth = (req, res, next) => {
    res.status(200).send('auth');
}

const signUp = (req, res, next) => {
    res.status(200).send('sign up');
}

const logIn = (req, res, next) => {
    res.status(200).send('log in');
}

module.exports = {
    getAuth,
    signUp,
    logIn
}