import ytdl from "ytdl-core"
import fs from "fs"

//colocando o código da função de download dentro de uma promessa, ou seja, resolver ela ou rejeitar e devolver o erro
export const download = (videoId) =>
  new Promise((resolve, reject) => {
    const videoURL = "https://www.youtube.com/shorts/" + videoId
    console.log("Realizando o download do vídeo:", videoId)

    //a biblioteca(ytdl) está dentro de várias etapas = confere se o vídeo é short, terminar o download do aúdio do vídeo e a que avisa quanddo dá erro
    ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
      .on("info", (info) => {
        const seconds = info.formats[0].approxDurationMs / 1000
        if (seconds > 60) {
          throw new Error("A duração desse vídeo é maior do que 60 segundos.")
        }
      })
      .on("end", () => {
        console.log("Download do vídeo finalizado.")
        resolve()
      })
      .on("error", (error) => {
        console.log(
          "Não foi possível fazer o download do vídeo. Detalhes do erro:",
          error
        )
        reject(error)
      })
      .pipe(fs.createWriteStream("./tmp/audio.mp4"))
    //'pipe' recupera a informação e salva temporariamente
  })
