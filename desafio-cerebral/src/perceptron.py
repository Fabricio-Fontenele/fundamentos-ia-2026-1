"""Perceptron treinado pela regra de Hebb."""

from dataclasses import dataclass
import numpy as np


@dataclass
class Treinamento:
    pesos_iniciais: np.ndarray
    pesos_finais: np.ndarray
    epocas: int
    convergiu: bool


def treinar(X, d, eta, max_epocas, rng):
    """Treina um Perceptron pela regra de Hebb."""
    w = rng.uniform(0, 1, size=X.shape[1])
    w_inicial = w.copy()

    for epoca in range(1, max_epocas + 1):
        houve_erro = False
        for xi, di in zip(X, d):
            y = 1 if np.dot(w, xi) >= 0 else -1
            if y != di:
                w += eta * (di - y) * xi
                houve_erro = True
        if not houve_erro:
            return Treinamento(w_inicial, w, epoca, True)

    return Treinamento(w_inicial, w, max_epocas, False)


def classificar(X, w):
    """Aplica o Perceptron treinado e devolve rótulos 'P1' / 'P2'."""
    return np.where(X @ w >= 0, "P1", "P2")
