# Integral de Riemann - Stieltjes
1. Generaliza la integral de Riemann
2. Permite representar sumas finitas o enumerables (discretas) en términos de ésta integral.
3. Se emplea en la caracterización de espacios duales de funciones continuas.

Suma de Riemann-Stieltjes

$$
 S(P,f, \alpha) = \sum_{k=1}^n f(t_k)\Delta_k\alpha
$$


<span class="defn">Definición:</span> La norma de una partición $P$ es la longitud del mayor de los subintervalos de $P$. Se denota $\| P \|$.
Si $P\sube P'$ entonces $\|P'\| \le \| P \|$

## Definición de la integral de Riemann-Stieltjes

<span class="defn">Definición:</span> Sean $f, \alpha$ definidas en un intervalo $[a,b]$ acotadas, se dice que $f$ es **Riemann-Stieltjes integrable con respecto a $\alpha$** en $[a,b]$ si existe $L$ tal que para cada $\epsilon>0$ existe $P_0$ (partición de $[a,b]$) tal que

$$
\left| \sum_{k=1}^n f(t_k)\cdot(\Delta_k \alpha) - L \right| < \epsilon
$$

para todo $P$ que sea un refinamiento de $P_0$, donde $t_k \in I_k = [x_{k-1}, x_k]$


Si tal $L$ existe, se dice que $f$ es **Riemann integrable** y se escribe $f \in R(\alpha)$. $f$ se dice el integrando y $\alpha$ el integrador. 

$$
L = \int_a^b f(x)\ d\alpha(x) = \int_a^b f\ d\alpha
$$

- Nota: Si $\alpha(x) = x$ (la identidad), la definición corresponde a la integral de Riemann de $f$ en $[a,b]$
- Notación: $S(P,f,\alpha) = \sum_{k=1}^n f(t_k)\cdot(\Delta_k \alpha)$ en $[a,b]$

<span class="teor">Proposición:</span> Si $f \in R(\alpha)$, entonces $L =  \int_a^b f\ d\alpha$ es único <span class="duda">ejercicio</span> (por contradicción)

## Propiedades lineales

<span class="teor">7.2 , 7.4 Proposición:</span> Sean $f,g \in R(\alpha)$, $c\in (a,b)$ y $k \in \R$, entonces:
1. $f+g \in R(\alpha)$ y 

$$
 \int_a^b (f+g) \ d\alpha  = \int_a^b f\ d\alpha + \int_a^b g\ d\alpha
$$

2. $k\cdot f \in R(\alpha)$ y 

$$
 \int_a^b kf\ d\alpha  = k \int_a^b f\ d\alpha
$$

3. 

$$
\int_a^b f\ d\alpha = \int_a^c f\ d\alpha + \int_b^c f\ d\alpha
$$

siempre que dos de las tres integrales existan. <span style="float: right;">$\dblcolon$</span>

<span class="defn">Definición:</span> Si $f \in R(\alpha)$ en $[a,b]$, se define 

$$
 \int_b^a f\ d\alpha = - \int_a^b f\ d\alpha \tag*{$\dblcolon$}
 $$

<span class="teor">7.3 Proposición:</span>
1. Si  $f \in R(\alpha)$ y $c \in \R$, entonces  $f \in R(c \alpha)$ y además 

$$
\int_a^b f\ d(c\alpha) = c \int_a^b f\ d\alpha
$$

2. Si  $f \in R(\alpha_1)$ y $f \in R(\alpha_2)$, entonces  $f \in R(\alpha_1 + \alpha_2)$ y además 

$$
\int_a^b f\ d(\alpha_1 + \alpha_2) = \int_a^b f\ d\alpha_1 + \int_a^b f\ d\alpha_2 \tag*{$\dblcolon$}
$$

