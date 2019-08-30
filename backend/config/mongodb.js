const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/content_manager_stats', { useNewUrlParser: true })
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })
