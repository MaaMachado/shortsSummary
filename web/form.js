import { server } from "./server.js"

const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

//async = para avisar que têm uma função assíncrona e para usar 'await' para avisar que têm que aguardar aquela ação terminar o seu carregamento
form.addEventListener("submit", async (event) => {
  //reprimi a resposta padrão do navegador de recarregar a página
  event.preventDefault()
  content.classList.add("placeholder")

  const videoURL = input.value

  //Verificar se o link é de um vídeo short
  if (!videoURL.includes("shorts")) {
    return (content.textContent =
      "Esse vídeo não é um short. Escolha outro link!")
  }

  //Faz uma limpeza no link colocado no input, separando o link todo da url específica do vídeo
  //PARAMS = EX:www.youtube.com/shorts/q5Jd_n-sHWg = www.youtube.com(fica como pos1, ou como está no code, underline(_)) - /shorts/ - q5Jd_n-sHWg(e essa parte final fica como params, na qual será usada para o resto do code)
  //PARAMS2 = Agora se pegar o link do compartilhar video, aparece mais um parametro no link: https://youtube.com/shorts/q5Jd_n-sHWg?si=sEVu81hOKwIGCawq - que é aquilo depois do '?si', por isso necessita de mais uma condição de limpeza

  const [_, params] = videoURL.split("/shorts/")
  const [videoID] = params.split("?si")

  content.textContent = "Obtendo o texto do aúdio..."

  //Quando ele fazer o download do vídeo, ele vai obter o texto do aúdio e fazer o resumo = 1° requisição
  const transcription = await server.get("/summary/" + videoID)
  content.textContent = "Realizando o resumo..."

  const summary = await server.post("/summary", {
    text: transcription.data.result,
  })

  content.textContent = summary.data.result
  content.classList.remove("placeholder")
})
