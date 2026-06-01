"""Carregamento dos dados de treino e definição das amostras de teste."""

import numpy as np

AMOSTRAS_TESTE = np.array([
    [-0.3665,  0.0620, 5.9891],
    [-0.7842,  1.1267, 5.5912],
    [ 0.3012,  0.5611, 5.8234],
    [ 0.7757,  1.0648, 8.0677],
    [ 0.1570,  0.8028, 6.3040],
    [-0.7014,  1.0316, 3.6005],
    [ 0.3748,  0.1536, 6.1537],
    [-0.6920,  0.9404, 4.4058],
    [-1.3970,  0.7141, 4.9263],
    [-1.8842, -0.2805, 1.2548],
])


def adicionar_bias(X):
    """Insere x0 = -1 para que o limiar θ seja tratado como peso w0."""
    return np.hstack([-np.ones((len(X), 1)), X])


def carregar_treino(caminho):
    """Lê o arquivo de treino e devolve (X com bias, d)."""
    dados = np.loadtxt(caminho, skiprows=1)
    X = adicionar_bias(dados[:, :3])
    d = dados[:, 3].astype(int)
    return X, d


def carregar_teste():
    """Devolve as 10 amostras de teste já com bias."""
    return adicionar_bias(AMOSTRAS_TESTE)
