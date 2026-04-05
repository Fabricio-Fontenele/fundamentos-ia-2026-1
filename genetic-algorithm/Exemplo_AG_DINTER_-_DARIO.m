%Exemplo de Algoritmo Genético - DINTER
%Aproximação de Funções
%ALUNO:
%   DARIO BRITO CALÇADA


clear all
clc
clear all

NFEFinal = 0;
SRFinal = 0;

numRepeticoes = 100;
for cont = 1:numRepeticoes

    % Definição de parâmetros
    nvars = 2; % Número de variáveis do domínio da função
                    %lb = [-2 -2]; % Lower Bounds para x1 e x2.
                    %ub = [+2 +2]; % Upper Bounds para x1 e x2.
    lb = -2;
    ub = 2;
    SizePop = 100; % Número de indivíduos.
    NumGeracoes = 0;
    NumGeracoesMax = 1000; % Número máximo de gerações.
    alpha = 0.8; %Porcentagem de carga genética do crossover
    NFE = 0;

    %Inicialização da População (Valores Randômicos dentro do Domínio)
    PopIni = zeros(SizePop, (nvars+1));
    [l,c] = size(PopIni);
        for i=1:l  %Indices da população
            for j=1:(c-1) %Indices da população **(ub - lb)*rand(1) - ub ** Outra possibilidade
                PopIni(i,j) = lb + (ub - lb).*rand(1,1);
            end
        end
   
    %Avaliação de cada Candidato (Fitness Calc)
    for i=1:l  %Indices da população
        x1 = PopIni(i,1);
        x2 = PopIni(i,2);
        PopIni(i,c) = (1 + ((x1+x2+1)^2) * (19 - 14*x1 + 3*(x1^2) - 14*x2 + 6*x1*x2 + 3*(x2^2)))*(30 + ((2*x1 - 3*x2)^2)*(18 - 32*x1 + 12*(x1^2) + 48*x2 - 36*x1*x2 + 27*(x2^2)));
        NFE = NFE + 1;
    end
    PopAtual = PopIni;

    %Critério de Terminação (GP Menor valor de fitness não se altera por 20 vezes)
    MinFitAtual = min(PopAtual(:,3));
    MinFitAnterior = -10e4;
    ContFitRep = 0; %Contador de Fitness Repetitivo

    fprintf('Menor Fitness %0.5f \ns', MinFitAtual);
    
    Filhos = zeros(SizePop, (nvars+1)); %População de Filhos


    %Repetição Principal (Gerações)
    while ((ContFitRep < 20) && (NumGeracoes < NumGeracoesMax))
        MinFitAnterior = MinFitAtual;

        for i=1:(SizePop)
            %Seleção de pais
        
            %1º PAI
            Pai1 = zeros(1, c);
            Pai1 = PopAtual(randi(100,1,1),:);
        
            Pai2 = zeros(1,c);
            Pai2 = PopAtual(randi(100,1,1),:);
                
            PaiSel1 = zeros(1, c);
            if Pai1(1,c) < Pai2(1,c) %Critério Eletivo de Seleção
                PaiSel1 = Pai1;
            else
                PaiSel1 = Pai2;
            end
        
            %2º PAI
            Pai1 = PopAtual(randi(100,1,1),:);
            Pai2 = PopAtual(randi(100,1,1),:);
        
            PaiSel2 = zeros(1, c);
            if Pai1(1,c) < Pai2(1,c) %Critério Eletivo de Seleção
                PaiSel2 = Pai1;
            else
                PaiSel2 = Pai2;
            end
        
            TaxaCross = rand(1);        %Taxa de CrossOver 90%
            if TaxaCross < 0.9
                if (PaiSel1(1,c) < PaiSel2(1,c))                        %Aplica carga genética do melhor pai
                    Filhos(i,1) = (PaiSel1(1,1) * alpha) + (PaiSel2(1,1)*(1 - alpha));
                    Filhos(i,2) = (PaiSel1(1,2) * alpha) + (PaiSel2(1,2)*(1 - alpha));
                else
                    Filhos(i,1) = (PaiSel2(1,1) * alpha) + (PaiSel1(1,1)*(1 - alpha));
                    Filhos(i,2) = (PaiSel2(1,2) * alpha) + (PaiSel1(1,2)*(1 - alpha));
                end
            else
                if PaiSel1(1,c) < PaiSel2(1,c)
                    Filhos(i,:) = PaiSel1(1,:);
                else
                    Filhos(i,:) = PaiSel2(1,:);
                end
        
            end
        end
        %Finaliza a Criação dos Filhos
        clear TaxaCross;
        
        %Mutação
        TaxaMut = rand(1); %Taxa de Mutação de 50%
        if TaxaMut < 0.5
            Filhos(i,randi(2,1,1)) = lb + (ub - lb).*rand(1,1);
        end
        clear TaxaMut;
        
        %Avaliação de NovosCandidatos (Fitness Calc)
        for i=1:l  %Indices da população
            x1 = Filhos(i,1);
            x2 = Filhos(i,2);
            Filhos(i,c) = (1 + ((x1+x2+1)^2) * (19 - 14*x1 + 3*(x1^2) - 14*x2 + 6*x1*x2 + 3*(x2^2)))*(30 + ((2*x1 - 3*x2)^2)*(18 - 32*x1 + 12*(x1^2) + 48*x2 - 36*x1*x2 + 27*(x2^2)));
            NFE = NFE + 1;
        end
        
        PopAtual = Filhos;
        
        %Seleção de Novos Indivíduos Não foi aplicada pois estamos
        %substituindo toda a geração anterior pela atual
        
        
        NumGeracoes = NumGeracoes + 1;  %Contador de Gerações
        MinFitAtual = min(PopAtual(:,3)); %Menor Fitness Atualizado
        
        fprintf('O Número de Gerações é: %d \ns', NumGeracoes);
        fprintf('Menor Fitness %0.5f \ns', MinFitAtual);
        
        
        if MinFitAtual == MinFitAnterior
            ContFitRep = ContFitRep + 1;
        else
            ContFitRep = 0;
        end
    end
    
    if abs(MinFitAtual - 3) < 0.01
        SRFinal = SRFinal + 1;
    end  
end

NFEFinal = NFE/numRepeticoes; %Calcula a média dos NFEs
