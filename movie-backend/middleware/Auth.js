const jwt = require("jsonwebtoken")

function Auth(req, res, next) {
    const headers = req.headers;
    const { authorization: token } = headers
    console.log("token", token)
    console.log("--------auth---------");

    try {
        const tokenVerification = jwt.verify(token, 'soni')
        console.log("tokenVerification", tokenVerification)
    } catch (err) {
        return res.json({
            success: false,
            error: "token is not"
        })
    }

    next();
}

module.exports = Auth;