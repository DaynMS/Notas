Hay dos tipos:
- supervisados:
  - de clasificación
  - hay etiquetas
  - Lo importante: Si hay un dato nuevo a qué etiqueta pertenece
- no supervisados:
  - de agrupamiento
  - no hay etiquetas
  - Lo importante: Hay grupos o no entre los puntos?

Tenemos datos que son vectores en $\R^p$. $p$ corresponde a las categorías de cada dato.
La escala de las categorías pueden tener valores muy distintos según las unidades usadas, para arreglar eso se normalizan los valores: todo queda entre $0$ y $1$.

## Distancia
- Normalmente se usa la distancia euclideana.
- A veces se usa el coseno del ángulo entre dos datos 
- También se usa la 

# Algoritmos supervisados

## $k-NN$, $k$ vecinos más cercanos

Para un dato agarra los $k$ vecinos más cercanos, y asigna el color que más se repita en ese conjunto.

- Es un modelo lento si hay muchos datos, pues tiene que calcular distancias.
- Hay que escalar las variables a un rango $0-1$, pues se están midiendo distancias y si una variable tiene valores más grandes alterará mucho la distancia.

## Árbol de decisión

### Random forest
Se toma más de un árbol. Se usa el mismo criterio de Gini, pero el orden de las variables varían aleatoriamente.

Utilidad:
- Elige las variables $X_i$ que son importantes para el valor de $Y$
- No necesita escalar a $0-1$
- Funciona con variables categóricas

# Algoritmos no supervisados

## Máquinas de soporte vectorial $SVM$

Cuál es el mejor hiperplano que separa los puntos?

Busca el plano que está más separado de los puntos de ambas clases

Si no se puede crear el hiperplano hay que agregar una dimensión.

## DBSCAN

Define:
- $\epsilon$, con el que se generan bolas
- $m$, número de puntos en la bola. Muestras

Detecta puntos de ruido

Es muy sensible al $\epsilon$