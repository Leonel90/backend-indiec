const mysql = require('mysql')

const artistaSchema = new mysql.Schema(
    {
        nombre: String,
        apellido: String,
        genero: String,
        fecha_nacimiento: String
    }
)

module.exports = { artistaSchema }