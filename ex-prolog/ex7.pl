% Fatos
mulher(ana).
mulher(maria).

pai(carlos, ana).
pai(carlos, joao).
pai(carlos, maria).

mae(julia, ana).
mae(julia, joao).
mae(julia, maria).

% Ana e Maria foram separadas no início da vida
separados(ana, maria).
separados(maria, ana).

% Regra: duas pessoas têm os mesmos pais
mesmos_pais(X, Y) :-
    pai(P, X),
    pai(P, Y),
    mae(M, X),
    mae(M, Y).

% Regra principal: X é irmã de Y
irma(X, Y) :-
    mulher(X),
    mesmos_pais(X, Y),
    X \= Y.

% Regra extra: X é irmã de Y, mas elas não sabem disso
irma_sem_saber(X, Y) :-
    irma(X, Y),
    separados(X, Y).