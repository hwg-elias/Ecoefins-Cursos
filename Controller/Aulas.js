const UserInfo = require('../Models/UserLoginModel.js')
const jwt = require('jsonwebtoken')
const auth = require('../Controller/Authentication')
const res = require('express/lib/response')

JWT_SECRET = process.env.JWT_SECRET

// NR 35
const Aula1Nr35 = (req, res) => {
    res.render('Aula Nr 35/aula1.ejs')
}
const Aula2Nr35 = (req, res) => {
    res.render('Aula Nr 35/aula2.ejs')
}
const Aula3Nr35 = (req, res) => {
    res.render('Aula Nr 35/aula3.ejs')
}
const Aula4Nr35 = (req, res) => {
    res.render('Aula Nr 35/aula4.ejs')
}
const Aula5Nr35 = (req, res) => {
    res.render('Aula Nr 35/aula5.ejs')
}
const Aula6Nr35 = (req, res) => {
    res.render('Aula Nr 35/aula6.ejs')
}
const Aula7Nr35 = (req, res) => {
    res.render('Aula Nr 35/aula7.ejs')
}
const Aula8Nr35 = (req, res) => {
    res.render('Aula Nr 35/aula8.ejs')
}
const Aula9Nr35 = (req, res) => {
    res.render('Aula Nr 35/aula9.ejs')
}
const Aula10Nr35 = (req, res) => {
    res.render('Aula Nr 35/aula10.ejs')
}
const Aula11Nr35 = (req, res) => {
    res.render('Aula Nr 35/aula11.ejs')
}
const Aula12Nr35 = (req, res) => {
    res.render('Aula Nr 35/aula12.ejs')
}
const Aula13Nr35 = (req, res) => {
    res.render('Aula Nr 35/aula13.ejs')
}
const Aula14Nr35 = (req, res) => {
    res.render('Aula Nr 35/aula14.ejs')
}
const Aula15Nr35 = (req, res) => {
    res.render('Aula Nr 35/aula15.ejs')
}


// PRIMEIROS SOCORROS
const PsAula1 = (req, res) => {
    res.render('Aula 1 Socorro/aula1.ejs')
}
const PsAula2 = (req, res) => {
    res.render('Aula 1 Socorro/aula2.ejs')
}
const PsAula3 = (req, res) => {
    res.render('Aula 1 Socorro/aula3.ejs')
}
const PsAula4 = (req, res) => {
    res.render('Aula 1 Socorro/aula4.ejs')
}
const PsAula5 = (req, res) => {
    res.render('Aula 1 Socorro/aula5.ejs')
}
const PsAula6 = (req, res) => {
    res.render('Aula 1 Socorro/aula6.ejs')
}
const PsAula7 = (req, res) => {
    res.render('Aula 1 Socorro/aula7.ejs')
}
const PsAula8 = (req, res) => {
    res.render('Aula 1 Socorro/aula8.ejs')
}
const PsAula9 = (req, res) => {
    res.render('Aula 1 Socorro/aula9.ejs')
}
const PsAula10 = (req, res) => {
    res.render('Aula 1 Socorro/aula10.ejs')
}
const PsAula11 = (req, res) => {
    res.render('Aula 1 Socorro/aula11.ejs')
}
const PsAula12 = (req, res) => {
    res.render('Aula 1 Socorro/aula12.ejs')
}
const PsAula13 = (req, res) => {
    res.render('Aula 1 Socorro/aula13.ejs')
}
const PsAula14 = (req, res) => {
    res.render('Aula 1 Socorro/aula14.ejs')
}
const PsAula15 = (req, res) => {
    res.render('Aula 1 Socorro/aula15.ejs')
}
const PsAula16 = (req, res) => {
    res.render('Aula 1 Socorro/aula16.ejs')
}
const PsAula17 = (req, res) => {
    res.render('Aula 1 Socorro/aula17.ejs')
}
const PsAula18 = (req, res) => {
    res.render('Aula 1 Socorro/aula18.ejs')
}
const PsAula19 = (req, res) => {
    res.render('Aula 1 Socorro/aula19.ejs')
}
const PsAula20 = (req, res) => {
    res.render('Aula 1 Socorro/aula20.ejs')
}
const PsAula21 = (req, res) => {
    res.render('Aula 1 Socorro/aula21.ejs')
}
const PsAula22 = (req, res) => {
    res.render('Aula 1 Socorro/aula22.ejs')
}
const PsAula23 = (req, res) => {
    res.render('Aula 1 Socorro/aula23.ejs')
}
const PsAula24 = (req, res) => {
    res.render('Aula 1 Socorro/aula24.ejs')
}


