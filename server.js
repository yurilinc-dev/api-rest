import app from './src/app.js'
import connection from './infra/connection.js'

const PORT = 3000
connection.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('\nConexão realizada com sucesso.\n')

        app.listen(PORT, () => {
            console.log(`A aplicação está rodando na url http://localhost:${PORT}.\nPara parar a aplicação pressione Ctrl + 'C'.`)
        })
    }
})