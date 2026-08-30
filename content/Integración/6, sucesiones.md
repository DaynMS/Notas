# Sucesiones numéricas

## Conceptos relevantes

<span class="defn">Definición:</span> $$\begin{align*}
    a =  (a_n)_{n \in \N} : \N &\to \R , (\mathbb C)\\
    n &\mapsto a_n
\end{align*}$$ se dice una sucesión real (compleja)

<span class="defn">Definición:</span> Se dice que $(a_n)_{n \in \N}$ **converge** a $p\in \R$ si y sólo si para todo $\epsilon > 0$, existe $N \in \N$ tal que $$|a_n - p | < \epsilon$$ siempre que $n \ge N$ 

<span class="defn">Definición:</span> $(a_{n_k})_{k \in \N}$ se dice **subsucesión** de $(a_n)_{n \in \N}$ si y sólo si $$n_1 < n_2< \cdots < n_k < n_{k+1}$$

<span class="defn">Definición:</span> Una **sucesión** es **de Cauchy** si para todo $\epsilon > 0$, existe $N \in \N$ tal que $$|a_m - a_n| < \epsilon$$ para todo $m,n \ge N$

<span class="teor">Teorema:</span> **de completez**
Toda sucesión de Cauchy es convergente en $\R$ o $\mathbb{C}$

<span class="teor">Teorema:</span> Toda sucesión monótona acotada es convergente

<span class="teor">Teorema:</span>  Toda sucesión acotada tiene una subsucesión convergente


<span class="teor">Teorema:</span> Si $S = \{a_n : n\ge 1\}$ es acotado entonces $S' \ne \empty$ y es cerrado.

$S'$ es la adherencia. En particular $S'$ será cerrado pues si $x \in S'$ existe una subsucesión de $S$ que converge a $x$, y como $S$ era acotado, el límite $x$ también lo es.
Por lo tanto $S'$ es compacto.

Existe $M = \max S'$ y $m = \min S'$ para los cuales se tienen los valores de límite de sucesiones convergentes mayor y menor respectivamente.

<span class="defn">Definición:</span> Una sucesión $(a_n)_{n \in \N} \sube \R$ **diverge** hacia $+\infty$ si para cada $M>0$, existe un entero $N_M$ tal que $$ a_n > M \quad \text{siempre que } n\ge N_M$$ En este caso diremos que $\lim_{n\to \infty} a_n = +\infty$

### Algunas sucesiones conocidas:
- $a_n = e^{1/n}$, entonces $a_n \to 1$
- $a_n = \sin (n)$ diverge, pero es acotada, luego existen $n_k$ tales que $(a_{n_k})_k$ converge.


## Límite superior e inferior

<span class="defn">Definición:</span> Sea $(a_n)_{n \in N}$ en $\R$ se define el límite superior de $(a_n)_{n \in \N}$ $$\overline{\lim}\ a_n = \lim_{n\to \infty} (\sup \{ a_k : k \ge n\})$$ pudiendo ser un valor no finito.

Es decreciente $$\begin{align*}
    b_1 &=  \sup \{ a_k : k \ge 1\}\\
    \ge b_2 &=  \sup \{ a_k : k \ge 2\}\\
    \vdots\\
    \ge b_n &=  \sup \{ a_k : k \ge n\}\\
\end{align*}$$

Si $a_n$ no es acotada superiormente $\overline{\lim}\ a_n = \infty$

Si $a_n$ es acotada superiormente pero no es acotada inferiormente puede ser finito o $-\infty$

<span class="ejem">Ejemplo:</span> 
- $(a_n)_n = (-n)_n$
  - $\overline{\lim}\ a_n = -\infty$
- $(a_n)_n = \begin{cases}
    1, & n \text{ es par}\\
    -n, & n \text{ es impar}
\end{cases}$
  - $\overline{\lim}\ a_n = 1$

<span class="defn">Definición:</span> Análogamente se tiene el límite inferior de $a_n$ $$\underline{\lim}\ a_n = \lim_{n\to \infty} (\inf \{ a_k : k \ge n\})$$

Es creciente $$\begin{align*}
    c_1 &=  \inf \{ a_k : k \ge 1\}\\
    \le c_2 &=  \inf \{ a_k : k \ge 2\}\\
    \vdots\\
    \le c_n &=  \inf \{ a_k : k \ge n\}\\
\end{align*}$$

<span class="teor">Teorema:</span> **Caracterización del límite superior**
Si el límite superior es finito $\overline{\lim}\ a_n = b$
1. Dado $\epsilon >0$, existe $N$ tal que para todo $n \ge N$ $$
a_n < b + \epsilon$$
1. Dado $\epsilon>0$ existen infinitos $a_n$ tal que $$b-\epsilon < a_n$$

De manera análoga, para $\underline{\lim}\ a_n = c$
1. Dado $\epsilon >0$, existe $N$ tal que para todo $n \ge N$ $$a_n > c - \epsilon$$
2. Dado $\epsilon>0$ existen infinitos $a_n$ tal que $$c + \epsilon > a_n \tag*{$\dblcolon$}$$

![](material/limite+epsilon.png)

<span class="teor">Teorema:</span> Si $\overline{\lim}\ a_n = \underline{\lim}\ a_n = L$ entonces $$\lim_{n \to \infty} a_n = L$$

<span class="nota">Nota:</span> Por construcción: $$\begin{align*}
    c_n &\le b_n\\ 
    \lim c_n &\le \lim b_n\\
    \underline{\lim}\ a_n & \le \overline{\lim} a_n
\end{align*}$$

<span class="teor">Proposición:</span> Sean $\{a_n\}_n, \{b_n\}_n$ definidas en $\R$ entonces
1. $\overline{\lim}\{a_n + b_n\} \le \overline{\lim}\{a_n\} + \overline{\lim}\{b_n\}$
2. $\underline{\lim}\{a_n + b_n\} \le \underline{\lim}\{a_n\} + \underline{\lim}\{b_n\}$

<span class="teor">Proposición:</span> Sea $\{a_n\}_n$ en $\R$, si $b = \overline{\lim} \{a_n\}$ es finito, se tiene que para todo $\epsilon >0$ existen infinitos $a_n$ tales que $$b-\epsilon < a_n \le b $$

Además, el límite superior es el mayor límite de subsucesiones convergentes.
De manera análoga para el límite inferior.

<span class="teor">8.4 Proposición:</span> Dadas dos sucesiones  $\{a_n\}, \{b_n\}$ tales que $a_n \le b_n$ para todo $n\le 1$ entonces $$ \overline{\lim} \{a_n\} \le \overline{\lim}\{b_n\}$$

Análogo para el límite inferior.

<span class="nota">Nota:</span> Si $\{a_n\}_{n \in \N}$ es una sucesión de complejos, esto es $a_n = x_n + y_ni$ con $x_n,y_n \in \R$, entonces $\{a_n\}_{n \in \N}$ converge a $L \in \mathbb C$ si y sólo si $\{x_n\}_{n \in \N}, \{y_n\}_{n \in \N}$ convergen a $X,Y \in \R$ respectivamente. Además $$L = X + iY$$

## Sucesiones monótonas

Se dice que una sucesión es monótona si es creciente o decreciente

<span class="teor">8.6 Teorema:</span> Una sucesión monótona converge si y sólo si está acotada
