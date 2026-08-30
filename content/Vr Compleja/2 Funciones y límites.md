# Definiciones topológicas

- Sea $z_0 \in \mathbb{C}$, una **vecindad** de $z_0$ se define por $$B_{\epsilon}(z_0) = \{ z \in \mathbb{C} : |z-z_0|<\epsilon\}$$

- Una **vecindad hueca** de $z_0$ corresponde al conjunto $$\{ z \in \mathbb{C} : 0<|z-z_0|<\epsilon\}
$$ es una bola al rededor de $z_0$ sin incluirlo.

- Sea $S \sube \mathbb{C}$, diremos que $S$ e un **conjunto abierto** si, para todo $z \in S$, existe $\epsilon_z>0$ tal que $$B_{\epsilon_z}(z) \sube S$$

- $z_0$ es un **punto interior** de $S$ si existe una vecindad de $z_0$ tal que $$B_{\epsilon_z}(z_0) \sube S$$

De manera equivalente, un conjunto es abierto si todos sus puntos son interiores.

- $z_0$ es un **punto exterior** de $S$ si es un punto interior de su complemento, $S^C$

- Un punto $z_0$ es un **punto frontera** de $S$ si no es interior y no es exterior.$$\partial S = \{ z \in \mathbb{C} : z \text{ es un punto frontera}\}$$ Es decir que toda vecindad no está contenida en $S$ ni en $S^C$, esto es, toda vecindad de $z_0$ interseca a $S$ y a $S^C$

- Un conjunto $S$ es **cerrado** si todos sus puntos frontera pertenecen al conjunto

- La **clausura** $\bar S$ de un conjunto $S$, es el conjunto $S$ unido con sus puntos frontera

- Un conjunto abierto $S$ es **conexo** si para cada par de puntos $z_1,z_2 \in S$ existe una línea poligonal $t$ que los une tal que $t \sube S$.
En este contexto conexo y arco-conexo son equivalentes.

- Un **dominio** es un conjunto no vacío y conexo.

- Una **región** es un dominio en el cual su frontera puede estar o no en el conjunto. 
Es un dominio unido con ninguno, algunos o todos sus puntos de frontera.

- $z_0$ es un **punto de acumulación** si para todo $\epsilon >0$ $$(B_\epsilon(z_0) - \{z_0\}) \cap S \ne \empty$$
Los puntos de frontera pueden o no ser puntos de acumulación. También implica que toda vecindad hueca de $z_0$ interseca a $S$.

# Función

<span class="defn">Definición:</span> Sea $S \sube \mathbb{C}$, diremos que una **función** $f$ en $S$ es una asignación tal que a cada $z\in S$ le asigna un único $f(z) \in \mathbb{C}$

# Límites
En cálculo de $2-$variables tenemos que, si $$f: \R^2 \to \R^2\\
(x,y) \mapsto f(x,y) = (f_1(x,y), f_2(x,y))$$ se tiene que $$\lim_{(x,y)\to(a,b)} f(x,y) = L$$ si para todo $\epsilon>0$ existe $\delta>0$ tal que 

<span class="defn">Definición:</span> Sea $f: \mathbb{C} \to \mathbb{C}$, escribimos $$\lim_{z \to z_0} f(z) = w_0$$ si para todo $\epsilon>0$ existe $\delta>0$ tal que:
si $0<|z-z_0| < \delta$ entonces $|f(z) - w_0| <\epsilon$.

Se está tomando una vecindad hueca en el dominio.

<span class="teor">Teorema:</span> Si el límite de una función $f$ existe, este es único.

<details>
  <summary><i>Demostración</i></summary>
  
Supongamos que $\lim_{z\to z_0} f(z) = w_0$ y que $\lim_{z\to z_0} f(z) = w_1$. Queremos ver que $w_0=w_1$, esto equivale a que $|w_0-w_1|<\epsilon$ para todo $\epsilon$.

Como el límite existe, para $\epsilon>0$ existen $\delta_0, \delta_1$ positivos, tales que $|f(z)-w_0| <\epsilon/2$ y  $|f(z)-w_1| <\epsilon/2$ si $|z-z_0| <\delta_0$ y $|z-z_0| <\delta_1$ respectivamente.
Sea $\delta$ el mínimo de los dos, así se satisfacen simultaneamente  $|f(z)-w_0| <\epsilon/2$ y  $|f(z)-w_1| <\epsilon/2$ si $|z-z_0|<\delta$. Por tanto, $$|w_0-w_1| \le |w_0-f(z)+f(z)-w_1|\\
\le |f(z)-w_0| + |f(z)-w_1|< \epsilon/2 + \epsilon/2\\
|w_0-w_1| < \epsilon$$
</details>

<span class="teor">Teorema:</span> Supongamos que $$\lim_{z \to z_0} f(z)= w_1, \quad \text{y} \quad \lim_{z \to z_0} g(z) = w_2$$ entonces 
1. $\lim_{z \to z_0} [f(z) + g(z)] = w_1 + w_2$
2. $\lim_{z \to z_0} [f(z)  g(z)] = w_1 w_2$
3. $\lim_{z \to z_0} \frac{f(z)}{g(z)} = \frac{w_1}{w_2}$ siempre que $w_2\ne 0$

