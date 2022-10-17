import express from "express"

const app = express()

app.use()

app.get('/api', (req, res) => {
    res.status(200).json({
        message: 'API Fatec Mobile 100% funcional🖐',
        version: '1.0.0'
    })
})

app.listen(4000, function() {
    console.log('Servidor rodando!🚀')
})