// NR 10
const Aula1Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula1.ejs')
}
const Aula2Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula2.ejs')
}
const Aula3Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula3.ejs')
}
const Aula4Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula4.ejs')
}
const Aula5Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula5.ejs')
}
const Aula6Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula6.ejs')
}
const Aula7Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula7.ejs')
}
const Aula8Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula8.ejs')
}
const Aula9Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula9.ejs')
}
const Aula10Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula10.ejs')
}
const Aula11Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula11.ejs')
}
const Aula12Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula12.ejs')
}
const Aula13Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula13.ejs')
}
const Aula14Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula14.ejs')
}
const Aula15Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula15.ejs')
}
const Aula16Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula16.ejs')
}
const Aula17Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula17.ejs')
}
const Aula18Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula18.ejs')
}
const Aula19Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula19.ejs')
}
const Aula20Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula20.ejs')
}
const Aula21Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula21.ejs')
}
const Aula22Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula22.ejs')
}
const Aula23Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula23.ejs')
}
const Aula24Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula24.ejs')
}
const Aula25Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula25.ejs')
}
const Aula26Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula26.ejs')
}
const Aula27Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula27.ejs')
}
const Aula28Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula28.ejs')
}
const Aula29Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula29.ejs')
}
const Aula30Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula30.ejs')
}
const Aula31Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula31.ejs')
}
const Aula32Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula32.ejs')
}
const Aula33Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula33.ejs')
}
const Aula34Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula34.ejs')
}
const Aula35Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula35.ejs')
}
const Aula36Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula36.ejs')
}
const Aula37Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula37.ejs')
}
const Aula38Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula38.ejs')
}
const Aula39Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula39.ejs')
}
const Aula40Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula40.ejs')
}
const Aula41Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula41.ejs')
}
const Aula42Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula42.ejs')
}
const Aula43Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula43.ejs')
}
const Aula44Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula44.ejs')
}
const Aula45Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula45.ejs')
}
const Aula46Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula46.ejs')
}
const Aula47Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula47.ejs')
}
const Aula48Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula48.ejs')
}
const Aula49Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula49.ejs')
}
const Aula50Nr10 = (req, res) => {
    res.render('Aula Nr 10/aula50.ejs')
}


module.exports = {
    PsAula1, PsAula2, PsAula3, PsAula4, PsAula5, PsAula6, PsAula7,
    PsAula8, PsAula9, PsAula10, PsAula11, PsAula12, PsAula13, PsAula14,
    PsAula15, PsAula16, PsAula17, PsAula18, PsAula19, PsAula20, PsAula21,
    PsAula22, PsAula23, PsAula24,
    Aula1Nr35, Aula2Nr35, Aula3Nr35, Aula4Nr35, Aula5Nr35, Aula6Nr35, Aula7Nr35,
    Aula8Nr35, Aula9Nr35, Aula10Nr35, Aula11Nr35, Aula12Nr35, Aula13Nr35, Aula14Nr35, Aula15Nr35,
    Aula1Nr10, Aula2Nr10, Aula3Nr10, Aula4Nr10, Aula5Nr10, Aula6Nr10, Aula7Nr10, Aula8Nr10, Aula9Nr10, Aula10Nr10,
    Aula11Nr10, Aula12Nr10, Aula13Nr10, Aula14Nr10, Aula15Nr10, Aula16Nr10, Aula17Nr10, Aula18Nr10, Aula19Nr10, Aula20Nr10,
    Aula21Nr10, Aula22Nr10, Aula23Nr10, Aula24Nr10, Aula25Nr10, Aula26Nr10, Aula27Nr10, Aula28Nr10, Aula29Nr10, Aula30Nr10,
    Aula31Nr10, Aula32Nr10, Aula33Nr10, Aula34Nr10, Aula35Nr10, Aula36Nr10, Aula37Nr10, Aula38Nr10, Aula39Nr10, Aula40Nr10,
    Aula41Nr10, Aula42Nr10, Aula43Nr10, Aula44Nr10, Aula45Nr10, Aula46Nr10, Aula47Nr10, Aula48Nr10, Aula49Nr10, Aula50Nr10
}