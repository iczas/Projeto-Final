const jogosModel = require("../models/jogos.model");

// 1) Telas
async function telaBuscaJogos(req, res) {
  let jogos = await jogosModel.obterJogos();

  res.render("listarJogos", { jogos });
}

async function telaDetalhaJogo(req, res) {
  const { idJogo } = req.params;

  const jogo = await jogoModel.obterUmJogo(idJogo);

  res.render("detalheJogo", { jogo });
}

async function telaCriarJogo(req, res) {
  const { nome, categoria, cenario, multiplayer, online, preco } = req.body;

  let jogoCriado = jogosModel.criarJogo();

  res.render("criarJogo", { jogoCriado });
}

async function editaJogo(req, res) {
    const { id } = req.params;
  
    const jogo = await jogo.editJogo(id);
  
    return res.render("editarJogo", { jogo });
}


// 2) Operações
async function registraJogo(req, res) {
  const { nome, online, preco, categoria } = req.body;

  const jogo = {
    nome,
    preco,
    online,
    categoria
  };

  const novoJogo = await jogosModel.criarJogo(jogo);

  return res.redirect("/jogos");
}

async function atualizaJogo(req, res) {
  const { id } = req.params;
  const { nome, categoria, cenario, multiplayer, online, preco } = req.body;

  const jogoEditado = await jogosModel.editarJogoPelaId(id);

  return res.redirect("/jogos");
}

async function deletaJogo(req, res) {
  const { id } = req.params;

  let jogoExcluido = await jogosModel.deletaJogoPelaId(id);

  res.redirect("/jogos");
}

module.exports = {
    // telas
    telaBuscaJogos,
    telaDetalhaJogo,
    telaCriarJogo,
    // operacoes
    registraJogo,
    atualizaJogo,
    editaJogo,
    deletaJogo,
};
