# FALHAS

| data | o que quebrou | menor correção | prompt \| infra |
|---|---|---|---|
| 2026-08-28 | meridiano-voo: trilho de rota e botão "Voar sozinho" não recebiam clique — `all: unset` nos botões vinha depois de `.rail__leg,.rail__play{pointer-events:auto}` e, como pointer-events é herdada, devolvia o `none` do `.rail`; o hit-test caía no `<video>` | `pointer-events: auto` dentro do próprio bloco, depois do `all: unset` | prompt |
