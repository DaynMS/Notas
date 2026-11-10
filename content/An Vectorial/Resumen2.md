# Definición de integrabilidad

$$
m_S(f) = \inf\{ f(x) : x \in S \} \\
M_S(f) = \sup\{ f(x) : x \in S \}
$$

Sumas superiores e inferiores

$$
L(f, P) = \sum_S m_S(f) \cdot \mathcal v(S)
$$

$$
U(f, P) = \sum_S M_S(f) \cdot \mathcal v(S)
$$

Integral inferior y superior

$$
\begin{align*}
    \overline{\kern-0.5em\int_A} f &= 
    \inf\{U(f,P) : P \text{ es partición}\}\\
    \underline{\int\kern-0.5em} _{\ A} f &= \sup \{L(f,P) : P \text{ es partición}\}    
\end{align*}
$$

>[!definicion] Definición
>Una función es integrable si $\quad \overline{\kern-0.5em\int_A} f = \underline{\int\kern-0.5em} _{\ A} f$

>[!teorema] Condición inmediata de integrabilidad 
>Una función acotada $f: A\sube \R^n \to \R$ es integrable en $A$ (un rectángulo) si y sólo si para cada $\epsilon>0$ existe una partición $P$ de $A$ tal que
>$$
>U(f,P) - L(f,P) < \epsilon
>$$ 

>[!proposicion] Proposición
>Toda función $f: A \to \R$ continua sobre un rectángulo cerrado $A$ es integrable.

>[!definicion] Definición
>Dado $S$ un subrectángulo de $A$ definido por la partición $P$, la oscilación de $f$ es $S$ es:
>$$
>\omega(f,S)= M_s(f) - m_S(f)
>$$

>[!proposicion] Proposición
>$f:A \to \R$ es integrable en $A$ si y sólo si para todo $\epsilon>0$ existe una partición $P$ de $A$ tal que
>$$
> \sum_S \omega(f,S) v(S) < \epsilon
>$$

## Propiedades de la integral

>[!teorema] 
> Sean $A \sub \R^n$ un rectángulo y $f,g : A \to \R$ funciones acotadas e integrables en $A$. Entonces:
>1. $f+g$ es integrable y $\int_A (f + g) = \int_A f + \int_A g$. Además, si $c\in R$,  $cf$ es integrable y $\int_A cf = c \int_A f$
>2. $f$ es integrable en $A$ si y sólo si $f|_S$ es integrable en cada subrectángulo determinado por $P$, además $\int_A f  = \sum_S \left( \int_S f|_S \right)$
>3. Si $f \le g$ en $A$, entonces $\int_A f \le \int_A g$
>4. $|f|$ es integrable en $A$ y $\left| \int_A f\right| \le \int_A |f|$
>5. Si $|g| \ge k > 0$ en $A$, entonces $f / g$ es integrable en $A$
>6. $\int_A c = c v(A)$, donde $v(A)$ es su volumen y $c$ es una constante.

>[!teorema] Teorema del Valor medio para integrales
>Si $A$ es un rectángulo y $f: A \to \R$ es continua, entonces existe $x_0 \in A$ tal que 
>$$
>\int_A f = f(x_0)v(A)
>$$

# Medida y contenido cero 

## Medida cero

Para cada $\epsilon$ existe una cobertura **contable** por rectángulos abiertos $U_i$ o cerrados tal que 
$$
\sum_{i=1}^\infty v(U_i) < \epsilon
$$
- un subconjunto de un conjunto con medida cero tiene medida cero 
- un conjunto contable tiene medida cero 
- unión contable de conjuntos con medida cero tiene medida cero

## Contenido cero
Para cada $\epsilon$ existe una cobertura **finita** por rectángulos abiertos $U_i$ o cerrados tal que 
$$
\sum_{i=1}^\infty v(U_i) < \epsilon
$$

>[!teorema] 
>Si $a<b$, entonces $[a,b] \sub \R$ no tiene contenido cero.

Tener contenido cero implica medida cero, pero en general no se tiene al contrario.

>[!teorema] 
>Si $A \sub \R^n$ es compacto y tiene medida cero, entonces tiene contenido cero.

## Oscilación

Sea $M$ el máximo $f(x)$ y $m$ el mínimo $f(x)$ en una bola con centro $a$ y radio $\delta$, la osclación es 
$$
\mathcal O (f,a) = \lim_{\delta \to 0} M-m
$$

- $f$ es continua en $a$ si y sólo si $\mathcal O (f,a) = 0$.


>[!lema] 
>Sean $\epsilon>0$, $A \sub \R^n$ un rectángulo cerrado y $f: A \to \R$ una función acotada tal que $ \mathcal O (f,x) < \epsilon$ para todo $x \in A$. Entonces existe una partición $P$ de $A$ tal que
>$$
> U(f,P) - L(f,P) < \epsilon \cdot v(A)
>$$

