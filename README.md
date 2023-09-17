# 🎥 Shorts Summary

Reprodução desenvolvida durante a trilha Foundations na edição NLW IA - Rocketseat.

## 👨🏽‍💻**Introdução:**

`Seja bem-vindo à documentação do sistema para criar resumos de vídeos curtos do YouTube usando Inteligência Artificial. Este projeto foi desenvolvido na trilha Foundations da edição NLW IA - 2023 pela Rocketseat e foi recriado pela Desenvolvedora Maria Machado para fins de estudo e aprofundamento. Nesta documentação, apresentaremos uma visão geral do projeto, seus objetivos, resultados observados e as tecnologias utilizadas.`

---

## ✨ Visão Geral:

Shorts Summary é uma aplicação web que utiliza Inteligência Artificial para transcrever e resumir vídeos curtos do YouTube. Esta aplicação foi inspirada nas aulas disponíveis na trilha Foundations da NLW IA, oferecida pela Rocketseat, e foi recriada pela desenvolvedora com base nos conhecimentos adquiridos durante o curso. As inteligências artificiais usadas nesse projeto são a **Whisper**, que é de reconhecimento automático de fala (ASR), e o **Bart**, que é modelo de resumo de texto.

- É necessário abrir o terminal node e digitar 'npm run server' e no terminal bash: 'npm run web' para rodar todo o sistema;
- Passo a passo no arquivo Notion: https://efficient-sloth-d85.notion.site/Trilha-Foundations-84fce8e01a1a42a296a86425c7e2a473 

---

## 🏆 Objetivos:
![designProjIA](https://github.com/MaaMachado/shortsSummary/assets/102763421/c4b19acf-b07c-4d65-93a8-3f50c8ee2be0)
- Permitir ao usuário escolher um vídeo por meio de um link;
- Utilizar IA para analisar o vídeo; 
- Gerar a transcrição do conteúdo do vídeo e criar um resumo do mesmo.

---

## 🛑 Resultados Observados:

Consegui concluir quase todos os objetivos do projeto, porém, infelizmente, não consegui integrar completamente as inteligências artificiais no sistema. 
- A aplicação pode ser acessada através de 'http://localhost:5173/' após a execução do comando 'npm run web' no terminal bash. Ela realiza as solicitações necessárias, processa e baixa o vídeo escolhido, cumprindo as etapas fundamentais com êxito.

No entanto, enfrento um problema em que apenas a transcrição e o resumo do vídeo ficam exibidos na página do servidor, acessível diretamente pelo link 'http://localhost:3333/summary/q5Jd_n-sHWg'. Essa parte final representa o URL específico do vídeo escolhido, exibido no navegador em formato JSON. Enquanto na página da web, na qual deveria aparecer a transcrição e o resumo do vídeo, permanece a mensagem 'Resumindo o vídeo...', indicando um carregamento infinito.

Para solucionar esse problema, será necessário aprofundar meu conhecimento no assunto e investigar a integração das inteligências artificiais no sistema. Embora eu tenha seguido cuidadosamente todas as instruções fornecidas na trilha Foundations durante a edição NLW IA - Rocketseat, a resolução desse problema específico requer uma análise mais detalhada.

---

## 💻Tecnologias utilizadas:

- **Figma** - **Notion**;
- **HTML 5**;
- **CSS3**;
- **JavaScript**;
- **Node.js**;

---