<span class="teor">Teorema:</span> Supongamos que $z = x+yi$, $f(z) = u(x,y) + iv(x,y)$ y $z_0 = x_0+iy_0$, $w_0 = u_0 + iv_0$. Si $$\begin{align*}
    \lim_{(x,y)\to (x_0,y_0)} u(x,y) = u_0, & & \lim_{(x,y)\to (x_0,y_0)} v(x,y) = v_0
\end{align*}$$ entonces $$\lim_{z\to z_0} f(z) = u_0 + iv_0 = w_0$$

# Infinito en los complejos 

## Proyección estereográfica

A los puntos del plano complejo se les asigna un punto sobre una esfera centrada en el origen. Al polo $N$, le corresponde el infinito.

Existe una biyección $$\mathbb{C} \cup \{\infty\} \to \{(x,y,z) : x^2 + y^2 + z^2 = r^2\}$$ a dicha esfera se le conoce como *Esfera de Riemann*.

![proyección estereográfica](image.png)

<span class="defn">Definición:</span> Una **vecindad de infinito** es de la forma $$\left\{z \in \mathbb{C} : |z| > \frac{1}{\epsilon}\right\}$$ con $\epsilon>0$

## Límite infinito 
<span class="defn">Definición:</span> Se tiene que $$\lim_{z \to z_0} f(z) = \infty$$ si para todo $\epsilon>0$, existe $\delta>0$ tal que, si $0<|z-z_0|<\delta$ entonces $|f(z)| < \frac{1}{\epsilon}$ 

Usando la definición de límite se tiene que $$\lim_{z \to z_0} \frac{1}{f(z)} = 0 \text{  si y sólo si  } \lim_{z \to z_0} f(z) = \infty$$

<span class="teor">Teorema:</span> Si $z_0, w_0$ son puntos en los planos $z,w$ respectivamente, entonces:
$$
\begin{gather*}
    \text{si } & \lim_{z\to z_0} \frac{1}{f(z)} = 0 & \text{entonces} & \lim_{z\to z_0} f(z) = \infty \\
    \text{si }& \lim_{z\to 0} f\left( \frac{1}{z} \right) =w_0 & \text{entonces} &   \lim_{z\to \infty} f(z) = w_0\\
    \text{si }& \lim_{z\to 0} \frac{1}{f(1/z)}=0 & \text{entonces} &   \lim_{z\to \infty} f(z) = \infty
\end{gather*}$$


# Continuidad
<span class="defn">Definición:</span> Diremos que $f$ es **continua** en $z_0 \in \mathbb{C}$ si:
1. $f(z_0)$ existe 
2. $\lim_{z \to z_0} f(z)$ existe 
3. $\lim_{z \to z_0} f(z) = f(z_0)$

Una definiticón equivalente:
Para todo $\epsilon>0$, existe $\delta>0$, tal que si $0\le |z-z_0| <\delta$ entonces $|f(z) - f(z_0)| < \epsilon$
En este caso se toma la vecindad completa y no sólo la vecindad hueca.

<span class="teor">Teorema:</span> La compuesta de funciones continuas es una función continua.

Esto es, si $g$ es continua en $z_0$ y $f$ es continua en $g(z_0)$, entonces $f \circ g$ es continua en $z_0$ 

<span class="teor">Teorema:</span> Si $f$ es continua en $z_0$ y $f(z_0) \ne 0$, entonces existe una vecindad de $z_0$ en donde $f$ es no nula.
<details>
<summary><i>Demostración</i></summary>

Dado que $f$ es continua en $z_0$, si $\epsilon = \frac{|f(z_0)|}{2}$, existe $\delta >0$ tal que si $|z-z_0| < \delta$ entonces $|f(z) - f(z_0)|< \frac{|f(z_0)|}{2}$, lo que implica que $f(z) \ne 0$ en esa vecindad.
</details>



<span class="teor">Teorema:</span> Sean $f(z) = u(x,y) + iv(x,y)$ y $z_0 = x_0 + iy_0$. Se tiene que, $f$ es continua en $z_0$ si y sólo si $u$ y $v$ son continuas en $(x_0, y_0)$

<span class="teor">Teorema:</span> Si una función $f$ es continua en una región $R$ que es cerrada y acotada, existe un real no negativo $M$ tal que $$|f(z)| \le M$$ para todo $z \in R$, y la igualdad se tiene en al menos uno de esos $z$.

# Derivada

<span class="defn">Definición:</span> La **derivada** de $f$ en $z_0$ es $$f'(z_0) = \lim_{z \to z_0} \frac{f(z) - f(z_0)}{z - z_0}
$$ siempre que el límite exista. Se dice que la función $f$ es **diferenciable** en $z_0$ cuando $f'(z_0)$ existe.

Si llamamos $\Delta z = z - z_0$, la derivada se puede definir como  $$f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z}$$

