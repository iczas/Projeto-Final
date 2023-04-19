const sessao = require('express-session')

autorizarUsuario: () =>{
    return sessao({
        secret: 'sonhoNaruto',
        resave: false,
        saveUninitialized: true
    })
}

autenticar:  
try{
    const credencial = req.body

if(credencial){
    req.session.loggedIn = true,
    req.session.userName = userName
}
else{
    res.redirect('/autenticarSenha')
}
}
catch(error){
   
    return error

}
desconectar:(req, res) =>{
    try {
        req.session.destroy()
        res.redirect('/autenticarSenha')
    }
    catch(error) {
        res.send(error)
    }
}

Module.exports ={
     autorizarUsuario,
     autenticarSenha,
     desconectar
}
