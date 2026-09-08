# Construcción de conjuntos medibles y medida de Lebesgue


Extendemos la noción de longitud de intervalos, si $a<b$ 
$$
l([a,b]) = l((a,b)) = l([a,b)) = l((a,b])
$$
 además 
$$
l((-\infty,\infty)) = l(-\infty,a]) =  l(b, \infty)) = \infty
$$

## Álgebras y sigma álgebras 

<span class="defn">Definición:</span> Sea $\mathcal A \sube \wp (X)$ se dice un **álgebra** si:
1. $\empty, X \in \mathcal A$
2. Si $E \in \mathcal A $ entonces $E^C \in \mathcal A$
3. Si $E_1, \dots, E_n \in \mathcal A$ entonces $\bigcup_{j=1}^n E_j \in \mathcal A$


<span class="defn">Definición:</span> Una medida sobre $\mathcal A \sube \wp (X)$ es una aplicación 
$$
m: \mathcal A \to \R \cup \{ \infty \}
$$
tal que:
1. $m(\empty) = 0$
2. $m(E) \ge 0$ para todo $E \in \mathcal A$
3. Dados $E_{n \ge 1}$ en $\mathcal A$ disyuntos dos a dos y $\bigcup_{n \ge 1} E_n \in \mathcal A$, entonces 
$$
m(\bigcup_{n \ge 1} E_n) = \sum_{n\ge 1} m(E_n)
$$

Se considera que $a + \infty = \infty$

<span class="nota">Nota:</span> $\mathcal A$ definida definida en el ejemplo, con $m = l$ resulta un espacio medible para esta medida.

<span class="teor">Bartle:</span> Además, el espacio de medida $(\R, \mathcal A, m=l)$ resulta $\sigma-$finito, esto es: 
$$
\R = \bigcup{n \in X} (n, n+1], \qquad m((n,n+1]) = 1
$$

<span class="defn">Definición:</span> $\mathcal A \sube \wp (X)$ se dice un $\sigma-$**álgebra** si y sólo si:
1. $\empty, X \in \mathcal A$
2. Si $E \in \mathcal A $ entonces $E^C \in \mathcal A$
3. Dados $(E_n)_{n \ge 1}$ en $\mathcal A$ entonces $\bigcup_{n \ge 1} E_n \in \mathcal A$ 

## Medida exterior
<span class="defn">Definición:</span> Existe una $\sigma-$álgebra $\mathcal A^*$ tal que $\mathcal A \sube \mathcal A^*$, con $\mathcal A \sube \wp(\R)$ y $m^*$ una medida sobre $\mathcal A^*$ tal que, para todo $E \in \mathcal A$, $m^* (E) = m(E)$ y $m^*$ se define por:
Para $B \sube \R$, consideramos todos los cubrimientos de $B$ enumerables de conjuntos en $\mathcal A$, es decir, $B \sube \bigcup_{n \ge 1} E_n$ con $E_n \in \mathcal A$ para todo $n \ge 1$. 
Así, 
$$
m^* (B) = \inf_{\bigcup_{n \ge 1} E_n}\sum_{n \ge 1} m(E_n)
$$

### Propiedades de $m^*$
1. Para todo $B \sube \R$ se tiene 
$$
0 \le m^*(B) \le \infty
$$
2. $m^*(\empty) = 0$
3. Si $A \sube B$ entonces $m^*(A) \le m^* (B)$
4. $m^*$ tiene sub-aditividad enumerable. Esto es, dados $B_n \sube R$, entonces  
$$
m^*(\bigcup_{n \ge 1} B_n) \le \sum_{n \ge 1} m^*(B_n)
$$
5. Si $B \in \mathcal A$, entonces $m^* (B) = m(B) = l(B)$
6. Si $a \in \R$, $m^*(\{ a \}) = 0$
7. $m^*((a,b)) = m((a,b]) = b-a$

En un contexto general, las propiedades 1 a 4 se incluyen como definición de una medida exterior sobre un conjunto $X$

<span class="teor">Proposición:</span> $m^*$ es subaditiva. Esto es  
$$
m^*(\bigcup_{n \ge 1} B_n) \le \sum_{n \ge 1} m^*(B_n)
$$

<span class="nota">Nota:</span> Esta medida exterior no es enumerablemente aditiva ni finitamente aditiva.

Por la subaditividad se tiene:
dados $E,A \sube \R$, como $E = (E\cap A) \cup (E \cap A^C)$ entonces 
$$
m^* (E) \le m^* (E\cap A) + m^*(E \cap A^C)
$$

