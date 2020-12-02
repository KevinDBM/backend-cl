const getUserByEmail = require('../../../DAO/user/getUserByEmail');
const {JWT_KEY} = require('../../../config/keys')

//
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const createUser = async (req,res) => {
    try{
        const {email,password} = req.body;
        const infoUser = await getUserByEmail(email)

        if(!infoUser){
            return res.status(400).json({
                success : false,
                message : 'Este usuario no existe.'
            })
        }

        const comparePasswordResult = comparePassword(password,infoUser.password)

        if(!comparePasswordResult){
            return res.status(400).json({
                success : false,
                message : 'Este usuario no existe.'
            })
        }

        return res.status(201).json({
            success : true,
            message : 'Usuario autenticado correctamente.',
            token: createToken(infoUser.id,infoUser.email,infoUser.name)
        })
    }
    catch(error){
        console.error('Ha ocurrido un error registrando el usuario.',error)
        return res.status(500).json({
            success : false,
            message : 'Ha ocurrido un error registrando el usuario.'
        })
    }
    
}

const createToken = (id,email,name) => {
    return jwt.sign({id,name,email}, JWT_KEY, {
        expiresIn: '24h'
    });
}

const comparePassword = (password,passwordHash) => {
    return bcrypt.compareSync(password,passwordHash)
}

module.exports = createUser