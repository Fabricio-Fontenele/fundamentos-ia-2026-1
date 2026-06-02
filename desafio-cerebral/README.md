# Desafio Cerebral — Perceptron (regra de Hebb)

Projeto prático da disciplina de Fundamentos em IA (UESPI). Classifica a pureza de um óleo
em duas classes (`P1` / `P2`) usando um Perceptron treinado pela regra de Hebb.

## Requisitos

- Python >= 3.14
- numpy (instalado via `uv` ou `pip`)

## Como rodar

```bash
# com uv
uv run python -m src.main

# ou com pip + venv
pip install numpy
python -m src.main
```

O programa executa 5 treinamentos (pesos iniciais aleatórios entre 0 e 1, η = 0,01),
imprime os pesos iniciais/finais e o número de épocas de cada treino e, por fim, classifica
as 10 amostras de teste com cada uma das redes.

## Estrutura

| Arquivo | Função |
| ------- | ------ |
| `src/main.py` | Orquestra treino, classificação e relatório |
| `src/perceptron.py` | Treino (regra de Hebb) e classificação |
| `src/data.py` | Carrega dados de treino e amostras de teste (com bias `x0 = -1`) |
| `src/config.py` | Hiperparâmetros (η, máx. épocas, nº de treinos, semente) |
| `src/report.py` | Impressão das tabelas de resultados |

Os dados de treino estão em `Desafio_Cerebral_-_Dados_de_Treinamento.txt` e as respostas
teóricas e tabelas finais em `desafio-cerebral.md`.
