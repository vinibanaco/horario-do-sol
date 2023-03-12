# Horário do sol - #boraCodar Desafio 10 (Rocketseat)

Uns amigos meus estão fazendo essa série de desafios da Rocketseat chamada
[#boraCodar](https://www.rocketseat.com.br/boracodar) e de vez em quando comentam comigo sobre. Em
resumo o pessoal da Rocketseat compartilha um layout no Figma com uma proposta de aplicação e após
um período (acredito que seja 1 semana) eles publicam a solução deles.

E o desafio 10, em especial, chamou a minha atenção (se quiser conferir o layout completo aqui está
o [link](https://www.figma.com/community/file/1215291914714743267), você pode ver pelo preview ou
criar uma cópia para ver com mais facilidade). Ele se trata de uma página de clima, você consome uma
API que retorna algumas informações (ex.: temperatura, umidade, etc.) e exibe nessa dashboard.

O que mais me chamou a atenção nesse desafio foi a seção "Horário do sol", mais especificamente esse
"relógio" que usa um solzinho como ponteiro e tem uns outros estilos bem legais, como os raios do
sol. Isso porque, além de envolver SVGs (um tema que não tenho tanta familiaridade assim), envolvia
alguns cálculos interessantes -- cheguei até a usar cosseno, quem diria.

A parte de conectar à API e os cálculos envolvendo hora eu não fiz, quis focar mesmo no relógio que
era algo bem único e diferente. Consegui estilizá-lo do jeito que eu queria (deixando tudo alinhado
e o mais responsivo possível).

No fim das contas foi uma experiência bem interessante, aprendi mais sobre SVGs, especialmente a
propriedade `stroke-dasharray` (que me causou uma certa dor de cabeça 😂), e os cálculos matemáticos
que eu tinha em mente funcionaram perfeitamente! Além disso, primeira vez usando o Vite para criar
um projeto React, ainda configurei o ESLint e o Prettier do jeito que eu gosto.

## Como rodar o projeto:

- Baixe ou clone o repositório
- Execute o comando `npm install`
- E para rodar, execute `npm run dev`
