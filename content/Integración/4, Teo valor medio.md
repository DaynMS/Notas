# Primer teorema del valor medio
Para integrales de Riemann: 
Existe $c\in (a,b)$ tal que el área del rectángulo $f(c) \times (b-a)$ es igual a la integral entre $a$ y $b$

<span class="teor">7.30 Teorema:</span> **Primer teorema del valor medio.**
Sea $f \in R(\alpha)$ y $\alpha \uparrow$, entonces existe $c \in [ \inf \{f(x) : x \in I\}, \sup \{f(x) : x \in I\}]$ tal que $$ \int_a^b f\ d\alpha = c[\alpha(b) - \alpha(a)] \tag*{$\dblcolon$}$$
En particular, si $f$ es continua $c = f(x_0)$, para algún $x_0 \in [a,b]$

# Integradores de variación acotada

Si $\alpha$ es de VA en $[a,b]$, $V_\alpha(x)$ designa la variación total de $\alpha$ en $[a,x]$ para $a < x \le b$ y $V_\alpha(a) = 0$

<span class="teor">7.24 Teorema:</span> Sea $\alpha$ de VA en $[a,b]$ y sea $f$ definida y acotada en $[a,b]$. Si $f \in R(\alpha)$, entonces $f \in R(V_\alpha)$ en $[a,b]$ <span style="float: right;">$\dblcolon$</span>

<span class="teor">7.25 Teorema:</span>  Sea $f \in R(\alpha)$ en $[a,b]$ y $\alpha$ es de VA en $[a,b]$. Si $[c,d] \sube [a,b]$, entonces $$f\in R(\alpha) \qquad \text{en } [c,d] \tag*{$\dblcolon$}$$

## Condiciones suficientes para ser integrable

<span class="teor">7.27 Teorema:</span> Si $f$ es continua en $[a,b]$ y $\alpha$ es de VA en $[a,b]$, entonces  $f \in R(\alpha)$ en $[a,b]$.


# Integral como función del intervalo 

<span class="teor">Corolario:</span> Si $f \in R(\alpha)$ en $[a,b]$ y $\alpha$ es de VA en $[a,b]$ , $$F(x) = \int_a^x f(t)\ d\alpha(t)$$ con $x \in [a,b]$ está bien definida. <span style="float: right;">$\dblcolon$</span>

<span class="teor">7.32 Teorema:</span> Para $F(x)$ en las condiciones anteriores, se cumplen:
1. $F$ es de VA en $[a,b]$
2. Si $\alpha$ es continua en $x_0$, entonces $F$ es continua en $x_0$
3. Si $\alpha \uparrow$ en $[a,b]$, entonces $F$ es derivable en los puntos $x_0$ donde $f$ es continua y $\alpha$ es derivable y además $$F'(x_0) = f(x_0) \alpha'(x_0) \tag*{$\dblcolon$}$$

<span class="nota">Nota:</span> 
1. Si $f\in R$ en $[a,b]$ (es decir que $\alpha(x) = x$), entonces $F(x) = \int_a^b f(t)\ dt$ es de VA y continua.
2. **Primer teorema fundamental del cálculo**. Si $f\in R$ en $[a,b]$ (es decir que $\alpha(x) = x$), entonces $F$ es derivable en los puntos de continuidad de $f$ y se tiene $$F'(x_0) = f(x_0)$$
3. Sea $$ f(x) = \begin{cases}
    0, & -1\le x < 0\\
    1, & 0\le x \le 1
\end{cases}$$ entonces $$ F(x) = \begin{cases}
    0, & -1\le x < 0\\
    x, & 0\le x \le 1
\end{cases}$$ Como $f$ es discontinua en $x_0 = 0$, esto explica que $F$ no es derivable en $x_0 = 0$

<span class="teor">7.31 Teorema:</span> **Segundo teorema del Valor medio**.
Sea $f \uparrow$ y $\alpha$ continua en $[a,b]$, entonces existe $x_0 \in (a,b)$ tal que $$\int_a^b f(x)\ d \alpha(x) = f(a) \int_a^{x_0} d\alpha(x) + f(b) \int_{x_0}^b d\alpha(x) \tag*{$\dblcolon$}$$

<span class="nota">Nota:</span> $f$ es creciente, pero si además es mayor a $0$. Supongamos que es discontinua en $a$, como $\alpha$ es continua podemos considerar $f(a) = 0$. Entonces $$\int_a^b f\ d\alpha = f(b) \int_{x_0}^b d\alpha(x)$$ 

<span class="teor">7.33 Corolario:</span> Sean $f,g \in R$ en $[a,b]$ y sean $F(x) = \int_a^x f(t)\ dt$ y $G(x) = \int_a^x g(t)\ dt$ para $x \in [a,b]$, entonces $f \in R(G)$, $g \in R(F)$ y  $fg \in R(\alpha)$ y $$ \int_a^b f(x)g(x)\ dx =  \int_a^b f(x)\ dG(x) =  \int_a^b g(x)\ dF(x)$$

<span class="teor">7.34 Teorema:</span> **Segundo teorema fundamental del cálculo**
Sea $f \in R$ en $[a,b] = I$ y sea $g$ tal que $g'(x) = f(x)$ en $I$. Entonces $$ \int_a^b f(x)\ dx =  \int_a^b g'(x)\ dx = g(b) - g(a)$$ $g$ se dice una **primitiva** de $f$ <span style="float: right;">$\dblcolon$</span>