<span class="nota">Nota:</span>
- $\Delta_k(c\alpha) = c\alpha(x_k) - c\alpha(x_{k-1}) = c \Delta_k(\alpha)$
- $\Delta_k(\alpha_1 + \alpha_2) = \Delta_k (\alpha_1) + \Delta_k (\alpha_2)$

## Monotonía

<span class="teor">7.20 Proposición:</span> Si  $f_1, f_2 \in R(\alpha)$ y $\alpha$ es creciente, si $f_1 \le f_2$ entonces 

$$
\int_a^b f_1 \ d\alpha \le \int_a^b f_2 \ d\alpha \tag*{$\dblcolon$}
$$

En particular, si $|f(x)| \le M$ para cada $x \in [a,b]$, se tiene que 

$$
-M[\alpha(b) - \alpha(a)] \le \int_a^b f \ d\alpha \le M[\alpha(b) - \alpha(a)]
$$

esto es $|\int_a^b f \ d\alpha| \le M [\alpha(b) - \alpha(a)]$

Además $\int_a^b f\ d\alpha \ge 0$ siempre que $\alpha$ sea creciente y $f(x) \ge 0$ en $[a,b]$

<span class="nota">Nota:</span> Si $\alpha= -x$ y $f=1$, para $I = [a,b]$, entonces 

$$
 \int_a^b f\ d\alpha = \alpha(b) - \alpha(a) = -b + a < 0
$$

## Discontinuidad a derecha

<span class="ejem">Ejemplo:</span>  Sean 

$$
f(x) = \alpha(x) = \begin{cases} 1, & x = a \\ 0, & x\in (a,b]\end{cases}
$$

no es Riemann-Stieltjes integrable
Nótese que $f,\alpha$ son discontinuas a derecha en $a$

Para cada partición, en el primer subintervalo se puede tomar un $t_k$ para el cual $f(t_k) = 0$ o $f(t_k)=1$, así que cada partición tendrá un valor distinto, luego no existe $L$ al cual converja.

<span class="teor">Proposición:</span> Sean $f,\alpha$ definidas en un intervalo $[a,b]$, si existe $c\in (a,b)$ tal que $f,\alpha$ sean discontinuas por derecha en $c$, entonces

$$
f \notin R(\alpha) \tag*{$\dblcolon$}
$$

## Reducción a integral de Riemann

<span class="teor">7.8 Teorema:</span> **Reducción de Riemann-Stieltjes a Riemann**
Si $f \in R(\alpha)$ y $\alpha \in \cal C^1 ([a,b])$, entonces

$$
\int_a^b f \ d\alpha = \int_a^b f\cdot \alpha' \ dx \tag*{$\dblcolon$}
$$

## Integración por partes 

<span class="teor">7.6 Teorema:</span> **Fórmula de integración por partes**
Si  $f \in R(\alpha)$ en $[a,b]$, entonces  $\alpha \in R(f)$ y

$$
\int_a^b f\ d\alpha + \int_a^b \alpha\ df = f(b)\alpha(b) - f(a)\alpha(a) \tag*{$\dblcolon$}
$$

## Cambio de variable (composición)

<span class="teor">7.7 Teorema:</span> Sea $f\in R(\alpha)$ definida en $[a,b]$ y sea $g: [c,d] \to [a,b]$ continua, estrictamente creciente y sobreyectiva, entonces $f \circ g \in R(\alpha \circ g)$ en $[c,d]$ y además

$$
\int_{a=g(c)}^{b=g(d)} f\ d\alpha = \int_c^d f \circ g \ d (\alpha \circ g) \tag*{$\dblcolon$}
$$

$g$ resulta biyectiva, entonces existe su inversa y hay una relación $1-1$ entre las particiones de $[a,b]$ y $[c,d]$, de modo que

$$
g(y_k) = x_k
$$

<span class="nota">Nota:</span> Un caso particular se da si $\alpha(x) = x$ y $g \in \mathcal C^1 ([c,d])$, entonces

$$
\int_a^b f(x) \ dx = \int_c^d f(g(y)) g'(y)\ dy
$$

