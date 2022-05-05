const jwt = require('jsonwebtoken')
// ===========================================

const JWT_SECRET = process.env.JWT_SECRET

const authentication = (req,res,next) => {
    let token = req.cookies.token

    if(token){

        try {
            let tokenVerified = jwt.verify(token,JWT_SECRET)
            res.status(200)
            next()
        } catch (error) {
            res.status(401)
        res.render('LoginPage', { message: ""})
        }
    }else{
        res.status(401)
        res.render('LoginPage', { message: ""})
    }
}

module.exports = authentication