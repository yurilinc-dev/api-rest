import app from './src/app.js'
const ip = '127.0.0.1'
const PORT = 3000

app.listen(PORT, () => {
    console.log(`A aplicação está rodando na url http://${ip}:${PORT}.\nPara parar a aplicação pressione Ctrl + 'C'.\nPara reiniciar a aplicação dgite 'rs' no Terminal de Comando para Recarregar.`)
})