Para obtener una medida sobre una $\sigma-$álgebra $\mathcal A^*$ con $\mathcal A \sube \mathcal A^*$ sobre $\R$, deben restringirse algunos conjuntos de $\R$. Una forma es considerar la no validez del *Axioma de elección*. Pero dos formas equivalentes de extender $m^*$ y definir conjuntos medibles y la medida de Lebesgue son:

1. Caraithedory: $A \sube \R$ es $m^*-$medible si y sólo si para todo $E \sube \R$ se tiene 
$$
m^* (E) =  m^* (E\cap A) + m^*(E \cap A^C)
$$
esto es, $A$ es $m^*-$medible si divide aditivamente todo subconjunto real.
   - Suponiendo el axioma de elección, existen conjuntos no $m^*-$medibles: existe $A$ tal que existe $E$ que cumplen 
$$
m^* (E) < m^* (E\cap A) + m^*(E \cap A^C)
$$
2. Tao: $A \sube \R$ es $m^*-$medible si y sólo si para todo $\epsilon > 0$, existe $O \sube \R$ abierto tal que $A \sube O$ y
$$
m^* (O - A) < \epsilon
$$
   - En este caso, todo abierto en $\R$ es $m^*-$medible. Es decir, $(a,b) , (-\infty, a), \bigcup_{i \in I} A_i$ con $A_i$ abierto, son $m^*-$medibles

Para esta sigma álgebra: 
$$
\mathcal A ^* = \{ A \sube \R : A \text{ es $m^*-$medible}\}
$$
y la medida de Lebesgue se define por $m(A) = m^*(A)$

<span class="nota">Nota:</span> Todo $A \sube \R$ con $m^*(A) = 0$ es Lebesgue medible y $m(A) = m^*(A)$

Además, si $B \sube A$ y $m(A) = 0$, entonces $B$ es $m^*-$medible y $m(B) = 0$

<span class="teor">Teorema:</span> Si $\mathcal A ^* = \{ A \sube \R : A \text{ es Lebesgue medible}\}$, es una $\sigma-$álgebra de conjuntos y $(\R, \mathcal A^*, m)$ es un espacio de medida $\sigma-$finito con $\mathcal A^* \sub \wp(\R)$. 
Además esta $\sigma-$álgebra contiene los abiertos y los cerrados de $\R$

# Invarianza de $m$ por traslaciones

# Funciones medibles Lebesgue

<span class="defn">Definición:</span> $f: \R \to \R$ se dice medible si y sólo si para todo $a \in \R$ 
$$
f^{-1}((-\infty , a)) = \{ x : f(x) < a\}\\
= \{f < a \}
$$
es un conjunto medible.
La segunda es la notación acostumbrada

$f$ es medible si y sólo si para todo $a \in \R$, $ \{f \le a \}$ es medible.

También son equivalentes:
1. $f$ es medible 
2. para todo $a \in \R$, $ \{f \ge a \}$ es medible
3. para todo $a \in \R$, $ \{f > a \}$ es medible
4. para todos $a,b \in \R$, $ \{a<f<b \}$ es medible
5. para todo $A \sube \R$ abierto, $f^{-1}(A)$ es medible 
6. para todo $F \sube \R$ cerrado, $f^{-1}(A)$ es medible.

Las funciones continuas en $\R$ son medibles

<span class="teor">Proposición:</span> Sean $f,g$ medibles y $c \in \R$, entonces son medibles:
1. $cf$
2. $f+g$
3. $fg$
4. $|f|$ y $f^k$ con $K \in \N$

<span class="defn">Definición:</span> Sea $f$ real, se definen las partes positivas y negativas de $f$ por:
$$
f^+(x) = \max \{ f(x) , 0\}\\
f^-(x) = \max \{ -f(x) , 0\}
$$
con esta definición se tiene que:
1. $f^+ + f^- = |f|$
2. $f^+ - f^- = f$
3. $f^+ = \frac{|f| + f}{2}$
4. $f^- = \frac{|f| - f}{2}$

entonces $f$ es medible si y sólo si $f^+, f^-$ son medibles. 

<span class="teor">Proposición:</span> Son medibles
$$ \sup(f_n)_n, \quad \inf(f_n)_n\\
\overline{\lim} fn, \quad \underline{\lim} f_n
$$

<span class="teor">Corolario:</span> Dadas $(f_n)_n$ medibles, si $f_n$ converge a $f$ puntualmente, entonces $f$ es medible. 

<span class="defn">Definición:</span> Dadas $f,g$ medibles tales que $f = g$ en casi todo punto (c.t.p), esto significa que el conjunto $\{x : f(x) \ne g(x)\}$ tiene medida cero.

Además, si $f$ es medible y $f=g$ c.t.p entonces $g$ es medible.

