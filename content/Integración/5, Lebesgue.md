# Criterio de Lebesgue

## Oscilación
Las funciones
Condiciones suficientes pero no necesarias
- $f$ continua
- $f$ de variación acotada

$f$ puede tener infinitas pero enumerables discontinuidades

Queremos determinar condiciones sobre el tamaño de las discontinuidades de $f$ en $[a,b]$ que permitan que $f \in R$

La condición de Riemann se tiene si y sólo si $\sum_k(M_k - m_k) <\epsilon$.
En los puntos de continuidad de $f$, para un refinamiento muy pequeño $$M_k \approx m_k$$
es decir que en $I_k$, $(M_k - m_k)\Delta_k x$ es pequeño.

En los puntos de **discontinuidad** $M_k - m_k \le 2M$, con  $M = \sup\{|f(x)| : x \in [a,b]\}$, luego $$(M_k - m_k)\Delta_k x \le 2M \Delta_k x$$ así necesitamos que $M$ sea muy pequeña para que $f$ siga siendo R-S integrable.

<span class="defn">7.45 Definición:</span> Sea $f$ acotada en $[a,b]$, si $T \sube [a,b]$ distinto a vacío. Se define la **oscilación** de $f$ en $T$ por $$\Omega_f (T) = \sup\{ f(x) - f(y) : x,y \in T\} \tag*{$\dblcolon$}$$


De la definición se tiene que $0 \le \Omega_f(T) \le 2M < \infty$

Con estos términos, $$
U(P_\epsilon) - L(P_\epsilon) < \epsilon \Leftrightarrow \sum_k  \Omega_f([x_{k-1}, x_k]) \Delta _kx < \epsilon$$ Es decir que si la suma de las oscilaciones por $\Delta_k x$ es pequeña entonces la función es Riemann integrable.

<span class="teor">Proposición:</span> Si $S \sube T$, entonces $\Omega_f(S) \le  \Omega_f(T)$

<span class="defn">Definición:</span> Definimos la **oscilación de $f$ en $c \in [a,b]$** por $$\begin{align*}
    \omega_f(c) &= \lim_{h \to 0+} \Omega_f((c-h, c+h))\\
    &= \inf_{h>0} \Omega_f((c-h, c+h))
\end{align*}$$

Si $c=a$ se toma $\lim_{h \to 0+} \Omega_f((a,a+h))$
Si $c=b$ se toma $\lim_{h \to 0+} \Omega_f((b-h,b))$

<span class="teor">Teorema:</span> $f$ es continua en $c \in [a,b]$ si y sólo si $\omega_f = 0$.
De manera análoga,  $f$ es discontinua en $c \in [a,b]$ si y sólo si $\omega_f \ne 0$.

<span class="teor">7.46 Teorema:</span> Sea $T$ un subonjunto compacto de $[a,b]$ tal que $\omega_f(x) < \epsilon$ para todo $x \in T$. Entonces existe $\delta>0$ tal que para todo $c \in T$ $$\Omega_f(B(c,\delta)) < \epsilon$$ con $B(c,\delta) = (c-\delta, c+\delta)$ <span style="float: right;">$\dblcolon$</span>

- $T$ puede no ser un intervalo cerrado, puede tener puntos aislados, ser unión de cerrados, etc.
- Esto no garantiza que la oscilación sea $0$ si no que sea menor que ese $\epsilon$ fijado.

<span class="teor">7.47 Teorema:</span> Sea $\epsilon>0$, si definimos $J_\epsilon = \{ x \in [a,b] : \omega_f(x) \ge \epsilon \}$, entonces $J_\epsilon$ es compacto.

<span class="nota">Nota:</span> Entonces los puntos de discontinuidad de $f$ deben estar en algún $J_\epsilon$ y en particular si $$
\begin{align*}
    &D := \{ x \in [a,b] : f \text{ es discontinua en }x\}\\
    &D = \bigcup_{n \in \Z^+} J_{\frac 1 n}
\end{align*}$$

## Conjuntos de medida nula

### Medida
<span class="defn">Definición:</span> Sea $I = [a,b]$, la **medida** de $I$ es equivalente a su longitud $$|[a,b]| = b-a\\
|(a,b]|= |[a,b)| = |(a,b)| = b-a$$ si $a=b$ se define $|[a,a]| = 0$

