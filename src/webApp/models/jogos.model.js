const { Jogos } = require('../../infra')

async function criarJogo(novoJogo) {
    const novoJogo = await Jogos.create(novoJogo);

    return novoJogo;
}

async function obterJogos(){
    const jogos = await Jogos.findAll();

    return jogos;
}
 
async function obterUmJogoPelaId(idJogo) {
    const detalheJogo = await Jogos.findByPk(idJogo);

    return detalheJogo;
}

async function editarJogoPelaId(idJogo, jogoEditado) {
    const jogoAtualizado = await Jogos.update(idJogo, jogoEditado);

    return jogoAtualizado;
}

async function deletaJogoPelaId(idJogo){
    const jogoExcluido = await jogos.destroy(idJogo)

    return jogoExcluido
}

module.exports = {
    criarJogo,
    obterJogos,
    obterUmJogoPelaId,
    editarJogoPelaId,
    deletaJogoPelaId
}