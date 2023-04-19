require('dotenv').config()
const { Sequelize, DataTypes } = require('sequelize')

const database = new Sequelize(
    'games',
    'root',
    '',
    {
        host: 'localhost',  
        dialect: 'mysql'
    }
)

try {
    database.authenticate()
    database.sync()

} 
catch (error) {
    return error    
}

const Usuarios = database.define('usuarios', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    sobrenome: {
        type: DataTypes.STRING,
        allowNull: true
    },
})

const Credencial = database.define('credencial',{
    login: { 
        type:DataTypes.STRING,
        allownull: false
    },
    senha: {
        type: DataTypes.STRING,
        allownull: false
    },

})

const Jogos = database.define('jogos', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    preco: {
        type: DataTypes.DOUBLE,
              allowNull: false
    },
    online: {
        type: DataTypes.BOOLEAN,
              allowNull: true
    }
})

const Categoria = database.define('categoria',{
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cenario: {
        type: DataTypes.STRING,
        allownull: true
    },
     multiplayer: {
        type: DataTypes.BOOLEAN,
              allowNull: true
    },
})

Credencial.hasOne(Usuarios)
Usuarios.belongsTo(Credencial)

Jogos.belongsTo(Categoria, { through: "jogos_categorias" })
Categoria.belongsToMany(Jogos, { through: "jogos_categorias" })

module.exports = {
    Usuarios,
    Credencial,
    Jogos,
    Categoria
}
