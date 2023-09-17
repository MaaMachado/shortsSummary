// Instalar as bibliotecas no terminal: npm i express(1° biblioteca - iniciar o servidor) cors(2° biblioteca - conexão entre o front e back) axios(3° biblioteca - Para fazer requisições e obter respostas do back) ytdl-core(4° biblioteca - Para fazer o download do vídeo do youtube)

// Importar a biblioteca 'cors' da pasta cors(no Node.js) para o nosso projeto:
import cors from "cors"
import express from "express"

import { convert } from "./convert.js"
import { download } from "./download.js"
import { transcribe } from "./transcibe.js"
import { summarize } from "./summarize.js"

const app = express()
//para pegar os textos em formato json = enre chaves, valor...
app.use(express.json())
app.use(cors())

// usamos o comando 'node --watch' para chamar uma biblioteca que sempre fica atualizando o servidor, para que não precise ficar reiniciando o localhost/servidor toda hora = Digite no terminal: 'node --watch server/index.js mas, para addiantar o caminho, jogue no json esó precisa rodar 'npm run server' no terminal

app.get("/summary/:id", async (request, response) => {
  try {
    // Parametro = ':id' para recuperar a informação do link do vídeo e aguardar o carregamento do server
    await download(request.params.id)
    const audioConverted = await convert()
    //Pegar o texto transcrito nas partes transcribe e etc
    const result = await transcribe(audioConverted)

    return response.json({ result })
  } catch (error) {
    console.log(error)
    return response.json({ error })
  }
})

app.post("/summary", async (request, response) => {
  try {
    const result = await summarize(request.body.text)
    return response.json({ result })
  } catch (error) {
    console.log(error)
    return response.json({ error })
  }
})
app.listen(3333, () => console.log("Server is running on port 3333"))