# Integral de Lebesgue 
En la integral de Riemann, se tiene que 
$$
S(f;P) = \sum_k a_k m(I_k)
$$ donde $P$ es una partición y $I_k = [x_{k-1}, x_k]$

<span class="defn">Definición:</span> $\phi$ se dice una **función simple no negativa** si existen $E_1, E_2, \dots, E_N$ medibles y constantes $a_1, \dots, a_N \ge 0$ tales que 
$$
\phi = \sum_{k=1}^N a_k \xi_{E_k}
$$
Además la representación es única si $a_k \ne a_j$, $k\ne j$ y $E_j \cap E_k = \empty$ si $j \ne k$ y se tiene $\phi^{-1}(a_j) = E_j$ y $\bigcup_{k=1}^N E_k = \R$

<span class="teor">Proposición:</span> Sea $f$ medible no negativa, existen $(\phi_n)_n$ funciones simples no negativas medibles tales que: 
1. $0 \le \phi_n(x) \le \phi_{n+1}(x) $
2. $f(x) = \lim_{n \to \infty} \phi_n(x)$, con convergencia puntual.

<span class="defn">Definición:</span> Si $\phi  = \sum_{k=1}^N a_k \chi E_k$ es una función simple no negativa, se define:
$$
\int_\R \phi\ dm = \sum_k a_k m(E_k)
$$
en caso de $0\cdot \infty$ se toma $0\cdot \infty = 0$

<span class="teor">Proposición:</span> Si $\phi, \psi$ son funciones simples y $c \ge 0$, entonces:
1. $\int_\R c\phi\ dm = c \int_\R \phi\ dm$
2. $\int_\R (\phi + \psi) \ dm = \int_\R \phi\ dm + \int_\R \psi\ dm$

<span class="defn">Definición:</span> Sea $\phi$ simple no negativa y $A \in \cal A^*$ un conjunto medible, se define 
$$
\lambda(A) = \int_A \phi\ dm =  \int_A \phi \chi_A\ dm = \sum_k a_k m(A \cap E_k)
$$
es una medida inducida por $\phi$ sobre $\cal A^*$

<span class="defn">Definición:</span> Sea $f$ no negativa medible, entonces 
$$
\int_\R f(x)\ dm(x) = \int_\R f\ dm = \sup_{\phi} \int_\R \phi\ dm 
$$
donde las $\phi$ son simples no negativas medibles y $\phi \le f$

se tiene también, para $A$ medible, 
$$
\lambda(A) = \int_A f \ dm =  \int_A f \chi_A\ dm
$$

<span class="teor">Proposición:</span> Sean $f,g$ medibles no negativas:
1. Si $f\le g$ entonces
$$
\int_\R f\ dm \le \int_\R g\ dm
$$
2. Si $A,B \in \cal A^*$ y $A \sube B$, entonces 
$$
\int_A f\ dm \le \int_B f\ dm
$$

## Teorema de la convergencia monótona
<span class="teor">Teorema:</span> Sean $(f_n)_n$ funciones medibles no negativas tales que para todo $n \ge 1$ y para todo $x \in \R$ se tiene que $f_n(x) \le f_{n+1}(x)$. Si se tiene convergencia puntual, esto es: $f(x) = \lim_{n \to \infty} f_n(x)$, entonces 
$$
\lim_{n \to \infty} \int_\R f_n \ dm  = \int_\R f \ dm = \int_\R  \lim_{n \to \infty} f_n \ dm
$$

<span class="teor">Corolario:</span> Sean $f,g$ medibles no negativas y $c \ge 0$, entonces:
1. $\displaystyle \int_\R cf\ dm = c \int_\R f\ dm$
2. $\displaystyle \int_\R f + g \ dm = \int_\R f\ dm + \int_\R g\ dm$

- Demostración:
1. Consideremos $(\phi_n)_n$ simples no negativas, además monótonas y convergentes a $f$, es decir $\phi_n \uparrow f$. Por el teorema de convergencia monótona, 
$$
\lim_{n \to \infty} \int_\R \phi_n \ dm  = \int_\R f \ dm
$$
además $c\phi_n \uparrow cf$, luego
$$
\begin{align*}
   \lim_{n \to \infty} \int_\R c\phi_n \ dm &= \int_\R cf \ dm\\
   c \lim_{n \to \infty} \int_\R \phi_n \ dm &=\\
   c\lim_{n \to \infty} \int_\R f \ dm &=
\end{align*}
$$
2. Se hace de manera análoga.

<span class="teor">Lema:</span> **Fatou**
Sean $(f_n)_n$ funciones medibles no negativas, entonces 
$$
\int_\R \underline{\lim} f_n\ dm \le \underline{\lim} \int_\R f\ dm
$$

