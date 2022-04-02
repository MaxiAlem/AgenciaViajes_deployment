// const express = require('express');
import express  from "express";
import router from "./routes/index.js";
import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});

const app = express();

//conectar a la DB
db.authenticate()
    .then(()=> console.log('DB conectada!!'))
    .catch(error=> console.log(error))



//habilitar PUG
app.set('view engine', 'pug')

//Definir variable para año actual
app.use((req, res, next)=>{
    const year = new Date();
    
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes"

    next();
})
//agregra body Parser para leer los datos del form 
app.use(express.urlencoded({extended:true}));


//definir carpeta publica
app.use(express.static('public'));
app.use('/viajes' ,express.static('public'))

//add Router
app.use('/', router)


//definir puerto 
const host = process.env.HOST  || '0.0.0.0';
const port = process.env.PORT  || 3000;
app.listen(port , host, ()=>{
    console.log(' el server esta funcionando piola')
})