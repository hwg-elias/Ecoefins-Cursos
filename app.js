// IMPORTAÇÃO
const express = require('express')
const path = require('path')
const ejs = require('ejs');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cons = require('consolidate')
require('dotenv').config()

// IMPORTAÇÃO DE ROTA
const UserRoutes = require('./Routes/User')

// Dotenv
const PORT = process.env.PORT
const DB_KEY = process.env.DB_KEY

// Configurando Ferramentas
const app = express()
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

// Configurando Banco de Dados
mongoose.connect(DB_KEY)
const db = mongoose.connection
db.once('error', () => { console.log(`DataBase wasn't load!`) })
db.once('open', () => { console.log(`DataBase loaded!`) })

// Lendo Arquivos
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/Public'));

// Rotas
app.use('/', UserRoutes)

// Server Listener (Não sei como traduzir essa bomba)
app.listen(PORT, () => {
    console.log(`Server it's been listen at port:${PORT}.`)
})