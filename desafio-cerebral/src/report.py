"""Formatação e impressão dos resultados dos treinamentos."""

LARGURA = 78


def _fmt(w, casas=4, sep="  "):
    return sep.join(f"{wi:+.{casas}f}" for wi in w)


def _titulo(texto):
    print("=" * LARGURA)
    print(texto)
    print("=" * LARGURA)


def cabecalho(eta, max_epocas, n_treino, n_teste):
    _titulo(
        f"Perceptron — regra de Hebb   |   η = {eta}   |   máx. épocas = {max_epocas}\n"
        f"Treino: {n_treino} amostras   |   Teste: {n_teste} amostras"
    )


def detalhes_treinos(treinos):
    for t, tr in enumerate(treinos, 1):
        status = "convergiu" if tr.convergiu else "limite atingido"
        print(f"\nTreinamento T{t}  ({status} em {tr.epocas} épocas)")
        print(f"  pesos iniciais : {_fmt(tr.pesos_iniciais)}")
        print(f"  pesos finais   : {_fmt(tr.pesos_finais)}")


def tabela_resumo(treinos):
    print("\n")
    _titulo("Tabela resumo")
    print(f"{'Treino':<8}{'Pesos iniciais (w0..w3)':<38}{'Pesos finais (w0..w3)':<38}{'Épocas'}")
    print("-" * LARGURA)
    for t, tr in enumerate(treinos, 1):
        pi = _fmt(tr.pesos_iniciais, casas=3, sep=" ")
        pf = _fmt(tr.pesos_finais, casas=3, sep=" ")
        print(f"T{t:<7}{pi:<38}{pf:<38}{tr.epocas}")


def tabela_classificacao(amostras, classificacoes):
    print("\n")
    _titulo("Classificação das amostras de teste")
    n = len(classificacoes)
    cols = "  ".join(f"y(T{t})" for t in range(1, n + 1))
    print(f"{'Amostra':<8}{'x1':>9}{'x2':>9}{'x3':>9}  {cols}")
    print("-" * LARGURA)
    for i, (x1, x2, x3) in enumerate(amostras, 1):
        classes = "  ".join(f"{classificacoes[t][i - 1]:>5}" for t in range(n))
        print(f"{i:<8}{x1:>9.4f}{x2:>9.4f}{x3:>9.4f}  {classes}")
