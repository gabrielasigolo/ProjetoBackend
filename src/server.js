import express from "express"
import cors from "cors"

const app = express()
const port = process.env.PORT || 3900

app.use(cors())
app.use(express.urlencoded({extended: true })) //permite acentos na URL
app.use(express.json()) //Irá fazer o parse de arquivos JSON
//Configura o favicon
app.use('/favicon.ico', express.static('public/favicon.ico'))
//Rotas de conteúdo público
app.use('/', express.static('public'))



app.get('/api', (req, res) => {
    res.status(200).json({
        message: 'API Fatec Mobile 100% funcional🖐',
        version: '1.0.0'
    })
})

app.use(function(req, res){
    res.status(404).json({
        errors: [ 
            {
                value: `${req.originalUrl}`,
                msg: `A rota ${req.originalUrl} não existe nessa API!`,
                param: 'invalid route'
            }
        ]
    })
})

app.listen(port, function() {
    console.log(`Servidor rodando na porta ${port}!🚀`)
})