# Mini Projeto 1

## 💻 Projeto Escolhido
O projeto escolhido foi a Tech Store.
A loja foi pensada para oferecer produtos de diversas categorias da tecnologia.
As ações contidas nesse sistema ajudam e facilitam o dia a dia de quem gere o armazém e acompanha as vendas da loja.

## 🔑 Acesso
(https://github.com/Rebeca-Soares/Mini-Projeto-1.git)

## 👣 Passos para percorrer o ficheiro JS
<ins>Pré-requisitos:</ins> Node.js instalado e VS Code.
	1.	Abra a pasta do projeto no VS Code.
	2.	Abra o ficheiro .js que quer correr.
	3.	Coloque breakpoints clicando à esquerda do número da linha (opcional).
	4.	Abra a vista Run and Debug (atalho: Ctrl/Cmd+Shift+D).
	5.	Com o ficheiro aberto, clique em Start Debugging (F5) para executar em modo debug.

## ℹ️ Estruturas de dados escolhidas
Inventario - um array de objetos para guardar todas informações necessárias a cada produto.
Histórico de Vendas - função que guarda e regista outras funções ao longo do código.

## 🔣 Operações 
1. Atualizar Preço: Alterar o preço de um produto específico através do seu identificador.
2. Registar Venda: Diminuir o stock E registar a transação no Histórico de Vendas.
3. Valor Total do Inventário: Calcular quanto dinheiro está investido em estoque.
4. Limpeza de Stock: Remover automaticamente produtos com 0 unidades(quantidade)
5. Filtro de Categoria: Listar apenas os produtos de uma categoria específica.
6. Produto "Premium": Identificar e devolver os dados do produto mais caro.
7. Repor Stock: Adicionar unidades a um produto já existente.
   
## 💭 Operações Escolhidas
8. Listar Produtos: mostrar um resumo de produtos da loja. - Mostra a lista de nomes de produtos para mais fácil acesso aos itens disponíveis na loja.
9. Adicionar Produto Novo: adiciona novos produtos à loja. - Altera facilmente o inventario da loja.
10. Aplicar Descontos em Combos: aplica desconto a partir de um determinado valor. - Aplica descontos para compras superiores a determinado valor, ótimo para campanhas promocionais.
    
## 🐛 Bug
O bug escolhido foi dentro da função registarVenda() no que diz respeito à verificação de estoque para a realização da venda e quantidade escolhida. 
O bug se encontra dentro da condição if quando declarado que a quantidade escolhida (quantidadeEscolhida) deve ser **menor que** a quantidade do inventário (quantidade).

Ao correr o debugger, um dos itens de nosso inventário não pode ser escolhido pois a quantidade presente no inventário é exatamente a mesma que a quantidade escolhida (1). Portanto ele não entra nesta condição e retorna “Sem estoque!” mesmo havendo . 

A solução é inserir um >= (menor ou igual) para que quando a quantidade escolhida seja igual à quantidade do inventário, a venda seja realizada normalmente. 

<img width="960" height="385" alt="image" src="https://github.com/user-attachments/assets/74d1de17-7ef6-4edc-ae0e-bf3a614da14d" />

## ⬇️ Fluxogramas

| Atualizar Preço  | Valor Total do Inventário|
| ------------- | ------------- |
| <img width="638" height="511" alt="image" src="https://github.com/user-attachments/assets/a77c991a-5378-4577-8958-ff8666b04dc3" />  | <img width="494" height="531" alt="Fluxograma - Total Inventáriopng" src="https://github.com/user-attachments/assets/5385b1d0-3f60-40bb-8460-175f32aa4bdf" />|


## Desenvolvido por:
👩‍💻 Natália Joaquim (219)

👩‍💻 Rebeca Soares (224)