$\Delta z$ también se puede escribir como $\Delta x + i \Delta y$

<span class="duda">Tarea:</span> Derivada de $f(z) = |z|$

## Propiedades
<span class="teor">Teorema:</span> Si $f$ es una función cuya derivada existe en el punto $z$ y $c$ es una constante compleja:
- $\frac{d}{dz} c = 0$
- $\frac{d}{dz} z = 1$
- $\frac{d}{dz} [cf(z)] = cf'(z)$
- $\frac{d}{dz} z^n = nz^{n-1}$

<span class="teor">Teorema:</span> Si $f,g$ son funciones cuyas derivadas existe en el punto $z$, entones 
- $\frac{d}{dz} [f(z) + g(z)]= f'(z) + g'(z)$
- $\frac{d}{dz} [f(z)  g(z)]= f'(z)g(z) + f(z)g'(z)$
- $\dfrac{d}{dz} \left[\dfrac{f(z)}{g(z)}\right]= \dfrac{f'(z)g(z) + f(z)g'(z)}{[g(z)]^2}$



<span class="teor">Teorema</span> **Regla de la Cadena**
Supongamos que $f$ tiene derivada en $z_0$ y $g$ tiene derivada en $f(z_0)$. Entonces la función $h(z) = g[f(z)]$ tiene drivada en $z_0$ y $$h'(z_0) = g'[f(z_0)] \cdot f'(z_0)$$

## Regla de L'Hôpital

Si $f(z_0) = 0 = g(z_0)$, $f'(z_0), g'(z_0)$ existen y $g'(z_0) \ne 0$, entonces $$\lim_{z \to z_0} \frac{f(z)}{g(z)} = \lim_{z \to z_0} \frac{f'(z_0)}{g'(z_0)}$$

## Ecuaciones de Cauchy - Riemann

<span class="teor">Teorema:</span> Supongamos que $f(z) = u(x,y) + iv(x,y)$ y es derivable en $z_0 = x_0 + iy_0$. Entonces las derivadas parciales de $u,v$ existen en $(x_0, y_0)$ y satisfacen las **ecuaciones de Cauchy-Riemann**: $$u_x = v_y, \qquad u_y = -v_x$$ Además, $$f'(z_0) = u_x (x_0, y_0) + i v_x (x_0, y_0)$$

<span class="teor">Teorema:</span> Supongamos que $f(z) = u(x,y) + iv(x,y)$ está definida en una vecindad $\epsilon$ de $z_0 = x_0 + iy_0$ y que:
1. las primeras derivadas parciales de $u,v$ existen en esa vecindad
2. las derivadas parciales son continuas en $(x_0, y_0)$ y ahí satisfacen las ecuaciones de Cauchy-Riemann

Entonces, $f'(z_0)$ existe y $$f'(z_0) = u_x (x_0, y_0) + i v_x (x_0, y_0)$$

### Coordenadas polares

Podemos escribir $$x = r \cos \theta, \qquad y = r \sin \theta$$ y si $z = x + iy$ entonces $z = r e ^{i \theta}$

Si $f(z) = u(x,y) + iv(x,y)$ tenemos: $$\frac{\partial u}{ \partial r} = \frac{\partial u}{ \partial x} \frac{\partial x}{ \partial r} + \frac{\partial u}{ \partial y} \frac{\partial y}{ \partial r}\\
\frac{\partial u}{ \partial \theta} = \frac{\partial u}{ \partial x} \frac{\partial x}{ \partial \theta} + \frac{\partial u}{ \partial y} \frac{\partial y}{ \partial \theta}$$ respecstivamente para $v$.

Podemos reescribir: $$u_r = u_x \cos \theta + u_y \sin \theta\\
v_\theta = -v_x r \sin \theta + v_y r \cos \theta$$

si $f$ satisface las ecuaciones de Cauchy-Riemann $v_x = -u_y$ y $u_x = v_y$, entonces $$v_\theta = v_yr \sin \theta + u_x r \cos \theta$$ por lo tanto $$r u_r = v_\theta$$

Así mismo, reescribiendo $$v_r = v_x \cos \theta + v_y \sin \theta\\
u_\theta = -u_x r \sin \theta + u_y r \cos \theta$$ y tomando $u_x = v_y$ y $u_y = -v_x$, $$u_\theta = -v_y r \sin \theta - v_x r \cos \theta
$$ luego $$rv_r = -u_\theta$$

<span class="teor">Teorema:</span> Sea $f(z) = u(r,\theta) + iv(r, \theta)$ definida en una vecindad al rededor de $z_0 = r_0 e^{i\theta_0} \ne 0$, si
1. las primeras derivadas parciales de $u,v$ existen en esa vecindad
2. las derivadas parciales son continuas en $(r_0, \theta_0)$ y ahí satisfacen $$r u_r = v_\theta, \qquad rv_r = -u_\theta$$

Entonces, $f'(z_0)$ existe y $$f'(z_0) = e^{-i \theta} [u_r (r_0, \theta_0) + i v_r (r_0, \theta_0)] \tag*{$\dblcolon$}$$