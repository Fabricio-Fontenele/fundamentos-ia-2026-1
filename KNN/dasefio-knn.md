| id  | SepalLengthCm | SepalWidthCm | PetalLengthCm | PetalWidthCm | Species         |
| --- | ------------- | ------------ | ------------- | ------------ | --------------- |
| 63  | 6             | 2.2          | 4             | 1            | Iris-versicolor |
| 105 | 6.5           | 3            | 5.8           | 2.2          | Iris-virginica  |
| 83  | 5.8           | 2.7          | 3.9           | 1.2          | Iris-versicolor |
| 33  | 5.2           | 4.1          | 1.5           | 0.1          | Iris-setosa     |
| 148 | 6.5           | 3            | 5.2           | 2            | Iris-virginica  |
| 6   | 5.4           | 3.9          | 1.7           | 0.4          | Iris-setosa     |
| 124 | 6.3           | 2.7          | 4.9           | 1.8          | Iris-virginica  |
| 40  | 5.1           | 3.4          | 1.5           | 0.2          | Iris-setosa     |

## Utilizando a distância euclidiana para classificar as seguintes instâncias utiliando 2-NN, 3-NN e 4-NN:

| Instância | SepalLengthCm | SepalWidthCm | PetalLengthCm | PetalWidthCm |
| --------- | ------------- | ------------ | ------------- | ------------ |
| #7        | 4,6           | 3,4          | 1,4           | 0,3          |
| #72       | 6,1           | 2,8          | 4             | 1,3          |



## Resposta:
$d(t, 1) = \sqrt{(4.6 - 6.0)^2 + (3.4 - 2.2)^2 + (1.4 - 4.0)^2 + (0.3 - 1)^2} = \sqrt{1.96 + 1.44 + 6.76 + 0.49} = \sqrt{10.65} \approx 3.26$

$d(t, 2) = \sqrt{(4.6 - 6.5)^2 + (3.4 - 3)^2 + (1.4 - 5.8)^2 + (0.3 - 2.2)^2} = \sqrt{3.61 + 0.16 + 19.36 + 3.61} = \sqrt{26.74} \approx 5.17$

$d(t, 3) = \sqrt{(4.6 - 5.8)^2 + (3.4 - 2.7)^2 + (1.4 - 3.9)^2 + (0.3 - 1.2)^2} = \sqrt{1.44 + 0.49 + 6.25 + 0.81} = \sqrt{8.99} \approx 3$

$d(t, 4) = \sqrt{(4.6 - 5.2)^2 + (3.4 - 4.1)^2 + (1.4 - 1.5)^2 + (0.3 - 0.1)^2} = \sqrt{0.36 + 0.49 + 0.01 + 0.04} = \sqrt{0.9} \approx 0.95$

$d(t, 5) = \sqrt{(4.6 - 6.5)^2 + (3.4 - 3)^2 + (1.4 - 5.2)^2 + (0.3 - 2)^2} = \sqrt{3.61 + 0.16 + 14.44 + 2.89} = \sqrt{21.1} \approx 4.59$

$d(t, 6) = \sqrt{(4.6 - 5.4)^2 + (3.4 - 3.9)^2 + (1.4 - 1.7)^2 + (0.3 - 0.4)^2} = \sqrt{0.64 + 0.25 + 0.09 + 0.01} = \sqrt{0.99} \approx 0.99$

$d(t, 7) = \sqrt{(4.6 - 6.3)^2 + (3.4 - 2.7)^2 + (1.4 - 4.9)^2 + (0.3 - 1.8)^2} = \sqrt{2.89 + 0.49 + 12.25 + 2.25} = \sqrt{17.88} \approx 4.23$

$d(t, 8) = \sqrt{(4.6 - 5.1)^2 + (3.4 - 3.4)^2 + (1.4 - 1.5)^2 + (0.3 - 0.2)^2} = \sqrt{0.25 + 0 + 0.01 + 0.01} = \sqrt{0.27} \approx 0.52$

