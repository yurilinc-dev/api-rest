import app from './app.js'
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`A aplicação está rodando na url http://localhost:${PORT}.\nPara parar a aplicação pressione Ctrl + 'C'.\nPara reiniciar a aplicação dgite 'rs' no Terminal de Comando para Recarregar.`)
})