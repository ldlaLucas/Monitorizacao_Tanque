# Gestão de Consumo de O2

## Descrição
Esta planilha foi desenvolvida para monitorar o consumo do tanque de oxigênio (O2) em um ambiente de trabalho. Ela permite o acompanhamento preciso do consumo diário e fornece alertas visuais quando o consumo ultrapassa os limites estabelecidos.

## Funcionalidades
- **Cálculo de Consumo**: Ao inserir o volume atual do tanque (POL) na célula E3 da página "consumo_Tanque_O2", a planilha verifica o último registro feito e calcula a média de consumo.
- **Alerta de Consumo**: Se o consumo ultrapassar 4, um alerta será exibido na célula N3 da mesma página. Além disso, o gráfico correspondente mostrará uma parte vermelha na coluna, indicando o excesso de consumo.
- **Registro de Dados**: A aba "DADOS" armazena os últimos registros de consumo, bem como parâmetros e características do tanque.
- **Avisos de Atenção**: A coluna G na aba "DADOS" contém avisos de atenção, semelhantes ao alerta na célula N3 da página "consumo_Tanque_O2".
- **Automatização**: A planilha é atualizada automaticamente às 22:00, registrando os dados presentes e atualizando o gráfico.

## Como Usar
1. Preencha a célula E3 na página "consumo_Tanque_O2" com o volume atual do tanque.
2. Caso seja dia de recarga, marque a caixa na célula D3.

## Requisitos
- Acesso ao Google Planilhas.
- Inserir os códigos no Appscript, tanto o "Código.gs" quanto o "Macros.gs".

### Passos para Inserir os Códigos no Appscript
1. Abra a planilha no Google Sheets.
2. Vá para `Extensões` > `Apps Script`.
3. No editor de script, crie dois novos arquivos: "Código.gs" e "Macros.gs".
4. Cole o código correspondente em cada arquivo.
5. Salve e execute os scripts conforme necessário.

## Link para Testes
Você pode acessar a planilha para testes [aqui](https://docs.google.com/spreadsheets/d/1d27O3rG1x0NA_X8ytCk0X8stUNoOLOkWbTacq2tEPyM/edit?usp=sharing).
