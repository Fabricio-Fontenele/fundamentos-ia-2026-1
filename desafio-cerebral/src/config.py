"""Hiperparâmetros e caminhos do projeto."""

from pathlib import Path

ETA = 0.01
MAX_EPOCAS = 1000
N_TREINOS = 5

RAIZ = Path(__file__).resolve().parent.parent
ARQUIVO_TREINO = RAIZ / "Desafio_Cerebral_-_Dados_de_Treinamento.txt"
