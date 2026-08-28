# MERIDIANO · voo contínuo

Build `orbita-flight`. Terceira versão, e a primeira que é uma página
diferente e não uma variante: mesma história das duas anteriores, gramática
outra.

Pedido do humano, verbatim:

> quero q faca outra toda animada completamente todas cenas e de forma
> harmonica, use o fable para planejar e o king para criar segue a ideia mas de
> forma toda dinamica, pode ser

## Por que worldflight e não mais dois scrubs

O skill limita a dois atos de vídeo por página. "Todas as cenas animadas" não é
um terceiro scrub: é outra coisa. Um ato pinado é um bloco no documento, e um
documento feito de blocos tem costura. O veredito registrado no skill sobre a
tentativa de montar um mundo contínuo com atos: você rola, o palco despina, uma
página estática desliza, linhas horizontais limpas sobem na tela.

Worldflight remove as emendas removendo os blocos. Um único palco `fixed`, todas
as pernas montadas ao mesmo tempo, nada em fluxo de documento a não ser o
espaçador. Nada viaja, nada pina, nada despina, e não existe fronteira onde uma
emenda possa aparecer. É a resposta literal a "de forma harmônica".

## Fingerprint gate

Contra a linha `orbita` (as duas versões anteriores compartilham a mesma):

| Dimensão | orbita | orbita-flight | Difere |
|---|---|---|---|
| Gramática | split stage | continuous world | sim |
| Nav | divisor de duas colunas como chrome | mapa de rota clicável, com waypoints | sim |
| Hero | split 50/50 estático, dois títulos legíveis | posição estabelecida dentro do mundo, sem palco de título | sim |
| Forma dos atos | 5 atos, 9.4vh | 7 pernas de peso igual, trilha de 8.7vh, sem atos | sim |
| Fechamento | colapso do divisor | chegada a um lugar do mesmo canvas | sim |
| Signature move | escotilha com paralaxe no ponteiro | microgravidade no scroll | sim |

Seis de seis. O gate pede quatro.

## Planejamento

A rota foi planejada pelo **Fable 5**, a pedido do humano. A primeira chamada
falhou com um bloqueio de salvaguarda (falso positivo do provedor, segundo a
própria mensagem de erro); a segunda passou.

Rota entregue: Cabine, Vigia, Travessia, Deriva, Planeta, Retorno, Reencontro.
Sete trechos que se emendam no mesmo espaço físico, auge no Planeta e o trecho
anterior a ele deliberadamente o mais silencioso do voo.

**Uma decisão foi alterada contra o plano, e o motivo é a filmagem real.** O
Fable especificou a perna do Planeta como um tilt para baixo até o disco inteiro
entrar no quadro. A perna anterior não entregou o campo de estrelas vazio que o
plano previa: a Terra ficou ocupando a parte de baixo. A partir daquele frame,
revelar o disco inteiro exigiria puxar a câmera para trás, e movimento reverso
quebra o scrub, porque quem dirige é a mão e não o tempo. A perna virou uma
subida contínua em que o horizonte se curva e o terminador entra. Mesma emoção,
movimento honesto com o material que existe.

## Ritmo

Peso dividido por duração de clipe é a velocidade do mundo sob a mão do leitor.
Toda perna tem 5s e peso 1.1, então essa razão é **0.22vh por segundo de filme
em todas as sete**, spread zero. O skill registra um caso em que essa razão
variou 36% entre pernas e o dono do projeto chamou o resultado de "not smooth".

`data-sc-seam` alargado para 0.16 e `data-sc-lerp` base em 0.12, que são os
valores para voo e não os padrões de página de atos.

## Signature move: microgravidade no scroll

Ideia do Fable, e é a melhor dos três builds porque não é um efeito visual.
Dentro da cabine o playhead é rígido (lerp 0.42 e 0.34): o corpo está preso ao
assento e a imagem obedece a mão 1 para 1. Depois da travessia do vidro o lerp
cai para 0.07: soltar a roda deixa a câmera continuar derivando por inércia. Na
volta a rigidez retorna (0.14, depois 0.3). O visitante sente a ausência de peso
na física do próprio gesto.

