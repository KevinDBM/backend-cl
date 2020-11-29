const getUserByEmail = require('../../../DAO/user/getUserByEmail');
const createUserDAO = require('../../../DAO/user/createUser')
const userDTO = require('../../../DTO/User').user

//
const bcrypt = require('bcryptjs')

const createUser = async (req,res) => {
    try{
        return res.status(201).json({
            success : true,
            message : 'Usuario creado con éxito'
        })

        const {name,email,password} = req.body;
        const existUser = await getUserByEmail(email)

        if(existUser){
            return res.status(400).json({
                success : false,
                message : 'Ya existe un usuario asociado a este correo electrónico.'
            })
        }

        const passwordHash = createPassword(password)

        const resultCreated = await createUserDAO(name,email,passwordHash)

        if(!resultCreated){
            return res.status(500).json({
                success : false,
                message : 'Ha ocurrido un error registrando el usuario.'
            })
        }

        return res.status(201).json({
            success : true,
            message : 'Usuario creado con éxito',
            user: userDTO(resultCreated)
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

const createPassword = (password) => {
    return bcrypt.hashSync(password,10)
}

module.exports = createUser