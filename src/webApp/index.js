const express = require('express');
const path = require('path');

const jogosController = require('./controllers/jogos.controller');
const usuariosController = require('./controllers/usuarios.controller');
const sessionMiddleware = require('./middleware/session.middleware');

const webApp = express();
const bodyParser = require('body-parser');

webApp.use(bodyParser.json());
webApp.use(bodyParser.urlencoded({extended: false}));
webApp.use('views', path.join(__dirname, 'views'))
webApp.use(sessionMiddleware.autorizarUsuario);

webApp.set('view engine', 'ejs')
webApp.set(express-static(path.join(__dirname, 'public')));

webApp.get('/autorizar', autorizarUsuario, usuariosController.autorizarUsuario);
webApp.get('/autenticarSenha', usuariosController.autenticarSenha);
webApp.post('/autenticarSenha/autenticar', usuariosController.autenticarSenha);


webApp.post('/cadastroUsuario', usuariosController.registrarUsuario); 

// 1) Tela
// http://localhost:12345/jogos
webApp.get('/jogos', jogosController.telaBuscaJogos);
// http://localhost:12345/jogos/1
webApp.get('/jogos/:id', jogosController.telaDetalhaJogo);
// http://localhost:12345/jogos/criar
webApp.get('/jogos/criar', jogosController.telaCriarJogo); // telaCriarJogo
// http://localhost:12345/jogos/editar/1
webApp.get('/jogos/editar/:id', jogosController.telaCriarJogo); // telaEditarJogo

webApp.get('/cadastroUsuario', usuariosController.telaCriarUsuario);

// http://localhost:12345/usuarios
webApp.get('/usuarios/:id', usuariosController.telaDetalhaUsuario);
// http://localhost:12345/usuarios/1
webApp.get('/usuarios/:id', usuariosController.telaCriarUsuario);

// 2) Operações
webApp.post('/jogos/criar', jogosController.registraJogo);
webApp.put('/jogos/editar/:id',jogosController.atualizaJogo); // atualizarJogo
webApp.delete('/jogos/:id', jogosController.deletaJogo); // deletarJogo

webApp.post('/usuarios/criar', usuariosController.registrarUsuario);
webApp.put('/usuarios/editar/:id',usuariosController.editarUsuarioPelaId); // atualizarUsuario
webApp.delete('/usuarios/:id', usuariosController.deletarUsuarioPelaId); // deletarUsuario

webApp.listen('12345',()=> {console.log('Servidor online')});