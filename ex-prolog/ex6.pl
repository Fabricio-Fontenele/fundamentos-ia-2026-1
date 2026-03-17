%fatos

mulher(ana).
mulher(maria).

pai(carlos, ana).
pai(carlos, joao).
pai(carlos, maria).

mae(julia, ana).
mae(julia, joao).
mae(julia, maria).

%regra
irma(X, Y) :-
  mulher(X),
  pai(P, X),
  pai(P, Y),
  mae(M, X),
  mae(M, Y),
  X \= Y.

