const { Usuarios } = require('../../infra')
const usuariosModel = require('../models/usuarios.model')

async function autenticarSenha (req, res) {
    res.render('autenticarSenha')
}
async function validacao (req, res) {
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
    const { nome, sobrenome } = req.body;
  
    let novoUsuario = usuariosModel.telaCriarUsuario();
  
    res.render("cadastroUsuario", { novoUsuario });
  }
  
  async function registrarUsuario(req,res) {
    const {nome, sobrenome, usuario, senha} = req.body

    const login = await usuariosModel.create({
                 nome,
                 sobrenome,
                 usuario,
                 senha
    
            })
res.render('cadastroUsuario')
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
    autenticarSenha,
    validacao,
    telaBuscaUsuarios,
    telaDetalhaUsuario,
    telaCriarUsuario,
    registrarUsuario,
    editarUsuarioPelaId,
    deletarUsuarioPelaId
}