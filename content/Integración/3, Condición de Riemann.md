# Integral superior e inferior.

Consideramos integradores $\alpha$ monótonos crecientes en $[a,b]$, aunque puede extenderse a $\alpha$ de variación acotada, pues son resta de monótonas crecientes.

## Sumas superiores e inferiores

<span class="defn">Definición:</span> Consideramos una partición $P$ de $[a,b]$, tomamos el intervalo $I_k = [x_k, x_{k-1}]$ y los valores $$m_k = \inf \{f(x) : x\in I_k\} \qquad \text{y} \qquad M_k = \sup \{f(x) : x\in I_k\}$$

<span class="defn">Definición:</span> Se definen las 
- **sumas superiores**: $U(P) = U(P,f,\alpha) = \sum_{k=1}^n M_k \Delta_k \alpha$
- **sumas inferiores**: $L(P) = L(P,f,\alpha) = \sum_{k=1}^n m_k \Delta_k \alpha$.

Como $\alpha$ es creciente, $\Delta_k \alpha \ge 0$ y $$ m_k \le f(t_k) \le M_k \\
m_k \Delta_k \alpha \le f(t_k) \Delta_k \alpha \le M_k \Delta_k \alpha\\
L(P,f,\alpha) \le S(P,f,\alpha) \le U(P,f,\alpha)
$$

Si $P$ es un refinamiento de $P_0$ entonces $$
m_k \le m_{k_0}\\
M_k \ge M_{k_0}$$

Queremos eliminar la dependencia de $P$, sean $P_1, P_2$ particiones arbitrarias del $I$ y sea $P = P_1 \cup P_2$, como $P_1, P_2 \sube P$ y toda suma inferior es menor o igual que toda suma superior: $$
L(P_1) \le L(P) \le U(P) \le U(P_2)\\
L(P_1) \le U(P_2)$$ 

<span class="teor">7.15 Teorema:</span> Si $\alpha \uparrow$ en $[a,b]$, entonces:
1. Si $P'\supe P$ se tiene que $$\begin{align*}
U(P',f,\alpha) \le U(P,f,\alpha) & \quad & L(P,f,\alpha) \le L(P',f,\alpha)\end{align*}$$
2. Para todo par de particiones $$L(P_1,f,\alpha) \le U(P_2,f,\alpha)$$

## Integral inferior y superior 

<span class="defn">7.16 Definición:</span> Si $\alpha \uparrow$ en $[a,b]$:
- La **integral superior** de Stieltjes de $f$ respecto de $\alpha$ se define como $$\overline{\kern-0.5em\int_a}^{\ b} f \ d\alpha = \inf \{ U(P,f,\alpha) : P \text{ es partición de } [a,b]\}$$
- a **integral inferior** de Stieltjes de $f$ respecto de $\alpha$ se define como $$\underline{\int\kern-0.5em} _{\ a}^{\ \ \ b} f \ d\alpha = \sup \{ L(P,f,\alpha) : P \text{ es partición de } [a,b]\}$$

### 7.12 Propiedades

<span class="teor">Proposición:</span> Si $c \in (a,b)$, Tenemos las propiedades,
1. $\displaystyle \ \overline{\kern-0.5em\int_a}^{\ b} f \ d\alpha = \ \overline{\kern-0.5em\int_a}^{\ c} f \ d\alpha + \ \overline{\kern-0.5em\int_c}^{\ b} f \ d\alpha$
   - $\displaystyle \underline{\int\kern-0.5em} _{\ a}^{\ \ \ b} f \ d\alpha = \underline{\int\kern-0.5em} _{\ a}^{\ \ \ c} f \ d\alpha + \underline{\int\kern-0.5em} _{\ c}^{\ \ \ b} f \ d\alpha$
2. $\displaystyle \ \overline{\kern-0.5em\int_a}^{\ b} (f+g) \ d\alpha \le \ \overline{\kern-0.5em\int_a}^{\ b} f \ d\alpha + \ \overline{\kern-0.5em\int_a}^{\ b} g \ d\alpha$
   - $\displaystyle \underline{\int\kern-0.5em} _{\ a}^{\ \ \ b} (f+g) \ d\alpha \ge \underline{\int\kern-0.5em} _{\ a}^{\ \ \ b} f \ d\alpha + \underline{\int\kern-0.5em} _{\ a}^{\ \ \ b} g \ d\alpha$

