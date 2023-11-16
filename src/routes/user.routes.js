const express =  require('express');
const { Model } = require('sequelize');
const authRouter = express.Router();
const {models} = require('../libs/sequelize');

//RUTAS

authRouter.route ('/signup')
.get((req, res) =>{
    res.render('auth/signup');
})
.post(async(req, res)=>{
    //Crear usuario en BD
    const user = await models.user.create(req.body);
    console.log(user);

    res.redirect('/pets');
});

module.exports = authRouter;
