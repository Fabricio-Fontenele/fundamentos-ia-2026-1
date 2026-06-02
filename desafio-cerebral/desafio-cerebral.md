# Desafio Cerebral – Redes Neurais Artificiais

## Questões

1. **Resposta:** O neurônio artificial é a unidade elementar de processamento de uma rede neural e funciona recebendo um conjunto de sinais de entrada $\{x_1, x_2, \dots, x_n\}$, cada um deles ponderado por um peso sináptico correspondente $\{w_1, w_2, \dots, w_n\}$. Inicialmente ele realiza a combinação linear dessas entradas ponderadas e subtrai o limiar de ativação $\theta$, obtendo o potencial de ativação $u = \sum_{i=1}^{n} w_i x_i - \theta$. Esse potencial é então submetido a uma função de ativação $g(u)$, que produz a saída do neurônio $y = g(u)$. Em síntese, o processo consiste em ponderar as entradas pelos pesos, agregar esses valores e compará-los com o limiar e, por fim, aplicar a função de ativação para gerar a resposta. Os pesos e o limiar são justamente os parâmetros ajustados ao longo do treinamento da rede.

<br>

2. **Resposta:** As funções de ativação têm como objetivo principal limitar a saída do neurônio dentro de uma faixa de valores adequada, como entre 0 e 1 ou entre -1 e 1, evitando que a resposta assuma magnitudes excessivas. Além disso, elas introduzem não-linearidade ao modelo, característica fundamental para que a rede consiga mapear relações complexas entre entradas e saídas, pois sem essa não-linearidade uma rede de múltiplas camadas se reduziria a uma simples transformação linear equivalente a um único neurônio. Por fim, é a função de ativação que decide o estado de ativação do neurônio, definindo se e com que intensidade ele dispara em função do potencial de ativação recebido.

<br>

3. **Resposta:** No neurônio biológico, os dendritos recebem os sinais provenientes de outros neurônios, e essa função corresponde, no modelo artificial, às entradas $x_i$. As sinapses, que regulam a intensidade com que cada estímulo é transmitido, equivalem aos pesos sinápticos $w_i$. O corpo celular (soma), que integra todos os estímulos recebidos, corresponde ao somatório da combinação linear $\sum w_i x_i$, enquanto o limiar de disparo do neurônio biológico equivale ao limiar de ativação $\theta$. O mecanismo de disparo do potencial de ação, que determina se o neurônio biológico será ativado, é representado pela função de ativação $g(u)$, e o axônio, responsável por transmitir o sinal resultante, corresponde à saída $y$. Assim como o neurônio biológico capta os impulsos, os integra e dispara um sinal quando ultrapassa um limiar, o neurônio artificial soma suas entradas ponderadas e produz uma saída conforme o limiar e a função de ativação.

<br>

4. **Resposta:** O limiar de ativação $\theta$ define o valor mínimo que a combinação linear das entradas precisa atingir para que o neurônio produza uma saída ativa, e sua importância reside em deslocar a fronteira de decisão do neurônio, conferindo-lhe um grau de liberdade adicional. Sem o limiar, a fronteira de separação seria obrigada a passar pela origem do espaço de entradas, o que limitaria severamente os problemas que poderiam ser resolvidos. Com ele, a superfície de decisão pode ser posicionada em qualquer região do espaço, aumentando significativamente a flexibilidade e a capacidade de classificação da rede.

<br>

5. **Resposta:** A adaptação por experiência consiste na capacidade da rede de ajustar seus parâmetros internos, ou seja, os pesos sinápticos e os limiares, a partir da apresentação sucessiva de exemplos durante o treinamento; a rede aprende de forma iterativa, refinando seus parâmetros à medida que acumula experiência com os dados, de modo análogo ao aprendizado por tentativa e ajuste. Já a capacidade de generalização é a habilidade que a rede, depois de treinada, possui de produzir respostas corretas e coerentes para entradas que não foram apresentadas durante o treinamento, indicando que ela não apenas memoriza os exemplos vistos, mas extrai a relação subjacente entre eles, conseguindo tratar adequadamente padrões novos e desconhecidos.

<br>

