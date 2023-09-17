// Instalar as bibliotecas no terminal: npm i express(1° biblioteca - iniciar o servidor) cors(2° biblioteca - conexão entre o front e back) axios(3° biblioteca - Para fazer requisições e obter respostas do back) ytdl-core(4° biblioteca - Para fazer o download do vídeo do youtube)

// Importar a biblioteca 'cors' da pasta cors(no Node.js) para o nosso projeto:
import cors from "cors"
import express from "express"

import { download } from "./download.js"

const app = express()
app.use(cors())

// usamos o comando 'node --watch' para chamar uma biblioteca que sempre fica atualizando o servidor, para que não precise ficar reiniciando o localhost/servidor toda hora = Digite no terminal: 'node --watch server/index.js mas, para addiantar o caminho, jogue no json esó precisa rodar 'npm run server' no terminal
app.get("/summary/:id", (request, response) => {
  download(request.params.id)
  // Param~etro = ':id' para recuperar a informação do link do vídeo
  response.send("ID do vídeo:" + request.params.id)
})

app.listen(3333, () => console.log("Server is running on port 3333"))
