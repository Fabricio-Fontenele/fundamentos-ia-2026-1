import numpy as np

amostras = np.array(
    [
        [-0.3665, 0.0620, 5.9891],
        [-0.7842, 1.1267, 5.5912],
        [0.3012, 0.5611, 5.8234],
        [0.7757, 1.0648, 8.0677],
        [0.1570, 0.8028, 6.3040],
        [-0.7014, 1.0316, 3.6005],
        [0.3748, 0.1536, 6.1537],
        [-0.6920, 0.9404, 4.4058],
        [-1.3970, 0.7141, 4.9263],
        [-1.8842, -0.2805, 1.2548],
    ]
)

rotulos = np.array([1, 1, 1, 1, 1, -1, -1, -1, -1, -1])

X = np.hstack([np.ones((len(amostras), 1)), amostras])


ETA = 0.01
MAX_EPOCAS = 1000
N_TREINOS = 5


def sinal(net):
    return 1 if net >= 0 else -1


def treinar(X, rotulos, eta, max_epocas):

    w = np.random.uniform(0, 1, size=4)
    pesos_iniciais = w.copy()

    for epoca in range(1, max_epocas + 1):
        erros = 0

        for i in range(len(X)):
            net = np.dot(w, X[i])
            y_calc = sinal(net)
            y_esp = rotulos[i]

            if y_calc != y_esp:
                erros += 1
                delta = eta * (y_esp - y_calc)
                w = w + delta * X[i]

        if erros == 0:
            return pesos_iniciais, w, epoca, True

    return pesos_iniciais, w, max_epocas, False


def classificar(X, w):
    resultados = []
    for i in range(len(X)):
        net = np.dot(w, X[i])
        classe = "P1" if sinal(net) == 1 else "P2"
        resultados.append(classe)
    return resultados


print("=" * 75)
print("TREINAMENTO DO PERCEPTRON — REGRA DE HEBB")
print(f"η (taxa de aprendizagem) = {ETA}  |  Máx. épocas = {MAX_EPOCAS}")
print("=" * 75)

historico = []

for t in range(1, N_TREINOS + 1):
    pi, pf, epocas, convergiu = treinar(X, rotulos, ETA, MAX_EPOCAS)
    historico.append((pi, pf, epocas, convergiu))

    status = "Convergiu" if convergiu else "Limite de épocas atingido"
    print(f"\n── Treinamento T{t} ──")
    print(
        f"  Pesos iniciais : w0={pi[0]:.4f}  w1={pi[1]:.4f}  w2={pi[2]:.4f}  w3={pi[3]:.4f}"
    )
    print(
        f"  Pesos finais   : w0={pf[0]:.4f}  w1={pf[1]:.4f}  w2={pf[2]:.4f}  w3={pf[3]:.4f}"
    )
    print(f"  Épocas         : {epocas}   →  {status}")


print("\n")
print("=" * 75)
print("TABELA RESUMO DOS 5 TREINAMENTOS")
print("=" * 75)
header = f"{'Treino':<8} {'Pesos iniciais (w0..w3)':<36} {'Pesos finais (w0..w3)':<36} {'Épocas'}"
print(header)
print("-" * 75)

for t, (pi, pf, epocas, _) in enumerate(historico, 1):
    pi_str = f"{pi[0]:.3f} {pi[1]:.3f} {pi[2]:.3f} {pi[3]:.3f}"
    pf_str = f"{pf[0]:.3f} {pf[1]:.3f} {pf[2]:.3f} {pf[3]:.3f}"
    print(f"T{t:<7} {pi_str:<36} {pf_str:<36} {epocas}")

print("\n")
print("=" * 75)
print("CLASSIFICAÇÃO DAS AMOSTRAS")
print("=" * 75)

cabecalho = f"{'Amostra':<10} {'x1':>8} {'x2':>8} {'x3':>8}"
for t in range(1, N_TREINOS + 1):
    cabecalho += f"  {'y(T' + str(t) + ')':<6}"
print(cabecalho)
print("-" * 75)

classificacoes = [classificar(X, pf) for _, pf, _, _ in historico]

for i in range(len(amostras)):
    linha = f"{i + 1:<10} {amostras[i, 0]:>8.4f} {amostras[i, 1]:>8.4f} {amostras[i, 2]:>8.4f}"
    for t in range(N_TREINOS):
        linha += f"  {classificacoes[t][i]:<6}"
    print(linha)

print("\nClasses de referência usadas no treino: 1-5 = P1 (+1), 6-10 = P2 (-1)")