<span class="teor">7.35 Corolario:</span> Sea $f \in R(\alpha)$, si $\alpha$ es continua en $[a,b]$ y $\alpha'\in R$ en $[a,b]$, entonces: $$ \int_a^b f(x)\ d\alpha(x) =  \int_a^b f(x)\alpha'(x)\ dx$$

# Cambio de variable en una integral de Riemann
<span class="teor">7.36 Teorema:</span> **Cambio de variable II**
Sean $g \in \mathcal{C^1}([c,d])$ y $f$ continua en $g([c,d])$ (en la imagen de $g$). Sea $F(x) = \int_{g(c)}^x f(t)\ dt$ con $x \in g([c,d])$. Entonces, para todo $x \in [c,d]$, $ \int_c^x f(g(t))g'(t)\ dt$ existe y se cumple que $$\int_{g(c)}^{g(d)} f(t)\ dt =  \int_c^d f(g(t))g'(t)\ dt$$

<span class="nota">Nota:</span> La versión I requería $f \in R$, $g'\in R$ y $g \uparrow$ sobre $[a,b]$, mientras que II no supone la monotonía de $g$

## Aplicación a VA y longitud de curvas.
Sea $f \in \mathcal C^1([a,b])$ y por tanto de VA en $[a,v]$, entonces $$ V_f(a,b) = \int_a^b |f'(t)|\ dt$$

# Integrales dependientes de un parámetro

<span class="defn">Definición:</span>  Sea $f$ continua en $D = [a,b] \times [c,d]$ y $\alpha$ de variación acotada en $[a,b]$. Se define $$F(y) = \int_a^b f(x,y)\ d\alpha(x)$$

$y$ es un parámetro que varía entre $c,d$

<span class="teor">7.38 Teorema:</span> $F$ así definida es continua en $[c,d]$, esto es $$\lim_{y\to y_0} F(y)  = F(y_0) \tag*{$\dblcolon$}$$

Otra expresión que representa esta propiedad  $$\lim_{y\to y_0} F(y) = \lim_{y\to y_0} \int_a^b f(x,y)\ d\alpha(x) = \int_a^b \lim_{y\to y_0}f(x,y)\ d\alpha(x) = F(y_0)$$ porque $f$ es continua permite intercambiar $\lim$ con $\int$

<span class="teor">7.39 Corolario:</span> Si  $f$  es continua en $D = [a,b] \times [c,d]$ y $g \in R$ en $[a,b]$ entonces $$F(y) = \int_a^b g(x) f(x,y)\ d\alpha(x)$$ es continua en $[c,d]$ <span style="float: right;">$\dblcolon$</span>

## Derivada bajo el signo integral

<span class="teor">7.40 Teorema:</span> Derivada bajo el signo integral. Sea $f$ continua en $D = [a,b] \times [c,d]$, $\alpha$ de variación acotada en $[a,b]$ y $\frac{\partial}{\partial y}f(x,y)$ continua en $D$. Si $F(y) = \int_a^b f(x,y)\ d\alpha(x)$, entonces $F$ es derivable en $[c,d]$ y además $$\frac{\partial F}{\partial y}(y) = F'(y) = \int_a^b \frac{\partial f}{\partial y}(x,y)\ d\alpha(x) \tag*{$\dblcolon$}$$

La notación $y^* \in \overline{y_0y}$ significa que está entre $y_0$ y $y$, pues no se sabe cuál de los dos es mayor o menor.

<span class="teor">Corolario:</span> Sea $F(y)= \int_a^b  g(x) f(x,y)\ d\alpha(x)$ con $g \in R$ en $[a,b]$, entonces $F$ es derivable y $$F'(y) = \int_a^b g(x)  \frac{\partial f}{\partial y}(x,y)\ dx = \int_a^b \frac{\partial f}{\partial y}(x,y)\ d\alpha(x)$$ con $\alpha(x) = \int_a^x g(t)\ dt$

<span class="teor">Corolario:</span> Sea $f$ continua en $D = [a,b] \times [c,d]$, $\frac{\partial f}{\partial y}(x,y)$ continua en $D$ y $p(y), q(y)$ derivables en $[a,b]$ tales que $\alpha < p(y), q(y)  < b$ y sea $F(y) = \int_{q(y)}^{p(y)} f(x,y) \ dx$. Entonces $F$ es derivable en $[c,d]$ y cumple que $$F'(y) = \int_{q(y)}^{p(y)} \frac{\partial f}{\partial y}(x,y)\ dx + f(p(y), y)p'(y) - f(q(y), y)q'(y)$$

## Intercambio en el orden de integración

<span class="teor">7.41 Teorema:</span> Igualdad de integrales iteradas.  Sea $f$ continua en $D = [a,b] \times [c,d]$, $\alpha$ de VA en $[a,b]$, $\beta$ de VA en $[c,d]$ y sean $F(y)= \int_a^b  f(x,y)\ d\alpha(x)$ y $G(x)= \int_c^d  f(x,y)\ d\beta(x)$. Entonces $F\in R(\beta)$ y $G \in R(\alpha)$ y $$ \int_a^b  G(x)\ d\alpha(x) = \int_c^d  F(y)\ d\beta(y)\\
\int_a^b \left( \int_c^d  f(x,y)\ d\beta(y)\right)\ d\alpha(x) = \int_c^d \left( \int_a^b  f(x,y)\ d\alpha(x)\right)\ d\beta(y) \tag*{$\dblcolon$}$$