Implementado com `data-sc-lerp` por perna, que é atributo documentado. O motor
não foi tocado, e a regra "o lerp nunca é desativado" continua valendo: ele é
variado, nunca zerado.

## Verificação

Três passes, todos limpos:

- **desktop**: sem scroll morto, **as 7 pernas atingem opacidade total e pintam
  um frame real**, contraste 4.5:1 em tudo.
- **celular 390x844**: idem.
- **movimento reduzido**: nenhum clipe é buscado, os pôsteres cruzam nas mesmas
  emendas e nas mesmas posições, contraste limpo. A história inteira se lê.

O trace confirma o contrato do modo: cada perna avança de 0 a ~5.03s dentro da
sua janela, e nas emendas a perna que entra sobe de 0 enquanto a que sai
permanece em opacidade cheia por baixo (0.214, 0.297, 0.703, 0.786), que é a
dissolvência de um lado só. Fundir os dois lados ao mesmo tempo colocaria o
fundo da página no meio de cada emenda, e isso lê como um flash.

### Dois avisos que NÃO são defeitos

1. **FROZEN CLIP.** É a checagem do modo ato aplicada a um worldflight. Aqui
   todas as pernas ficam montadas, então uma perna fora da sua janela
   legitimamente descansa no primeiro ou no último frame, e o palco nunca
   "desliza para fora" porque é fixo. A checagem que vale nesse modo é a de
   perna presa no pôster, e ela passou nas sete.
2. **`worldflight-assert.mjs` quebra.** Ele espera um hook de depuração
   (`window.__sc`) que esta versão do motor não expõe. As asserções estruturais
   que rodaram antes da quebra passaram todas: altura do espaçador, palco fixo,
   camada de copy fixa, e nada em fluxo de documento a não ser o espaçador.
   Incompatibilidade entre script e engine do plugin, não defeito da página.

### Dois defeitos reais, encontrados e corrigidos

1. **O bloco final reprovou contraste a 2.77:1.** É a armadilha que o próprio
   worldflight.md documenta: o scrim de faixa padrão termina em 58% do quadro e
   a última perna continua clara acima disso. A primeira tentativa de correção
   **não fez efeito nenhum e o número não mudou**, porque eu declarei o scrim
   novo como `data-sc-copy` para herdar a janela do finale, e o passe de
   contraste esconde todo bloco de copy para fotografar o quadro embaixo. O
   scrim era escondido junto e nunca era medido. Refeito como elemento comum,
   dirigido pelo `--sc-segp` que o motor publica.
2. **O auge não dominava.** As pernas 4, 5 e 6 convergiram visualmente para
   "horizonte com sol". Peso igual é obrigatório aqui, então dar mais scroll ao
   pico como nas outras versões quebraria o ritmo. Corrigido com gradação: a
   perna da deriva abre dessaturada e escura e recupera o neutro ao longo da
   própria progressão, de modo que o último frame dela casa com o primeiro da
   seguinte e a emenda continua invisível. O planeta floresce por contraste.

### Não verificado

**Celular real.** Sete clipes montados ao mesmo tempo num palco fixo é bem mais
pesado que as versões anteriores, e é exatamente o cenário em que iOS, decodificador
e Low Power Mode se comportam diferente do headless. Os pôsteres estão em todas
as pernas por isso, e sob movimento reduzido nenhum clipe é buscado, mas nada
disso foi testado em hardware.

## Custo

8 gerações de vídeo no kling-25 a 1080p, 325 créditos cada, incluindo uma
refeita da perna 6 (a nave não voltou ao quadro na primeira, o que deixaria as
pernas 5 e 6 com a mesma emoção e uma delas viraria enchimento). Total 2.600
créditos de cerca de 585.000. Mais um still gerado local no inemaimg, custo zero.

Geração paga: o modo ilimitado da conta não vale nesta sessão.

## CTA

"Reservar assento" aponta para https://eventos.inema.pro, igual às outras duas.
