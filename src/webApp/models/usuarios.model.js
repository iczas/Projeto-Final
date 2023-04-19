const {Usuarios, Credencial} = require('../../infra')

async function cadastrarUsuario (novoUsuario){
const novoUsuario = await Credencial.create(novoUsuario)

    return novoUsuario; 
}

async function obterUsuarios(){
    const usuarios = await Usuarios.findAll();

    return usuarios;
}
 
async function obterUmUsuarioPelaId(idUsuario) {
    const detalheUsuario = await Jogos.findByPk(idJogo);

    return detalheUsuario;
}

async function editarUsuarioPelaId(idUsuario, usuarioEditado) {
    const usuarioAtualizado = await Usuarios.update(idUsuario, usuarioEditado);

    return usuarioAtualizado;
}

async function deletarUsuarioPelaId(idUsuario){
    const usuarioExcluido = await Usuarios.destroy(idUsuario)

    return usuarioExcluido
}

module.exports = {
    cadastrarUsuario,
    obterUsuarios,
    obterUmUsuarioPelaId,
    editarUsuarioPelaId,
    deletarUsuarioPelaId
}