En algunos casos se tienen desigualdades estrictas, usar la función de Dirichlet.

# Condición de Riemann

<span class="defn">Definición:</span> Diremos que $f$ **satisface la condición de Riemann** si para todo $\epsilon>0$ existe una partición $P_\epsilon$ tal que $$ 0 \le U(P,f,\alpha)-L(P,f,\alpha) < \epsilon$$ para todo $P \supe P_\epsilon$

<span class="nota">Nota:</span>  Basta ver que para todo $\epsilon >0$ existe $P_\epsilon$ tal que $ U(P)-L(P) < \epsilon$. Pues, si tenemos $P \supe P_\epsilon$, como es refinamiento se tiene $$ L(P_\epsilon) \le L(P) \qquad \text{y} \qquad U(P) \le L(P_\epsilon)\\
-L(P) \le -L(P_\epsilon)\\
U(P) - L(P) \le U(P_\epsilon) - L(P_\epsilon) < \epsilon\\
0 \le U(P_\epsilon) - L(P_\epsilon) < \epsilon$$

## Teorema de equivalencias 
<span class="teor">7.19 Teorema:</span> Si $\alpha \uparrow$ en $[a,b]$, son equivalentes:
1. $f \in R(\alpha)$
2. $f$ satisface la condición de Riemann
3. $\displaystyle \overline{\kern-0.5em\int_a}^{\ b} f \ d\alpha = \underline{\int\kern-0.5em} _{\ a}^{\ \ \ b} f \ d\alpha$

<span class="teor">Corolario:</span> Sea $f$ continua en $[a,b]$, $\alpha $ monótona creciente, entonces $f\in R(\alpha)$

<span class="teor">Corolario:</span> Si  $f$ continua en $[a,b]$, entonces $f$ es Riemann integrable
Tomando $\alpha(x) = x$

<span class="teor">Corolario:</span> Si $f$ es monótona creciente y $\alpha$ es continua en $[a,b]$, entonces $f\in R(\alpha)$

<span class="teor">Corolario:</span> Si $f$ es de variación acotada en $I=[a,b]$, entonces $f$ es Riemann integrable

<span class="nota">Nota:</span> $f$ puede tener una cantidad enumerable de discontinuidades.

<span class="teor">Teorema:</span> Si $f \in R(\alpha)$ y $\alpha$ es de variación acotada, entonces $$f \in R(V_\alpha)$$ donde $V_\alpha$ es la función de variación de $\alpha$ y además $$ \int_a^b f\ d\alpha = \int_a^b f\ d(V_\alpha) - \int_a^b f\ d(V_\alpha - \alpha) \tag*{$\dblcolon$}$$

## Composición del integrando
<span class="teor">Teorema:</span> Sea $f \in R(\alpha)$ en $I = [a,b]$, $\alpha$ de VA en $I$ y sea $\phi$ continua en $$I_\phi = [ \inf \{f(x) : x \in I\}, \sup \{f(x) : x \in I\}]$$ Entonces $\phi(f(x)) \in R(\alpha)$ <span style="float: right;">$\dblcolon$</span>

## Teoremas de comparación

<span class="teor">7.21 Teorema:</span> Supongamos que $\alpha \uparrow$ en $[a,b]$. Si $f \in R(\alpha)$ en $[a,b]$, entonces $|f| \in  R(\alpha)$ en $[a,b]$ y se tiene $$ \left| \int_a^b f\ d\alpha \right| \le \int_a^b |f|\ d\alpha \tag*{$\dblcolon$}$$

- Pero si $\alpha \downarrow$ en general no se tiene dicha desigualdad. En este caso vale:  $$ \left| \int_a^b f\ d\alpha \right| \le \int_a^b |f|\ dV_\alpha \le M V_\alpha(b)$$ con $M = \sup|f|$

<span class="teor">7.22 Teorema:</span> Supongamos que $\alpha \uparrow$ en $[a,b]$. Si $f \in R(\alpha)$ en $[a,b]$, entonces $f^2 \in R(\alpha)$ en $[a,b]$ <span style="float: right;">$\dblcolon$</span>

<span class="teor">7.23 Teorema:</span> Supongamos que $\alpha \uparrow$ en $[a,b]$. Si $f \in R(\alpha)$ y $g \in R(\alpha)$ en $[a,b]$, entonces $f\cdot g \in R(\alpha)$ <span style="float: right;">$\dblcolon$</span>