const { Usuarios } = require('../../infra')
const usuariosModel = require('../models/usuarios.model')

async function telaAutenticar(req, res) {
  res.render('autenticar')
}
async function validacao(req, res) {
  const credencial = req.body
  res.send(credencial)
}

async function telaBuscaUsuarios(req, res) {
  let usuario = await usuariosModel.obterUsuarios();

  res.render("usuarios", { usuario });
}

async function telaDetalhaUsuario(req, res) {
  const { idUsuarios } = req.params;

  const jogo = await usuariosModel.obterUmJogo(idUsuarios);

  res.render("detalheUsuario", { jogo });
}

async function telaCriarUsuario(req, res) {

  res.render("cadastroUsuario");
}

async function registrarUsuario(req, res) {
  const { nome, sobrenome, usuario, senha } = req.body

  const login = await usuariosModel.create({
    nome,
    sobrenome,
    usuario,
    senha
  })

}

async function editarUsuarioPelaId(req, res) {
  const { id } = req.params;

  const usuario = await usuariosModel.editarUsuario(id);

  return res.render("editarUsuario", { usuario });
}

async function deletarUsuarioPelaId(req, res) {
  const { id } = req.params;

  let jogoExcluido = await jogosModel.deletaJogoPelaId(id);

  res.redirect("/usuarios");
}


module.exports = {
  validacao,
  telaAutenticar,
  telaBuscaUsuarios,
  telaDetalhaUsuario,
  telaCriarUsuario,
  registrarUsuario,
  editarUsuarioPelaId,
  deletarUsuarioPelaId
}