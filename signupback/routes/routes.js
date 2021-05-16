const express= require('express');
const router= express.Router();
const signuptemplatecopy= require('../models/signupmodel')
const bcrypt= require('bcrypt')

router.post('/signup', async(request, response) => {


    const saltPassword=await bcrypt.genSalt(10)
    const securepassword=await bcrypt.hash(request.body.password,saltPassword)

    const signupuser = new signuptemplatecopy({
        fullName: request.body.fullName,
        username: request.body.username,
        email: request.body.email,
        password: securepassword
    })
    signupuser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})
module.exports=router