6. **Resposta:** Ambas pertencem à família das funções sigmoidais e compartilham características matemáticas relevantes: são funções contínuas, monotonicamente crescentes, limitadas (saturáveis nos extremos) e diferenciáveis em todo o seu domínio, propriedade essencial para os algoritmos de treinamento baseados em gradiente, como o backpropagation. Ambas possuem formato em "S" e suas derivadas podem ser convenientemente expressas em função da própria saída da função. A função logística é dada por $g(u) = \frac{1}{1 + e^{-\beta u}}$ e tem imagem no intervalo aberto entre 0 e 1, sendo sempre positiva. A tangente hiperbólica é dada por $g(u) = \frac{1 - e^{-\beta u}}{1 + e^{-\beta u}}$, com imagem no intervalo entre -1 e 1, sendo uma função ímpar, simétrica em relação à origem, o que lhe permite produzir saídas negativas. Em ambas, o parâmetro $\beta$ controla a inclinação da curva.

<br>

7. **Resposta:** Para a função logística $g(u) = \frac{1}{1 + e^{-\beta u}}$, a derivada de primeira ordem é $g'(u) = \beta \cdot g(u) \cdot \big(1 - g(u)\big)$, que para $\beta = 1$ se reduz a $g'(u) = g(u)\big(1 - g(u)\big)$. Para a tangente hiperbólica $g(u) = \frac{1 - e^{-\beta u}}{1 + e^{-\beta u}}$, a derivada é $g'(u) = \frac{\beta}{2}\big(1 - g(u)^2\big)$. Em ambos os casos verifica-se a vantagem prática de a derivada poder ser escrita em termos da própria saída $g(u)$, o que economiza cálculos durante o treinamento da rede.

<br>

8. **Resposta:** Embora as duas funções sejam matematicamente equivalentes em capacidade de mapeamento, já que uma é uma transformação afim da outra, na implementação física em hardware alguns aspectos influenciam a escolha. O principal é a faixa de saída e a alimentação exigida: a função logística produz apenas valores positivos, entre 0 e 1, o que é conveniente para circuitos que operam somente com tensões positivas, usando uma fonte de alimentação unipolar; já a tangente hiperbólica produz valores entre -1 e 1, exigindo uma fonte de alimentação simétrica, capaz de fornecer tensões positivas e negativas, o que aumenta a complexidade e o custo do circuito. Representar valores negativos requer componentes adicionais, de modo que optar pela logística tende a simplificar o projeto eletrônico, enquanto a tangente hiperbólica, por ser centrada em zero, costuma ser preferida quando se busca melhor desempenho ou convergência mais rápida, fazendo da seleção um compromisso entre simplicidade de circuito e ganho de desempenho.

<br>

9. **Resposta:** Apesar de cada neurônio biológico ser muito mais lento que uma operação eletrônica, atuando na faixa de milissegundos enquanto os componentes de um computador operam em nanossegundos, o cérebro humano supera o computador em diversas tarefas por causa de seu maciço paralelismo. O cérebro possui cerca de 10¹¹ neurônios, cada um conectado a milhares de outros, e todos processam a informação simultaneamente, de forma paralela e distribuída. Um microcomputador convencional, por outro lado, processa as instruções de maneira essencialmente sequencial, ou com paralelismo bastante limitado. Dessa forma, em tarefas como reconhecimento de padrões, visão e linguagem, a arquitetura massivamente paralela do cérebro compensa amplamente a lentidão de seus elementos individuais, produzindo resultados mais rápidos do que a abordagem sequencial do computador.

<br>

10. **Resposta:** As redes neurais artificiais são aplicadas principalmente em problemas de classificação e reconhecimento de padrões, como o reconhecimento de caracteres, de faces, de voz e o diagnóstico médico, e também em aproximação de funções, isto é, regressão e ajuste de curvas. São igualmente empregadas em previsão de séries temporais, como na previsão de demanda, de cotações financeiras ou de condições climáticas, em otimização de sistemas sujeitos a restrições, em memórias associativas capazes de recuperar informações a partir de dados parciais ou ruidosos, além de agrupamento de dados e controle de processos.

<br>

11. **Resposta:** Na aprendizagem por lote, o ajuste dos pesos ocorre somente após a apresentação de todos os padrões do conjunto de treinamento, utilizando a soma ou a média dos erros; isso traz como vantagens uma estimativa mais precisa e estável da direção do gradiente e uma convergência mais suave e menos sensível à ordem de apresentação das amostras, mas tem como desvantagens a maior necessidade de memória, já que é preciso acumular informações de todo o conjunto, e atualizações menos frequentes, o que pode tornar o treinamento mais lento em conjuntos muito grandes. Na aprendizagem padrão-por-padrão, ao contrário, os pesos são ajustados após cada amostra apresentada, o que reduz a exigência de memória, torna as atualizações mais frequentes e a convergência inicial geralmente mais rápida, além de a aleatoriedade introduzida poder ajudar a escapar de mínimos locais; em contrapartida, a trajetória de convergência tende a ser mais ruidosa e instável, sensível à ordem de apresentação dos padrões, podendo oscilar em torno da solução.

