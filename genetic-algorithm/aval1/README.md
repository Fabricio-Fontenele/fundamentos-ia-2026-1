# Algoritmo Genético - Avaliação 1 (IA)

Implementação de um **Algoritmo Genético (AG)** em TypeScript para otimização contínua, com foco em:

- organização orientada a objetos,
- separação por estratégias (seleção, crossover e mutação),
- medição de desempenho via **NFE** (Number of Function Evaluations),
- relatório de **SR** (Success Rate) em múltiplas execuções.

## Objetivo

Resolver problemas de otimização minimizando o valor da função fitness e reportar, por problema:

- dimensão (`n`),
- NFE médio,
- taxa de sucesso (`SR`) para uma tolerância definida.

## Problemas Implementados

- **BF1**: Bohachevsky (`dimension = 2`, domínio `[-50, 50]`)
- **CB3**: Three-Hump Camel Back (`dimension = 2`, domínio `[-5, 5]`)

## Arquitetura

Estrutura principal:

- `src/core/genetic-algorithm.ts`: motor do AG (evolução, elitismo, parada, crossover/mutação)
- `src/main.ts`: configuração dos experimentos e execução do runner
- `src/problems/*.ts`: funções de fitness
- `src/strategies/selection/*.ts`: estratégias de seleção (`RankSelection`, `TournamentSelection`)
- `src/strategies/crossover/*.ts`: operadores de crossover
- `src/strategies/mutation/*.ts`: operadores de mutação
- `src/utils/counting-fitness-function.ts`: decorator para contagem de avaliações (NFE)

### Padrões aplicados

- **Strategy**: seleção, crossover e mutação são intercambiáveis por interface
- **Decorator**: `CountingFitnessFunction` encapsula a função de fitness e conta avaliações
- **Runner orientado a objetos**: `ExperimentRunner` centraliza fluxo de execução e relatório

## Configuração Atual

No arquivo `src/main.ts`:

- `totalRuns = 100`
- `populationSize = 100`
- `maxGenerations = 1000`
- `elitismCount = 2`
- `crossoverRate = 0.9`
- `mutationRate = 0.01`
- tolerância por problema: `0.01`

Combinações de estratégia por caso (injeção por factory):

- **BF1**: `TournamentSelection(3)` + `ArithmeticCrossover` + `SimpleMutation`
- **CB3**: `RankSelection` + `ArithmeticCrossover` + `SimpleMutation`

## Critérios de Parada

O AG para quando ocorre um dos casos:

1. alcança o limite de gerações,
2. fica 20 gerações sem melhoria,
3. encontra solução com `fitness <= tolerância` (parada antecipada, evitando NFE desnecessário).

## Como Executar

Pré-requisitos:

- Node.js `>= 22.12.0`
- Yarn `1.22.x`

Instalar dependências:

```bash
yarn
```

Rodar experimento:

```bash
yarn dev
```

## Exemplo de Saída

```text
Iniciando 100 execucoes para BF1...
...
Iniciando 100 execucoes para CB3...
...

=== RESULTADOS FINAIS ===
| Problem | n    | NFE (media) | SR      |
| :------ | :--- | :---------- | :------ |
| **BF1** | 2    | 902         | 99.00%  |
| **CB3** | 2    | 404         | 100.00% |
```

> Observação: os valores variam entre execuções por causa da natureza estocástica do AG.

## Checagem de Aderência (pedido do professor)

Como o enunciado não está versionado neste repositório, a validação abaixo foi feita com base nos requisitos clássicos da disciplina para AG:

- ✅ Metaheurística AG implementada com população e evolução por gerações
- ✅ Função de fitness para cada problema
- ✅ Operadores genéticos (seleção, crossover, mutação)
- ✅ Elitismo
- ✅ Múltiplas execuções (`totalRuns`)
- ✅ Métricas de avaliação (`SR` e `NFE`)
- ✅ Critério de parada por sucesso (`fitness <= tolerância`)
- ✅ Estrutura orientada a objetos e separação de responsabilidades

Pendências detectadas no projeto:

- ⚠️ O script `yarn type:check` referencia `tsconfig.test.json`, mas esse arquivo não existe no repositório.
  - Estado atual: `yarn dev` funciona normalmente, porém `yarn type:check` falha por configuração ausente.


