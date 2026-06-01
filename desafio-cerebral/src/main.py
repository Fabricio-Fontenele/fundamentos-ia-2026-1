"""
Projeto Prático — Desafio Cerebral (RNAs)
Classificação de pureza de óleo (P1 / P2) com Perceptron + regra de Hebb.

Treino : 30 amostras em 'Desafio_Cerebral_-_Dados_de_Treinamento.txt'.
Teste  : 10 amostras da tabela do enunciado (src/data.py).

Execução: python -m src.main
"""

import numpy as np

from . import report
from .config import ARQUIVO_TREINO, ETA, MAX_EPOCAS, N_TREINOS
from .data import AMOSTRAS_TESTE, carregar_teste, carregar_treino
from .perceptron import classificar, treinar


def main():
    X_treino, d_treino = carregar_treino(ARQUIVO_TREINO)
    X_teste = carregar_teste()

    rng = np.random.default_rng()
    treinos = [
        treinar(X_treino, d_treino, ETA, MAX_EPOCAS, rng) for _ in range(N_TREINOS)
    ]
    classificacoes = [classificar(X_teste, tr.pesos_finais) for tr in treinos]

    report.cabecalho(ETA, MAX_EPOCAS, len(X_treino), len(X_teste))
    report.detalhes_treinos(treinos)
    report.tabela_resumo(treinos)
    report.tabela_classificacao(AMOSTRAS_TESTE, classificacoes)


if __name__ == "__main__":
    main()
