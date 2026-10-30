# checkout-eCommerce
Rotina em JavaScript responsável pelo checkout de um e-commerce: calcula o subtotal do carrinho, aplica cupons de desconto e finaliza a compra.

O problema: durante uma atualização, dois desenvolvedores editaram o mesmo arquivo de script ao mesmo tempo, direto no servidor. A validação de cupom sobrescreveu o algoritmo do carrinho, zerando o valor total das compras e travando a finalização dos pedidos. Sem histórico das edições, a equipe não conseguiu rastrear onde a lógica foi corrompida, precisou interromper a aplicação e reescrever o código do zero, causando prejuízos financeiros.

solução: versionar o código com Git e organizar o trabalho em branches, de forma que correções e novas funcionalidades aconteçam sem sobrescrever o código da equipe.

Estrutura de pastas:

checkout-ecommerce/
|-- README.md
|-- .gitignore
`-- checkout.js
README.md: documentação do projeto.
.gitignore: arquivos e pastas ignorados pelo Git.
checkout.js: código JavaScript, dividido em quatro seções: carrinho, cupom, checkout e testes.

Como executar:

Com o Node.js instalado, na pasta do projeto:
node checkout.js

Saída esperada para o teste do arquivo:
{ subtotal: 250, desconto: 25, total: 225 }

Fluxo de branches:

Branch	Papel
main	Código estável, pronto para uso. Só recebe versões já integradas e testadas.
develop	Branch de integração. Recebe o merge das branches de funcionalidade antes de ir para a main.
feature/carrinho-laco	Desenvolvimento da seção do carrinho (laços de repetição) e da integração.
feature/validacao-cupom	Desenvolvimento da seção do cupom (estruturas condicionais) e da integração.

Fluxo adotado:

Cada desenvolvedor cria sua feature/* a partir da develop e trabalha apenas nela, com commits pequenos e mensagens claras (ex.: feat: adiciona função calcularSubtotal).
As feature/* são mescladas (merge) na develop. Se houver conflito, ele é resolvido manualmente, preservando a lógica das duas branches.
Com a develop testada, ela é integrada à main.

Com o Git:
Isolamento: cada desenvolvedor trabalha na sua própria branch, então um não sobrescreve o código do outro enquanto desenvolve.
Detecção de conflitos: ao juntar as branches na develop, o Git avisa quando as duas alteraram as mesmas linhas e exige resolução manual, mantendo a lógica de ambas, em vez de perder código silenciosamente.
Histórico rastreável: cada commit registra quem mudou o quê, quando e por quê. Com git log e git diff seria possível achar o ponto exato em que o algoritmo do carrinho foi corrompido.
Reversão rápida: com git revert (ou voltando ao último commit estável), o sistema voltaria a funcionar em minutos, sem precisar reescrever o código do zero nem interromper a aplicação por muito tempo.
Proteção da produção: como a main só recebe código já integrado e testado na develop, uma alteração com defeito não chega direto ao ambiente de pagamentos.
