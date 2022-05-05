const UserInfo = require('../Models/UserLoginModel.js')
const jwt = require('jsonwebtoken')
const auth = require('../Controller/Authentication')
const res = require('express/lib/response')

JWT_SECRET = process.env.JWT_SECRET

const AulaNr10 = (req, res) => {
    res.status(200)
    res.render('Aula Nr 10/Aula.ejs')
}

const AulaNr35 = (req, res) => {
    res.status(200)
    res.render('Aula Nr 35/Aula.ejs')

}

const Aula1Socorros = (req, res) => {
    res.status(200)
    res.render('Aula 1 Socorro/Aula.ejs')
}

const Home = (req, res) => {
    let name = req.cookies.name
    let dateNas = req.cookies.dateNas
    let dateCad = req.cookies.dateCad
    let matricula = req.cookies.matricula
    res.status(200)
    res.render('Home', { name, dateNas, dateCad, matricula })

}
const LoginPage = (req, res) => {
    let token = req.cookies.token
    let name = req.cookies.name
    let dateNas = req.cookies.dateNas
    let dateCad = req.cookies.dateCad
    let matricula = req.cookies.matricula
    if (token) {
        auth
        res.render('Home', { name, dateNas, dateCad, matricula })
    } else {
        res.status(200)
        res.render('LoginPage', { message: '' })
    }
}

const LoginUser = async (req, res) => {
    let username = req.body.username.trim()
    let password = req.body.pass.trim()

    try {
        let userFind = await UserInfo.findOne({ password: password, username: username })
        let userData = await UserInfo.findOne({ username: username })
        if (userFind != null) {
            // CREATING TOKEN
            let token = jwt.sign({ userPassword: password }, JWT_SECRET)



            // TOKEN AS A COOKIE
            res.cookie('username', username, { maxAge: 900000, httpOnly: true })
            res.cookie('dateNas', userData.dateNas, { maxAge: 900000, httpOnly: true })
            res.cookie('dateCad', userData.dateCad, { maxAge: 900000, httpOnly: true })
            res.cookie('matricula', userData.matricula, { maxAge: 900000, httpOnly: true })
            res.cookie('name', userData.nameF, { maxAge: 900000, httpOnly: true })
            res.cookie('token', token, { maxAge: 900000, httpOnly: true })

            let name = req.cookies.name
            let dateNas = req.cookies.dateNas
            let dateCad = req.cookies.dateCad
            let matricula = req.cookies.matricula

            // STATUS AND RENDER

            res.redirect('/', 200, { name, dateNas, dateCad, matricula })
        } else {
            res.status(400).render('LoginPage.ejs', { message: 'Login ou Senha incorreta.' })
        }

    } catch (err) {
        res.status(400).render('LoginPage.ejs', { message: 'Login ou Senha incorreta.' })

    }
}

const LogoutUser = (req, res) => {
    res.clearCookie('dateNas')
    res.clearCookie('username')
    res.clearCookie('dateCad')
    res.clearCookie('matricula')
    res.clearCookie('name')
    res.clearCookie('token')
    res.status(200)
    res.redirect('/')
}


module.exports = { LoginPage, LoginUser, LogoutUser, Home, Aula1Socorros, AulaNr35, AulaNr10 }