<br>

12. **Resposta:** A informação não é pertinente. O número de entradas, que neste caso é quatro, não impõe o número de neurônios da primeira camada escondida, pois as entradas são apenas os sinais aplicados à rede, e cada neurônio da primeira camada recebe todas essas quatro entradas. A quantidade de neurônios em uma camada escondida é um parâmetro de projeto que depende da complexidade do problema e costuma ser determinada empiricamente, por experimentação e validação. O que é de fato fixado pelo problema é o número de neurônios na camada de saída, que deve corresponder ao número de saídas desejadas, ou seja, dois neurônios neste caso.

<br>

13. **Resposta:** A determinação do número de camadas escondidas é influenciada pela complexidade e pela não-linearidade do problema, já que problemas mais complexos podem exigir mais camadas, e pelo tipo de fronteira de decisão necessária para separar as classes. Também influenciam a quantidade e a qualidade dos dados de treinamento disponíveis, o risco de overfitting, pois camadas e neurônios em excesso prejudicam a generalização e levam a rede a memorizar ruído, o custo computacional e o tempo de treinamento aceitáveis, bem como a precisão exigida na resposta. Na prática, recomenda-se começar com poucas camadas e aumentar gradualmente apenas quando necessário, sendo frequente que uma única camada escondida já seja suficiente para a maioria dos problemas.

<br>

14. **Resposta:** A diferença estrutural fundamental está na presença de realimentação. Nas redes feedforward, o fluxo de informação é unidirecional, seguindo sempre da camada de entrada em direção à de saída, sem ciclos ou laços de retorno, de modo que a saída de um neurônio nunca alimenta neurônios da mesma camada ou de camadas anteriores. Já nas redes recorrentes existem laços de realimentação, isto é, as saídas de neurônios de camadas posteriores, ou de uma mesma camada, podem ser reaplicadas como entradas de neurônios anteriores ou deles próprios, o que cria uma memória e uma dinâmica temporal na rede e faz com que suas respostas dependam não apenas da entrada atual, mas também de estados anteriores.

<br>

15. **Resposta:** As redes neurais recorrentes são essenciais em aplicações que envolvem dependência temporal ou sequencial e processos dinâmicos, como a previsão de séries temporais, o processamento de sinais, a identificação e o controle de sistemas dinâmicos, o reconhecimento de voz e de fala e o processamento de linguagem natural, incluindo tradução e análise de texto. Também são empregadas em memórias associativas e em problemas de otimização, como na rede de Hopfield, e, de modo geral, em qualquer problema no qual a saída atual dependa do histórico das entradas anteriores.

<br>

16. **Resposta:**

    ```mermaid
    flowchart LR
        X["Entrada (x)"] --> RN["Rede Neural<br/>(pesos e limiar)"]
        RN -->|"saída obtida (y)"| C{"Comparador<br/>erro = d - y"}
        D["Saída desejada (d)"] --> C
        C -->|"erro (e)"| AL["Algoritmo de aprendizado<br/>(ajuste de pesos e limiares)"]
        AL -->|"atualiza pesos"| RN
    ```

    No treinamento supervisionado, para cada padrão de entrada existe uma saída desejada conhecida, fornecida por um "professor". A rede produz uma saída que é comparada com a desejada, gerando um erro; esse erro realimenta o algoritmo de aprendizado, que ajusta os pesos e limiares de modo a minimizá-lo, e o ciclo se repete até que o erro fique abaixo de um critério aceitável.

<br>

17. **Resposta:** O método ou paradigma de treinamento é a estratégia geral pela qual a rede aprende, definindo a natureza da informação disponível durante o aprendizado, como ocorre nos treinamentos supervisionado, não-supervisionado e com reforço. O algoritmo de aprendizado, por sua vez, é o procedimento ou conjunto de regras matemáticas específicas que efetivamente realiza o ajuste dos pesos e limiares dentro de um determinado método, como a regra de Hebb, a regra Delta e o backpropagation. Já a época de treinamento corresponde a uma apresentação completa de todos os padrões do conjunto de treinamento à rede, sendo que o treinamento normalmente requer várias épocas até alcançar a convergência.