que coincide con la reducción a integral de Riemann 
 
# Funciones escalonadas como integradores

Si $\alpha$ es constante en el intervalo $[a,b]$, la integral $\int_a^b f\ d\alpha$ es $0$. Porque cada valor $f(t_k)\Delta_k \alpha$ en la sumatoria será igual a $0$.
Pero si $\alpha$ es constante excepto en un punto, la integral puede o no existir.

<span class="teor">7.9 Teorema:</span>  Sea $\alpha$ definida en $[a,b]$ por

$$
\alpha(x) = 
\begin{cases}
    \alpha(a), & a \le x < c\\
    \alpha(c), & x=c\\
    \alpha(b), & c < x \le b    
\end{cases}
$$

con $\alpha(a),\alpha(b), \alpha(c)$ arbitrarios, y sea $f$ continua en $c \in (a,b)$. Entonces $f\in R(\alpha)$ en $[a,b]$ y

$$
\int_a^b f\ d\alpha = f(c)[\alpha(c^+) - \alpha(c^-)] \tag*{$\dblcolon$}
$$


![Texto alternativo](material/escalonada1.png)

Puede remplazarse la hipótesis de continuidad de $f$ en $c$:
- Si $f$ es discontinua a izquierda en $c$, $\alpha$ es continua a izquierda en $c$. 
- Si $f$ es discontinua a derecha en $c$, $\alpha$ es continua a derecha en $c$.

Si $c$ está en los extremos del intervalo:
- Si $c=a$, hacemos $\alpha(c^-) = \alpha(c)$
- Si $c=b$, hacemos $\alpha(c^+) = \alpha(c)$

<span class="nota">Nota:</span> Cambiando un sólo punto de $f$ se altera la integral de Riemann-Stieltjes, pero en la integral de *Riemann* cambiar un número finito de puntos no afecta la integral.

### Reducción de una integral de Riemann-Stieltjes a una suma finita

El intervalo $[a,b]$ se debe partir en los puntos de discontinuidad y la integral será la suma de aplicar la fórmula en cada subintervalo. El factor $[\alpha(c^+) - \alpha(c^-)]$ corresponde al salto de $\alpha$, mientras que $f(c)$ corresponde al punto de discontinuidad.

<span class="teor">7.11 Teorema:</span> Sea $\alpha$ una función escalonada definida en $[a,b]$ con saltos en $x_1, \dots, x_n$ y salto dado por $\alpha_k$. Sea $f$ definida en $[a,b]$ tal que $f,\alpha$ no sean ambas discontinuas a izquierda o derecha en cada $x_k$, entonces $\int_a^b f \ d\alpha$ existe y

$$
\int_a^b f(x) \ d\alpha(x) = \sum_{k=1}^n f(x_k)\alpha_k \tag*{$\dblcolon$}
$$

<span class="ejem">Ejemplo:</span> Si $\alpha$ es parte entera

$$
\int_a^b f(x)\ d\alpha(x) = \int_a^b f(x)\ d[x] = \sum_{\substack{a < n \le b \\ n \in \Z}} f(n)\cdot 1
$$

### Fórmula de Sumación Euler
<span class="teor">7.13 Proposición:</span>  Dada $f\in \cal C^1([a,b])$, entonces

$$
\int_a^b f(x)\ d[x] = \sum_{a < n\le b} f(x) =  \int_a^b f(x) \ dx +  \int_a^b f'(x) (\!(x)\!)\ dx + f(a)(\!(a)\!) - f(b)(\!(b)\!)
$$

donde $(\!(x)\!) = x - [x]$

Si los extremos son enteros:

$$
\sum_{k=a}^b f(k) = 
 \int_a^b f(x)\ dx +  \int_a^b f'(x) \left( x - [x] - \frac 1 2 \right)\ dx + \frac{f(a) + f(b)}{2} \tag*{$\dblcolon$}
$$
