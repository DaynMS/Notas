# Funciones de Variación Acotada

## Variación de una función

La variación de una función se relaciona con la longitud del recorrido de la función en $\R$

<span class="defn">Definición:</span> Sea $f : [a,b] \to \R$ una función monótona, se define la **variación** de $f$ como $$
V_f(a,b) = | f(b) - f(a)|
$$

### Caso general
<span class="defn">Definición:</span>  Sea $f : [a,b] \to \R$ una función, consideremos $P = \{ x_0 = a, x_1, \dots, x_{n-1}, x_n = b \}$ una partición de $[a,b]$, donde $a\le x_{k-1} \le x_k \le b$ para $k = 1,\dots, n$. Se define la **variación de $f$ en $[a,b]$ relativa a $P$** como $$
V_f(a,b;P) = \sum_{k=1}^n | f(x_k) - f(x_{k-1})|
$$

Denotamos $\Delta_kf = f(x_k) - f(x_{k-1})$. Así $V_f(a,b;P) = \sum_{k=1}^n |\Delta_kf|$

<span class="teor">Propiedad:</span> Si $P'$ es un refinamiento de $P$ (esto es $P \sube P'$) entonces $$
V_f(a,b;P) \le V_f(a,b;P')
$$

<span class="defn">Definición:</span> La **variación** de $f$ en el intervalo $[a,b]$ se define como $$
V_f(a,b) = \sup_P V_f(a,b;P)
$$

<span class="teor">Proposición:</span> Si $f$ es una función monótona creciente $$ V_f(a,b) = f(b) - f(a)$$ Si $f$ es decreciente, $V_f(a,b) = f(a) - f(b)$
<details>
<summary>Demostración</summary>
<div class="content">

Si $f$ es creciente, sea $P$ una partición de $[a,b]$. Por definición: $$
\begin{align*}
    V_f(a,b;P) &= \sum_{k=1}^n | f(x_k) - f(x_{k-1})|\\
    &= \sum_{k=1}^n (f(x_k) - f(x_{k-1}))\\
    &= f(x_1) - f(x_0) + f(x_2) - f(x_1) + \cdots + f(x_n) - f(x_{n-1})\\
    &= f(x_n) - f(x_0)\\
    &= f(b) - f(a)
\end{align*}$$ como no depende de $P$, es decir que se tiene para cualquier partición, corresponde a la variación. 
</div>
</details>

<span class="nota">Nota:</span> Si $f$ es continua y creciente, la variación corresponde a la longitud del intervalo de imágenes.

## Definición de una función de variación acotada

<span class="defn">Definición:</span> $f$ se dice de **variación acotada** en $I = [a,b]$ si existe $M>0$ tal que para toda partición $P$ de $I$ se tiene que $$
V_f(a,b;P) \le M$$

<span class="teor">Proposición:</span> Si $f$ es de VA (variación acotada) en $I = [a,b]$, entonces $f$ es acotada en $I$.

<span class="teor">Teorema:</span> Sea $f : [a,b] \to \R$ derivable, tal que existe $L\in \R$ para el cual $|f'(x)| \le L$ para todo $x\in I$, entonces $f$ es VA en $I$.

<span class="nota">Nota:</span> esta es una condición suficiente pero no necesaria.
Hay funciones discontinuas, por lo tanto no derivables, que son de VA.

<span class="teor">Corolario:</span> Toda $f \in \mathcal C^1 (I)$ es de VA

### Propiedades respecto a sumas y productos
<span class="teor">Teorema:</span> Sean $f,g$ de VA en $I=[a,b]$ y sea $\alpha \in \R$, entonces:
1. $f+\alpha g$ es VA y $$V_{f+\alpha g} \le V_f + |\alpha|V_g
$$
2. $f\cdot g$ es VA y existen $A,B \in \R$ tales que $$V_{f \cdot g} \le AV_f + BV_g$$ donde $$
A = \sup \{ |g(x)| : x \in [a,b]\}, \qquad B = \sup \{ |f(x)| : x \in [a,b]\}
$$ 
3. Si existe $c$ tal que $0 < c \le |f(x)|$ para todo $x\in I$, entonces $\frac 1 f$ es VA y $$
V_{\frac 1 f} \le \frac{1}{c^2}\cdot V_f$$

### Aditividad respecto a intervalos
<span class="teor">Teorema:</span>  Sea $c\in (a,b)$, entonces $$
V_f(a,b) = V_f(a,c) + V_f(b,c)
$$

# Función de variación

<span class="defn">Definición:</span> La  **función de variación** de $f$ de VA en $[a,b]$ se define por: $$
V_f(x) = \begin{cases}
    0; & x=a\\
    V_f(a,x); & x\in (a,b] 
\end{cases}
$$

<span class="teor">Proposición:</span> La funciones $V_f$ y $V_f - f$ son crecientes

<span class="teor">Teorema:</span> $f$ es de VA en $[a,b]$ si y sólo si existen $h_1, h_2$ en $[a,b]$ crecientes en $[a,b]$, tales que $$
f = h_1 - h_2
$$
Esto es que toda función de VA es resta de dos funciones crecientes

La representación no es única. Además puede tomarse estrictamente creciente, por ejemplo: $$
h_1 = V_f + x ; \qquad h_2 = V_f + x - f$$

<span class="teor">Proposición:</span> Sea $f$ monótona en $[a,b]$. Sea $D$ el conjunto de discontinuidades en $[a,b]$, entonces $D$ es numerable. 

<span class="teor">Proposición:</span> Sea $f$ de VA en $[a,b]$ y sea $V_f(x)$ la función de variación. Entonces $f$ es continua en $c \in (a,b)$ si y sólo si $V_f$ es continua en $c$.

<span class="teor">Corolario:</span> Si $f$ es de VA, $f$ es continua en $[a,b]$ si y sólo si $V_f$ es continua en $[a,b]$.

<span class="teor">Corolario:</span> Sea $f$ continua en $[a,b]$, $f$ es de VA si y sólo si existen $h_1, h_2$ crecientes y continuas tales que $f = h_1 - h_2$.

# Aplicación de VA

<span class="defn">Definición:</span>  Sea $f: [a,b] \to \R^n$ continua, se define la curva asociada a $f$, $$C_f := \{ f(t) : t \in [a,b]\}$$ $f$ se dice un **camino**, **trayectoria** o **parametrización** de $C_f$.

El objetivo es determinar condiciones de $f$ para que $C_f$ tenga longitud finita

Sea $P = \{ x_0 = a, x_1, \dots, x_{n-1}, x_m = b \}$ una partición de $[a,b]$. Denotamos por $\Lambda_f(P)$ a la longitud de la poligonal inducida por $P$: $$
\Lambda_f(P) = \sum_{k=1}^m \| f(t_k) - f(t_{k-1})\|
$$ (norma de diferencia de vectores)
Además, existen $n$ funciones reales $f_j$ continuas en $[a,b]$, tales que $$
f(t) = ( f_1(t), f_2(t), \dots, f_n(t))
$$, luego $$
\Lambda_f(P) = \sum_{k=1}^m \left( \sum_{j=1}^n ( f_j(t_k) - f_j(t_{k-1}))^2  \right)^{1/2}$$

## Curvas rectificables

<span class="defn">Definición:</span> $c_f$ se dice de **longitud finita** si existe $M>0$ tal que $\Lambda_f(P)  \le M$ para toda partición $P$ de $[a,b]$. Definimos la **longitud** de $c_f$ por $$
L= \sup_P \Lambda_f(P)
$$. En tal caso se dice que $c_f$ es **rectificable**.

<span class="teor">Teorema:</span> $c_f$ camino de $f$ en $[a,b]$ es rectificable si y sólo si $f_j$ es de VA para todo $j = 1, \dots, n$ y además para todo $j$ se cumple $$
V_{f_j} \le L \le \sum_{j=1}^n V_{f_j}
$$

<span class="nota">Nota:</span> $$
a \le (a^2 + b^2) ^{1/2}\\
a^2 + b^2 \le (a+b)^2$$

## Longitud de caminos

<span class="defn">Definición:</span> Un camino $f:[a,b] \to \R^n$ se dice regular si y sólo si $$f \in \mathcal C^1([a,b])$$ para este caso se puede mostrar que $$L = \int_a^b \| f'(t) \| \ dt$$ <span class="duda">ejercicio</span> 

<span class="teor">Proposición:</span> Aditividad de intervalo.
Sea  $f:[a,b] \to \R^n$ un camino regular y $c \in (a,b)$, entonces $$L_a^b = L_a^c + L_c^b$$

## Función longitud de arco
<span class="defn">Definición:</span> Sea $f$ un camino rectificable en $[a,b]$, la longitud de arco está dada por: $$ S(x) =
\begin{cases}
    0, & x = a\\
    L_a^x, &x \in (a,b]
\end{cases}
$$

### Propiedades
1. $S$ es creciente y continua en $[a,b]$
2. $S$ es estrictamente creciente si no existe un subintervalo donde $f$ sea constante