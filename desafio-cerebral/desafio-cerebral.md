# Desafio Cerebral – Redes Neurais Artificiais

**UESPI – Campus Prof. Alexandre Alves de Oliveira**
**Disciplina:** Fundamentos em Inteligência Artificial
**Curso:** Tecnólogo em Sistemas de Computação
**Bloco:** 4
**Professor:** Dario Calçada
**Data:** 26/05/2026

**Aluno:** _________________________________________

**NOTA:** ____________

---

## Questões

1. Explique o funcionamento do neurônio artificial.

2. Descreva os objetivos principais das funções de ativação.

3. Faça uma analogia entre os elementos constituintes do neurônio artificial e do neurônio biológico.

4. Discorra sobre a importância envolvendo o limiar de ativação.

5. Em relação as características das redes neurais artificiais, explique em que consiste a adaptação por experiência e a capacidade de generalização.

6. Discorra sobre as principais características matemáticas que são cerificadas nas funções de ativação logística e tangente hiperbólica.

7. Obtenha as expressões analíticas das derivadas de primeira ordem da função de ativação logística e tangente hiperbólica.

8. Para um problema específico, há a possibilidade de utilizar como função de ativação tanto a função logística como a tangente hiperbólica. Em termos de implementação em hardware, discorra quais seriam os eventuais aspectos relevantes para seleção de uma dessas.

9. Considerando que as operações individuais nos neurônios artificiais são realizados mais rapidamente em comparação com neurônios biológicos, explique porque diversas atividades executadas pelo cérebro humano produzem resultados mais rapidamente que um microcomputador.

10. Quais os principais tipos de problemas em que redes neurais artificiais são aplicadas?

11. Discorra sobre as vantagens e desvantagens envolvidas na aprendizagem usando lote de padrões e aprendizagem usando padrão-por-padrão.

12. Considere uma aplicação que possua quatro entradas e duas saídas. O projetista menciona que neste caso a rede feedforward de camadas múltiplas a ser implementada deve conter necessariamente quatro neurônios na primeira camada. Discorra se tal informação é pertinente.

13. Em relação ao exercício anterior, cite alguns fatores que influenciam na determinação do número de camadas escondidas de uma rede feedforward de camadas múltiplas.

14. Quais as eventuais diferenças estruturais observadas nas redes com arquitetura recorrente em relação àquelas com arquitetura feedforward?

15. Mencione em que tipos de aplicações é essencial a utilização de redes neurais recorrentes.

16. Elabore um diagrama de blocos que ilustre o funcionamento do treinamento supervisionado.

17. Discorra sobre o conceito de método de treinamento e algoritmo de aprendizado, explicitando-se ainda o conceito de época de treinamento.

18. Quais as principais diferenças existentes entre métodos baseados em treinamento supervisionado e não-supervisionado?

19. Considere uma aplicação específica, explicite então como poderia ser um critério de desempenho utilizado para ajustes de pesos e limiares da rede que empregará método de treinamento com reforço.

20. Explique como se processa a regra de Hebb no contexto do algoritmo de aprendizado Perceptron.

21. Mostre por intermédio de gráficos ilustrativos como pode ocorrer a instabilidade no processo de convergência do Perceptron quando da utilização de valores inapropriados para a taxa de aprendizado.

22. Explique por que o Perceptron só consegue classificar padrões cuja fronteira de separação entre classes seja linear.

23. Em termos de implementação computacional descreva a importância de tratarmos o limiar de ativação (θ) como um dos elementos do vetor de pesos (w).

24. Seja um problema de classificação de padrões que se desconhece a priori se as duas classes são ou não separáveis linearmente. Elabore uma estratégia para verificar a possível aplicação Perceptron em tal problema.

25. Dois projetistas de instituições diferentes estão aplicando uma rede Perceptron para mapear o mesmo problema de classificação de padrões. Discorra se é correto afirmar que ambas as redes convergirão com o mesmo número de épocas.

26. Em relação ao exercício anterior, considere-se que ambas as redes já estão devidamente treinadas. Para um conjunto contendo 10 novas amostras que devem ser identificadas, explique se os resultados produzidos por ambas serão os mesmos.

27. Seja um problema de classificação de padrões que seja linearmente separável composto de 50 amostras. Em determinada época de treinamento observou-se que somente para uma dessas amostras a rede não estava produzindo a resposta desejada. Discorra se é então necessário apresentar novamente todas as 50 amostras na próxima época de treinamento.

28. Considere um problema de classificação de padrões composto de duas entradas {x1 e x2}, cujo conjunto treinamento é composto pelas seguintes amostras de treinamento:

    | x1   | x2   | Classe |
    | ---- | ---- | ------ |
    | 0,75 | 0,75 | A      |
    | 0,75 | 0,25 | B      |
    | 0,25 | 0,75 | B      |
    | 0,25 | 0,25 | A      |

    Mostre se é possível aplicar Perceptron na resolução deste problema.

29. Explique de forma detalhada quais seriam as eventuais limitações do Perceptron se considerarmos o seu limiar de ativação nulo.