<span class="teor">Propiedades:</span> 
- Si $I = [a,b]$, $J=[c,d]$ y $I \cap J = \empty$ entonces $$|[a,b] \cup [c,d]| = |[a,b]| + |[c,d]|$$
- Si $\displaystyle S=\bigcup_{k=1}^n  I_k$ tal que $I_k \cap I_j = \empty$ para $k\ne j$, entonces $$|S| = \sum_{k=1}^n |I_k|$$
- Si $\displaystyle S=\bigcup_{k=1}^\infty  I_k$ tal que $I_k \cap I_j = \empty$ para $k\ne j$, entonces $$|S| = \sum_{k=1}^\infty |I_k|$$

### Medida cero
<span class="defn">Definición:</span> Sea $S \sube \R$ y sea $\{I_k\}_{k \in \N}$ tal que $I_k$ es abierto para todo $k>1$ y $S \sube \bigcup_{k=1}^\infty  I_k$, entonces $\{I_k\}_{k \in \N}$ se dice un cubrimiento de Lebesgue de $S$.

<span class="defn">Definición:</span> Sea $S \sube \R$ se dice que es un **conjunto de medida cero** si y sólo si $$ \inf_{\{I_k\}_{k \in \N}}\sum_{k \in \N}|I_k| = 0
$$

- Apostol: Un conjunto $S \sube \R$ posee medida cero si, para cada $\epsilon >0$, existe un recubrimiento numerable de $S$ por medio de intervalos abiertos, tales que la suma de sus longitudes sea menor que $\epsilon$

<span class="defn">Definición:</span> Se define $m(\empty) = 0$

<span class="teor">7.44 Proposición:</span> Sean $S_n$ con $n=1,2 \dots$ conjuntos de medida cero, entonces $\bigcup_{n=1}^\infty S_n$ tiene medida cero.

<span class="teor">Proposición:</span> Sea $S$ un subconjunto cerrado del intervalo $[a,b]$, entonces $m(S) = 0$ si y sólo si para todo $\epsilon>0$ existe $P$ partición de $[a,b]$ tal que $$\sum_{k^*} \Delta_k x < \epsilon$$ donde $k^*$ son los $k$ tales que $S \cap [x_{k-1} , x_k] \ne \empty$ <span style="float: right;">$\dblcolon$</span>

## Criterio de Lebesgue

<span class="teor">Teorema:</span> $f \in R$ en $[a,b]$ si y sólo si para todo $c>0$ se tiene que si  $J_c = \{ x \in [a,b] : \omega_f(x) \ge c \}$, entonces $m(J_c) = 0$

<span class="teor">7.48 Teorema:</span> **Criterio de Lebesgue**
Sea $f$ acotada en $[a,b]$ y sea $D := \{ x \in [a,b] : f \text{ es discontinua en }x\}$. Entonces $f \in R$ en $[a,b]$ si y sólo si $D$ tiene medida $0$ <span style="float: right;">$\dblcolon$</span>

Es equivalente a que $m(J_{\frac 1 n}) = 0$ para todo $n \ge 1$.

<span class="teor">7.49 Corolario:</span> 
1. Si $f$ es de VA en $[a,b]$ entonces $f \in R$ en $[a,b]$
2. Si $f \in R$ en $[a,b]$ entonces
   - $f \in R$ en $[c,d]$, con $[c,d] \sube [a,b]$
   - $|f| \in R$ en $[a,b]$
   - $f^2 \in R$ en $[a,b]$
   - $fg \in R$ en $[a,b]$ siempre que $g \in R$ en $[a,b]$
3. Si $f,g \in R$ en $[a,b]$, entonces $f/g \in R$ en $[a,b]$ siempre que exista $m >0$ tal que $ m \le |g(x)| $ para todo $x \in [a,b]$
4. Si $f,g$ son acotadas con las mismas discontinuidades, entonces $f \in R$ en $[a,b]$ si y sólo si $g \in R$ en $[a,b]$
5. Sea $g \in R$ en $[a,b]$ si existen $m,M$ tales que $m \le g(x) \le M$ para todo $x \in [a,b]$. Si $f$ es continua en $[m,M]$, entonces $f \circ g \in R$ en $[a,b]$