>[!teorema] 
>Sean $A \sub \R^n$ un rectángulo cerrado y $f: A \to \R$ una función acotada. Sea $B = \{ x \in A : f \text{ es discontinua en } x\}$. Entonces $f$ es integrable en $A$ si y sólo si $B$ es un conjunto de medida cero

# Funciones integrables

Si $C \sub A$, para algún rectángulo cerrado $A$ de $\R^n$ y $f: A \to \R$ es acotada, entonces la **integral** de $f$ sobre $C $ se define como
$$
\int_{C } f = \int_A f \chi_{C} 
$$

>[!teorema] 
>$\chi_{C}|_A: A \to \R$ es integrable si y sólo si la frontera de $C$ tiene medida cero. 

## $J-$medible 

- Un conjunto acotado $C$ tal que su frontera tiene medida cero se dice **Jordan-medible**
- $\int_{C} 1$ se llama el **contenido** o **volumen** $n-$**dimensional** de $C$

# Teorema de Fubini 

Si $f: A \times B \to \R$ es una función acotada e integrable con $A \sub \R^n$ y $B\sub \R^m$ rectángulos cerrados entonces la integral se puede calcular de manera iterada
$$
\int_A f = \int_{a_n}^{b_n} \left( \cdots \left( \int_{a_1}^{b_1} f(x^1, \dots, x^n)\ dx^1 \right) \cdots \right)\ dx^n
$$

# Integral extendida

## Particiones de la unidad

>[!teorema] 
>Sean $A \sub \R^m$ y $\cal O$ un cubrimiento abierto de $A$. Entonces existe una colección $\Phi$ de funciones $\phi$ de clase $\cal C^\infty$, definidas en un conjunto abierto que contiene a $A$ con las siguientes propiedades:
>1. Para cada $x \in A$ se tiene que $0 \le \phi(x) \le 1$
>2. Para cada $x \in A$ existe un conjunto abierto $V_x$ (que tiene a $x$) tal que $\phi(V_x)= \{0\}$ salvo para un número finito de funciones $\phi \in \Phi$
>3. Para cada $x \in A$: $\sum_{\phi \in \Phi} \phi(x) = 1$. La suma es finita como consecuencia de 2.
>4. Para cada $\phi \in \Phi$ existe un conjunto abierto $U \in \cal O$ tal que $\phi \equiv 0$ por fuera de algún conjunto cerrado contenido en $U$. 

- Si $C \sub A$ es compacto sólo un número finito de las $\phi \in \Phi$ no se anulan en $C$.
- Un conjunto abierto se puede aproximar mediante **compactos encajados**.

## Definición extendida de integrabilidad

>[!definicion] Definición
>Sea $f:A \to \R$ con:
>- $A \sub \R^n$ abierto
>- el conjunto de discontinuidades tiene medida cero
>- para cada $x$ en $A$, $f$ es acotada en algún abierto que tiene a $x$
>- $\cal O$ un cubrimiento admisible de $A$
>- $\Phi$ es una partición de la unidad subordinada a $\cal O$
>
>decimos que $f$ es **integrable en el sentido extendido** si converge:
>$$
>\sum_{\phi \in \Phi} \int_A \phi|f|
>$$

- No depende de la partición ni el cubrimiento
- El valor de la integral será $\sum_{\phi \in \Phi} \int_A \phi f$ (sin el valor absoluto)
- Si $A,f$ son acotadas, entonces $f$ es integrable en el sentido extendido 

### Relación con la integral normal
- Si la integral normal existe el valor coincide
- Si $A$ es Jordan medible y $f$ acotado entonces la integral extendida y la normal son iguales.

# Teorema del cambio de variable 

>[!teorema] 
>Sean $A \sub \R^n$ un conjunto abierto, $g: A \to \R^n$ una función inyectiva de clase $\cal C^1$ tal que $\mathrm d g (x) \not\equiv 0$ para todo $x \in A$. Si $f: g(A)\sub \R^n \to \R^n$ es una función integrable, entonces
>$$
> \int_{g(A)} f = \int_A (f \circ g) |\mathrm{det}\ \mathrm d g|
>$$


>[!teorema] Teorema de Sard
>Sea $g: A \to \R^n$ de clase $\cal C^1$, con $A$ un abierto y si $B  = \{ x \in A : \mathrm{det} g'(x) = 0 \}$ tiene medida cero, entonces $g(B)$ tiene medida cero.

>[!corolario] 
>Sea $X \sub \R^n$ un compacto Jordan-medible, $h : U \to V$ un difeomorfismo $\cal C^1$ con $U,V$ abiertos de $\R^n$ y $f: h(U) \to \R$ una función integrable. Si $X \sub U$, entonces
>$$
>\int_{h(X)} f = \int_X (f \circ h) |\mathrm{det}\ h'|
>$$

>[!corolario] 
>Sea $T: \R^n \to \R^n$ una función lineal, para todo $X \sub \R^n$ compacto y J-medible se tiene que
>$$
>v(T(X)) = |\mathrm{det}\ T| v(X)
>$$