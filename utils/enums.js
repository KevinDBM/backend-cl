const bookRequestStatusEnum = Object.freeze({
    Pendiente : {
        code : 0,
        name : 'Pendiente'
    },
    Aprobada : {
        code : 1,
        name : 'Aprobada'
    },    
    Rechazada : {
        code : 2,
        name : 'Rechazada'
    }
})

module.exports = {
    bookRequestStatusEnum
}