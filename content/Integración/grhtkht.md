## Teorema de la convergencia monótona
<span class="teor">Teorema:</span> Sean $(f_n)_n$ funciones medibles no negativas tales que para todo $n \ge 1$ y para todo $x \in \R$ se tiene que $f_n(x) \le f_{n+1}(x)$. Si se tiene convergencia puntual, esto es: $f(x) = \lim_{n \to \infty} f_n(x)$, entonces $$\lim_{n \to \infty} \int_\R f_n \ dm  = \int_\R f \ dm = \int_\R  \lim_{n \to \infty} f_n \ dm $$

<span class="teor">Corolario:</span> Sean $f,g$ medibles no negativas y $c \ge 0$, entonces:
1. $\displaystyle \int_\R cf\ dm = c \int_\R f\ dm$
2. $\displaystyle \int_\R f + g \ dm = \int_\R f\ dm + \int_\R g\ dm$

- Demostración:
1. Consideremos $(\phi_n)_n$ simples no negativas, además monótonas y convergentes a $f$, es decir $\phi_n \uparrow f$. Por el teorema de convergencia monótona, $$\lim_{n \to \infty} \int_\R \phi_n \ dm  = \int_\R f \ dm $$ además $c\phi_n \uparrow cf$, luego $$\begin{align*}
   \lim_{n \to \infty} \int_\R c\phi_n \ dm &= \int_\R cf \ dm\\
   c \lim_{n \to \infty} \int_\R \phi_n \ dm &=\\
   c\lim_{n \to \infty} \int_\R f \ dm &=
\end{align*}$$
2. Se hace de manera análoga.

<span class="teor">Lema:</span> **Fatou**
Sean $(f_n)_n$ funciones medibles no negativas, entonces $$\int_\R \underline{\lim} f_n\ dm \le \underline{\lim} \int_\R f\ dm$$

<span class="nota">Nota:</span> No se puede suprimir la condición de las $f_n$ no negativas.

<span class="nota">Nota:</span> Versión 2 para límite superior:
Sean $(f_n)_n$ funciones medibles no negativas, si existe $g$ medible tal que $f_n \le g$ y $\int_\R g\ dm$ es finito, entonces $$ \overline{\lim} \int_\R f_n \ dm \le \int_\R \overline{\lim} f_n\ dm$$

Para la demostración, tomar $h_n = g - f_n$ y aplicar el lema de Fatou.


# Funciones Lebesgue integrables 

<span class="defn">Definición:</span> Una función $f$ real y medible se dice **Lebesgue integrable** si y sólo si $f^+, f^-$ tienen integral finita. 

Además, podemos definir $$\int_\R f\ dm = \int_\R f^+ \ dm - \int_\R f^- \ dm$$ y para $E$ medible, $$\int_\R f\ dm = \int_\R \chi_E f\ dm$$

<span class="nota">Nota:</span> Si $f = f_1 - f_2$, donde $f_1, f_2$ son no negativas, medibles y de integral finita, entonces $$\begin{align*}
   f_1 - f_2 &= f^+ - f^-\\
   f_1 + f^- &= f_2 + f^+\\
   \int_\R f_1 + f^- \ dm &= \int_\R f_2 + f^+ \ dm \\
   \int_\R f_1 \ dm + \int_\R f^- \ dm &= \int_\R f_2 \ dm + \int_\R f^+ \ dm \\
   \int_\R f_1 \ dm - \int_\R f_2 \ dm &= + \int_\R f^+ \ dm - \int_\R f^- \ dm
\end{align*}$$

<span class="defn">Notación:</span> El conjunto de funcione Lebesgue integrables se denota por $$L (\R, \mathcal A^*, m)$$

<span class="teor">Teorema:</span> Sea $f$ medible real, entonces $f \in L$ si y sólo si $|f| \in L$ y $$\left| \int_\R f \ dm \right| \le \int_\R |f|\ dm$$

<span class="teor">Corolario:</span> Sean $f,g$ y $g \in L$ tales que $|f| \le |g|$, entonces $f \in L$ (además $|f| \in L$).

<span class="teor">Teorema:</span> $L$ tiene estructura de subespacio.
Dadas $f,g \in L$, $c \in \R$:
1. $\displaystyle \int_\R cf\ dm = c \int_\R f\ dm$
2. $\displaystyle \int_\R f + g \ dm = \int_\R f\ dm + \int_\R g\ dm$

Demostración: ejercicio

## Teorema de convergencia dominada 
<span class="teor">Teorema:</span> Sean $(f_n)_n$ reales medibles y $g \in L$ no negativa, tales que $f_n$ convergen a $f$ puntualmente y $|f_n| \le g$ para todo $n \ge 1$. Entonces $$\lim_{n \to \infty} \int_\R f_n \ dm = \int_\R f\ dm = \int_\R \lim_{n \to \infty} f_n\ dm$$

Por el corolario $f_n, f \in L$

<span class="nota">Nota:</span> En las condiciones del teorema de convergencia dominada se tiene: $$|f_n - f| \rightarrow f \ puntual\\
|f_n - f| \le 2g$$ aplicando el teorema, $$\lim_{n \to \infty} \int_\R |f_n - f| = 0 $$
Podemos decir que $f_n \to f$ en $L$ (es análogo a la convergencia en media para la norma $\| \cdot \|_1$).

<span class="teor">Proposición:</span> Sea $f \ge 0$ medible y real, entonces $f(x) = 0$ en c.t.p si y sólo si $\int_\R f\ dm = 0$.

## Integral de Riemann vs Integral de Lebesgue
Si $f \in R([a,b])$, entonces $f$ es acotada: $|f(x)| \le M$ para todo $x \in [a,b]$ y $f$ es continua en casi todo punto, es decir, el conjunto de discontinuidades tiene media $0$. Luego $f$ es Lebesgue medible en $[a,b]$, además $f$ es dominada por $M = g(x)$ la cual es Lebesgue integrable en $[a,b]$, así resulta que $f \in L$ en $[a,b]$.
(Si es Riemann integrable, es Lebesgue integrable)

Además, se tiene vía sumas $\sup$ e $\inf$ y teorema de convergencia monótona (revisar Rudin): $$\int_a^b f\ dx = \int_{[a,b]} f\ dm $$ 
<span class="nota">Nota:</span> En integrales impropias de Riemann puede tenerse convergencia pero no tenerse integrabilidad de Lebesgue