<br>

18. **Resposta:** No treinamento supervisionado dispõe-se, para cada padrão de entrada, da respectiva saída desejada, ou seja, do rótulo ou alvo, e o aprendizado é guiado pelo erro entre a saída produzida e a desejada, o que o torna adequado a problemas de classificação e aproximação de funções, como no Perceptron e no MLP treinado por backpropagation. No treinamento não-supervisionado não existem saídas desejadas conhecidas, de modo que a rede deve descobrir por conta própria as regularidades, similaridades e agrupamentos presentes nos dados de entrada, organizando-os por semelhança, como ocorre nos mapas auto-organizáveis de Kohonen e nas redes ART. A diferença central, portanto, está na presença ou ausência de um professor, isto é, de rótulos orientando o ajuste dos parâmetros.

<br>

19. **Resposta:** No treinamento por reforço não existe a saída desejada exata, mas apenas um sinal de avaliação, na forma de recompensa ou punição, que indica se a resposta da rede foi boa ou ruim. Tomando como exemplo um robô que aprende a navegar por um ambiente desviando de obstáculos, o critério de desempenho poderia atribuir uma recompensa positiva sempre que o robô avançasse em direção ao objetivo sem colidir e uma punição, ou recompensa negativa, sempre que colidisse ou se afastasse do alvo. A cada ação, esse sinal escalar de reforço orienta o ajuste dos pesos e limiares, reforçando as conexões associadas a ações que aumentam a recompensa acumulada e enfraquecendo aquelas que geram punição, de maneira a maximizar a recompensa total obtida ao longo do tempo.

<br>

20. **Resposta:** A regra de Hebb postula que a conexão entre dois neurônios é reforçada quando ambos estão simultaneamente ativos, e no contexto do Perceptron esse princípio é aplicado de forma corretiva, de modo que os pesos só são ajustados quando a rede comete um erro de classificação. O ajuste segue a expressão $w_i^{novo} = w_i^{atual} + \eta \cdot (d - y) \cdot x_i$, na qual $\eta$ é a taxa de aprendizado, $d$ é a saída desejada, $y$ é a saída obtida e $x_i$ é a entrada, sendo o limiar atualizado de forma análoga ao se tratá-lo como o peso de uma entrada fixa igual a $-1$. Quando $d = y$, ou seja, quando há acerto, o termo $(d - y)$ é nulo e nenhum ajuste ocorre; quando há erro, os pesos são incrementados ou decrementados na proporção das entradas, deslocando a fronteira de decisão para corrigir a classificação. Esse processo se repete época após época até que todos os padrões sejam classificados corretamente.

<br>

21. **Resposta:** A taxa de aprendizado $\eta$ controla o tamanho do passo de ajuste dos pesos. Valores muito altos provocam passos grandes que fazem o erro oscilar em torno do mínimo sem estabilizar, podendo até divergir, enquanto valores muito baixos tornam a convergência excessivamente lenta. Os gráficos a seguir ilustram esses comportamentos:

    ```mermaid
    xychart-beta
        title "Erro x épocas para diferentes taxas de aprendizado"
        x-axis "Épocas" [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        y-axis "Erro" 0 --> 10
        line [9, 2, 8, 1, 7, 2, 8, 1, 7, 2]
        line [9, 8.5, 8, 7.6, 7.2, 6.9, 6.6, 6.3, 6.1, 5.9]
        line [9, 6, 4, 2.5, 1.5, 0.8, 0.4, 0.2, 0.1, 0]
    ```

    No gráfico, a primeira linha (que sobe e desce repetidamente) representa $\eta$ muito alto, com o erro oscilando sem estabilizar; a segunda, que decresce muito devagar, representa $\eta$ muito baixo, de convergência lenta; e a terceira, que cai de forma suave até zero, representa um $\eta$ adequado.

    Quando $\eta$ é inapropriadamente alto, a correção ultrapassa repetidamente a fronteira ideal, e a reta de separação fica saltando de um lado para outro entre as classes, impedindo a convergência; com um valor adequado, o erro decresce de forma estável até zero.

<br>

