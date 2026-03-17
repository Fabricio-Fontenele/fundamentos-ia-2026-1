% Base de dados das mulheres da família
mulher(maria).
mulher(ana).
mulher(clara).
mulher(sofia).
mulher(laura).

% Relações de filiação
filha(ana, maria).
filha(clara, ana).
filha(sofia, clara).
filha(laura, sofia).

% Regra para descendência direta
descende(X, Y) :-
    filha(X, Y).

% Regra para descendência indireta
descende(X, Y) :-
    filha(X, Z),
    descende(Z, Y).