<span class="nota">Nota:</span> No se puede suprimir la condición de las $f_n$ no negativas.

<span class="nota">Nota:</span> Versión 2 para límite superior:
Sean $(f_n)_n$ funciones medibles no negativas, si existe $g$ medible tal que $f_n \le g$ y $\int_\R g\ dm$ es finito, entonces
$$
\overline{\lim} \int_\R f_n \ dm \le \int_\R \overline{\lim} f_n\ dm
$$

Para la demostración, tomar $h_n = g - f_n$ y aplicar el lema de Fatou.


# Funciones Lebesgue integrables 

<span class="defn">Definición:</span> Una función $f$ real y medible se dice **Lebesgue integrable** si y sólo si $f^+, f^-$ tienen integral finita. 

Además, podemos definir 
$$
\int_\R f\ dm = \int_\R f^+ \ dm - \int_\R f^- \ dm
$$
y para $E$ medible,
$$
\int_\R f\ dm = \int_\R \chi_E f\ dm
$$

<span class="nota">Nota:</span> Si $f = f_1 - f_2$, donde $f_1, f_2$ son no negativas, medibles y de integral finita, entonces
$$
\begin{align*}
   f_1 - f_2 &= f^+ - f^-\\
   f_1 + f^- &= f_2 + f^+\\
   \int_\R f_1 + f^- \ dm &= \int_\R f_2 + f^+ \ dm \\
   \int_\R f_1 \ dm + \int_\R f^- \ dm &= \int_\R f_2 \ dm + \int_\R f^+ \ dm \\
   \int_\R f_1 \ dm - \int_\R f_2 \ dm &= + \int_\R f^+ \ dm - \int_\R f^- \ dm
\end{align*}
$$

<span class="defn">Notación:</span> El conjunto de funcione Lebesgue integrables se denota por 
$$
L (\R, \mathcal A^*, m)
$$

<span class="teor">Teorema:</span> Sea $f$ medible real, entonces $f \in L$ si y sólo si $|f| \in L$ y 
$$
\left| \int_\R f \ dm \right| \le \int_\R |f|\ dm
$$

<span class="teor">Corolario:</span> Sean $f,g$ y $g \in L$ tales que $|f| \le |g|$, entonces $f \in L$ (además $|f| \in L$).

<span class="teor">Teorema:</span> $L$ tiene estructura de subespacio.
Dadas $f,g \in L$, $c \in \R$:
1. $\displaystyle \int_\R cf\ dm = c \int_\R f\ dm$
2. $\displaystyle \int_\R f + g \ dm = \int_\R f\ dm + \int_\R g\ dm$

Demostración: ejercicio

## Teorema de convergencia dominada 
<span class="teor">Teorema:</span> Sean $(f_n)_n$ reales medibles y $g \in L$ no negativa, tales que $f_n$ convergen a $f$ puntualmente y $|f_n| \le g$ para todo $n \ge 1$. Entonces
$$
\lim_{n \to \infty} \int_\R f_n \ dm = \int_\R f\ dm = \int_\R \lim_{n \to \infty} f_n\ dm
$$

Por el corolario $f_n, f \in L$

<span class="nota">Nota:</span> En las condiciones del teorema de convergencia dominada se tiene: 
$$
|f_n - f| \rightarrow f \ puntual\\
|f_n - f| \le 2g
$$
aplicando el teorema,
$$
\lim_{n \to \infty} \int_\R |f_n - f| = 0
$$
Podemos decir que $f_n \to f$ en $L$ (es análogo a la convergencia en media para la norma $\| \cdot \|_1$).

<span class="teor">Proposición:</span> Sea $f \ge 0$ medible y real, entonces $f(x) = 0$ en c.t.p si y sólo si $\int_\R f\ dm = 0$.

## Integral de Riemann vs Integral de Lebesgue
Si $f \in R([a,b])$, entonces $f$ es acotada: $|f(x)| \le M$ para todo $x \in [a,b]$ y $f$ es continua en casi todo punto, es decir, el conjunto de discontinuidades tiene media $0$. Luego $f$ es Lebesgue medible en $[a,b]$, además $f$ es dominada por $M = g(x)$ la cual es Lebesgue integrable en $[a,b]$, así resulta que $f \in L$ en $[a,b]$.
(Si es Riemann integrable, es Lebesgue integrable)

Además, se tiene vía sumas $\sup$ e $\inf$ y teorema de convergencia monótona (revisar Rudin): 
$$
\int_a^b f\ dx = \int_{[a,b]} f\ dm
$$
<span class="nota">Nota:</span> En integrales impropias de Riemann puede tenerse convergencia pero no tenerse integrabilidad de Lebesgue