22. **Resposta:** O Perceptron de camada única computa uma combinação linear das entradas seguida de uma função de ativação degrau, ou seja, $y = g\!\left(\sum w_i x_i - \theta\right)$, e sua fronteira de decisão é definida pelo conjunto de pontos em que o potencial de ativação é nulo, isto é, $\sum w_i x_i - \theta = 0$, que é a equação de um hiperplano: uma reta em duas dimensões, um plano em três e assim por diante. Como o Perceptron só pode posicionar e orientar esse hiperplano, ele só consegue separar classes que possam ser divididas por uma superfície linear. Por isso, problemas não-linearmente separáveis, como o clássico XOR, não podem ser resolvidos por um único Perceptron, já que nenhuma reta separa corretamente as classes, sendo necessário acrescentar camadas escondidas, como no Perceptron de múltiplas camadas.

<br>

23. **Resposta:** Incorporar o limiar $\theta$ ao vetor de pesos, técnica conhecida como bias, é importante porque unifica e simplifica o tratamento matemático e computacional do neurônio. Para isso, define-se uma entrada fixa adicional $x_0 = -1$ e associa-se a ela um peso $w_0 = \theta$, de modo que o potencial de ativação passa a ser escrito como um único produto interno, $u = \sum_{i=0}^{n} w_i x_i$, com $x_0 = -1$ e $w_0 = \theta$. Com isso, o limiar passa a ser ajustado pelo mesmo algoritmo de aprendizado dos demais pesos, sem necessidade de uma regra de atualização separada, o código fica mais elegante e eficiente, pois toda a operação se reduz a uma multiplicação de vetores, e fica facilitada a vetorização e o uso de bibliotecas de álgebra linear, otimizando o desempenho computacional.

<br>

24. **Resposta:** Como o Perceptron só converge se as classes forem linearmente separáveis, uma estratégia prática consiste em treinar o Perceptron com o conjunto de amostras estabelecendo um número máximo de épocas como critério de parada e, em seguida, observar o comportamento da convergência. Se a rede classificar todas as amostras corretamente, atingindo erro zero dentro de um número finito de épocas, isso comprova, pelo Teorema da Convergência do Perceptron, que o problema é linearmente separável e que o Perceptron é aplicável. Se, mesmo após atingir o número máximo de épocas, o erro continuar oscilando sem zerar, há forte indício de que o problema não é linearmente separável e de que o Perceptron simples não é adequado. Complementarmente, pode-se realizar a inspeção visual do gráfico dos dados quando há poucas dimensões, buscando uma reta separadora, ou aplicar técnicas analíticas como a Programação Linear para testar formalmente a separabilidade; concluindo-se pela não-separabilidade, recomenda-se migrar para um modelo mais robusto como o MLP.

<br>

25. **Resposta:** Não é correto fazer essa afirmação. Embora ambas as redes convirjam, desde que o problema seja linearmente separável, o número de épocas até a convergência geralmente será diferente, pois depende de fatores específicos de cada implementação, como a inicialização dos pesos e do limiar, normalmente feita de forma aleatória, o valor adotado para a taxa de aprendizado $\eta$ e a ordem de apresentação das amostras de treinamento. Como esses fatores tendem a diferir entre os dois projetistas, as trajetórias de ajuste dos pesos serão distintas e, por consequência, o número de épocas necessário para convergir muito provavelmente não será o mesmo.

<br>

26. **Resposta:** Não necessariamente. Ainda que ambas tenham convergido e classifiquem corretamente todo o conjunto de treinamento, elas podem ter encontrado fronteiras de decisão diferentes, pois em um problema linearmente separável existem infinitas retas capazes de separar as classes de treinamento. Para as dez novas amostras, que não foram vistas no treinamento, especialmente as situadas próximas à fronteira de separação, as duas redes podem produzir classificações divergentes, justamente por terem fronteiras posicionadas de modo distinto; já para amostras bem afastadas da região de fronteira, os resultados tendem a coincidir. Portanto, não se pode garantir que os resultados sejam idênticos.

<br>

27. **Resposta:** Sim, é necessário. No Perceptron, ao ajustar os pesos para corrigir a única amostra mal classificada, a fronteira de decisão é deslocada e reorientada, e esse deslocamento pode fazer com que amostras antes classificadas corretamente passem a ser classificadas de forma errada. Por isso, o critério de parada exige que todas as amostras sejam classificadas corretamente em uma mesma época, sem que nenhum ajuste seja necessário. Dessa forma, mesmo restando apenas uma amostra com erro, é preciso ajustar os pesos e reapresentar o conjunto completo das cinquenta amostras na próxima época, a fim de verificar se a convergência foi de fato alcançada.