| Ranking | ID  | Distância | Species         |
| ------- | --- | --------- | --------------- |
| 1       | 40  | 0.52      | Iris-setosa     |
| 2       | 33  | 0.95      | Iris-setosa     |
| 3       | 6   | 0.99      | Iris-setosa     |
| 4       | 83  | 3         | Iris-versicolor |
| 5       | 63  | 3.26      | Iris-versicolor |
| 6       | 124 | 4.23      | Iris-virginica  |
| 7       | 148 | 4.59      | Iris-virginica  |
| 8       | 105 | 5.17      | Iris-virginica  |

1- NN: Iris-setosa
2- NN: Iris-setosa
3- NN: Iris-setosa
4- NN: Iris-setosa

$d(t, 1) = \sqrt{(6.1 - 6.0)^2 + (2.8 - 2.2)^2 + (4 - 4)^2 + (1.3 - 1)^2} = \sqrt{0.01 + 0.36 + 0 + 0.09} = \sqrt{0.46} \approx 0.68$

$d(t, 2) = \sqrt{(6.1 - 6.5)^2 + (2.8 - 3)^2 + (4 - 5.8 )^2 + (1.3 - 2.2)^2} = \sqrt{0.16 + 0.04 + 3.24 + 0.81} = \sqrt{4.25} \approx 2.06$

$d(t, 3) = \sqrt{(6.1 - 5.8)^2 + (2.8 - 2.7)^2 + (4 - 3.9)^2 + (1.3 - 1.2)^2} = \sqrt{0.09 + 0.01 + 0.01 + 0.01} = \sqrt{0.12} \approx 0.35$

$d(t, 4) = \sqrt{(6.1 - 5.2)^2 + (2.8 - 4.1)^2 + (4 - 1.5)^2 + (1.3 - 0.2)^2} = \sqrt{0.81 + 1.69 + 6.25 + 1.21} = \sqrt{9.96} \approx 3.16$

$d(t, 5) = \sqrt{(6.1 - 6.5)^2 + (2.8 - 3)^2 + (4 - 5.2)^2 + (1.3 - 2)^2} = \sqrt{0.16 + 0.04 + 1.44 + 0.49} = \sqrt{1.93} \approx 1.39$

$d(t, 6) = \sqrt{(6.1 - 5.4)^2 + (2.8 - 3.9)^2 + (4 - 1.7)^2 + (1.3 - 0.4)^2} = \sqrt{0.49 + 1.21 + 5.29 + 0.81} = \sqrt{7.8} \approx 2.79$

$d(t, 7) = \sqrt{(6.1 - 6.3)^2 + (2.8 - 2.7)^2 + (4 - 4.9)^2 + (1.3 - 1.8)^2} = \sqrt{0.04 + 0.01 + 0.81 + 0.25} = \sqrt{1.11} \approx 1.05$

$d(t, 8) = \sqrt{(6.1 - 5.1)^2 + (2.8 - 3.4)^2 + (4 - 1.5)^2 + (1.3 - 0.2)^2} = \sqrt{1 + 0.36 + 6.25 + 1.21} = \sqrt{8.62} \approx 2.94$

| Ranking | ID  | Distância | Species         |
| ------- | --- | --------- | --------------- |
| 1       | 83  | 0.35      | Iris-versicolor |
| 2       | 63  | 0.68      | Iris-versicolor |
| 3       | 7   | 1.05      | Iris-setosa     |
| 4       | 124 | 1.39      | Iris-virginica  |
| 5       | 105 | 2.06      | Iris-virginica  |
| 6       | 6   | 2.79      | Iris-setosa     |
| 7       | 148 | 2.94      | Iris-virginica  |
| 8       | 40  | 3.16      | Iris-versicolor |

1- NN: Iris-versicolor
2- NN: Iris-versicolor
3- NN: Iris-versicolor
4- NN: Iris-versicolor