<br>

28. **Resposta:** Não é possível aplicar o Perceptron simples a este problema. As amostras da classe A, situadas nos pontos (0,75; 0,75) e (0,25; 0,25), ocupam os cantos de uma das diagonais do quadrado, enquanto as amostras da classe B, nos pontos (0,75; 0,25) e (0,25; 0,75), ocupam os cantos da outra diagonal. Essa disposição corresponde exatamente ao padrão do problema XOR, o OU-exclusivo, que é não-linearmente separável, pois não existe nenhuma reta capaz de separar as duas amostras da classe A das duas amostras da classe B. Como o Perceptron só resolve problemas linearmente separáveis, ele não converge neste caso, e a solução exigiria uma rede com pelo menos uma camada escondida, isto é, um Perceptron de múltiplas camadas.

<br>

29. **Resposta:** Com o limiar de ativação nulo, ou seja, com $\theta = 0$, a equação da fronteira de decisão torna-se $\sum w_i x_i = 0$, o que obriga o hiperplano separador a passar pela origem do espaço de entradas e elimina um grau de liberdade do modelo, de modo que a fronteira pode ser rotacionada pela alteração dos pesos, mas não pode ser deslocada para longe da origem. Disso decorre uma perda de capacidade de classificação, pois problemas cuja fronteira de separação ótima não passa pela origem tornam-se impossíveis de resolver corretamente, mesmo quando são linearmente separáveis, como no caso de classes situadas todas em uma mesma região afastada da origem. Há também uma redução da flexibilidade geométrica, já que o conjunto de fronteiras possíveis fica restrito apenas às retas e planos que cruzam a origem, e, em consequência, a capacidade de generalização da rede para novas amostras fica comprometida pelo posicionamento inadequado e fixo da fronteira. Em síntese, o limiar é essencial para deslocar a fronteira de decisão, e anulá-lo equivale a amarrar o hiperplano à origem, restringindo severamente a aplicabilidade do Perceptron.

---

## Projeto Prático

### Resultados dos cinco treinamentos

| Treino | Pesos iniciais ($w_1$, $w_2$, $w_3$) | Pesos finais ($w_1$, $w_2$, $w_3$) | Nº de épocas |
| ------ | ------------------------------------- | ----------------------------------- | :----------: |
| T1 | (0,4389; 0,8586; 0,6974) | (1,5524; 2,4594; −0,7305) | 425 |
| T2 | (0,9756; 0,7611; 0,7861) | (1,5920; 2,5395; −0,7485) | 437 |
| T3 | (0,4504; 0,3708; 0,9268) | (1,5941; 2,5330; −0,7493) | 439 |
| T4 | (0,8228; 0,4434; 0,2272) | (1,5333; 2,4680; −0,7312) | 395 |
| T5 | (0,0638; 0,8276; 0,6317) | (1,5538; 2,4592; −0,7304) | 418 |

### Classificação das amostras de teste

| Amostra | $x_1$ | $x_2$ | $x_3$ | $y(T_1)$ | $y(T_2)$ | $y(T_3)$ | $y(T_4)$ | $y(T_5)$ |
| :-----: | -------- | -------- | ------- | :------: | :------: | :------: | :------: | :------: |
| 1 | −0,3665 | 0,0620 | 5,9891 | P2 | P2 | P2 | P2 | P2 |
| 2 | −0,7842 | 1,1267 | 5,5912 | P1 | P1 | P1 | P1 | P1 |
| 3 | 0,3012 | 0,5611 | 5,8234 | P1 | P1 | P1 | P1 | P1 |
| 4 | 0,7757 | 1,0648 | 8,0677 | P1 | P1 | P1 | P1 | P1 |
| 5 | 0,1570 | 0,8028 | 6,3040 | P1 | P1 | P1 | P1 | P1 |
| 6 | −0,7014 | 1,0316 | 3,6005 | P1 | P1 | P1 | P1 | P1 |
| 7 | 0,3748 | 0,1536 | 6,1537 | P2 | P2 | P2 | P2 | P2 |
| 8 | −0,6920 | 0,9404 | 4,4058 | P1 | P1 | P1 | P1 | P1 |
| 9 | −1,3970 | 0,7141 | 4,9263 | P2 | P2 | P2 | P2 | P2 |
| 10 | −1,8842 | −0,2805 | 1,2548 | P2 | P2 | P2 | P2 | P2 |
