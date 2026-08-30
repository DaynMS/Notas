# Funciones analíticas 
<span class="defn">Definición:</span> Una función $f$ es **analítica** en un conjunto abierto $S$ si es derivable en todo el conjunto $S$. $f$ es **analítica en un punto** $z_0$ si es analítica en alguna vecindad de $z_0$.

Una función analítica también se conoce como **regular** u **holomorfa**.

<span class="defn">Definición:</span> Una función es **entera** si es analítica en todo el plano coplejo.

## Propiedades

Es necesario que $f$ sea continua y que se cumplan las ecuaciones de Cauchy-Riemann para que $f$ sea analítica. Pero no son condiciones suficientes.

Si $f,g$ son analíticas, también lo son
$$f+g, \quad fg, \quad f/g, \quad f\circ g$$

<span class="teor">Teorema:</span> Si $f'(z) = 0$ en todos los puntos de un dominio $D$, entonces $f$ es constante en todo $D$

## Puntos singulares

<span class="defn">Definición:</span> $z_0$ es un punto singular si existe una vecindad $A$ tal que 
<span class="defn">Definición:</span> $f$ tiene un **punto singular** en $z_0$ si $f$ no es derivable en $z_0$ pero lo es en $D_\epsilon (z_0) - \{ z_0 \}$ para algún $\epsilon>0$

<span class="ejem">Ejemplo:</span> $$f(z) = \frac{z^2 + 3}{(z+1)(z^2+5)}$$ tiene puntos de singularidad: $z=-1, z= \pm \sqrt{5}i$, pues no es derivable ahí porque el denominador es $0$, en todos los demás puntos del plano complejo es analítica.

## Funciones armónicas

<span class="defn">Definición:</span> $H: \R^2 \to \R$ se dice **armónica** en un dominio del plano $xy$, si sus derivadas parciales de primer y segundo orden son continuas en ese dominio y satisfacen la ecuación $$H_{xx}(x,y) + H_{yy}(x,y) = 0$$ conocida como **ecuación de Laplace** 

<span class="teor">Teorema:</span> Si una función $f(z) = u(x,y) + iv(x,y)$ es analítica en un dominio $D$, entonces sus funciones componentes $u,v$ son armónicas en $D$

## Funciones analíticas determinadas de forma única

<span class="teor">Lema:</span> Sea $f$ tal que 
1. es analítica en un dominio $D$
2. $f(z)=0$ en cada punto de una segmento de línea contenida en $D$

entonces, $f(z)=0$ en cada $z \in D$

<span class="teor">Teorema:</span> si $f$ es analítica en un dominio $D$, está únicamente determinada por sus valores a lo largo de una línea que está en $D$

Esto es, si $f$ es analítica y sobre una segmento de recta se tiene que $f=g$, entonces $f=g$ en todo $D$.

### Continuación analítica

<span class="defn">Definición:</span> Sean $D_1, D_2$ dos dominios tales que $f_1$ es analítica en $D_1$ y $f_2$ es analítica en $D_2$. Si  $D_1 \cap D_2 \ne \empty$ y se tiene que $f_1(z) = f_2(z)$ para cada $z \in D_1 \cap D_2$, entonces decimos que $f_2$ es una **continuación analítica** de $f_1$ en el dominio $D_2$

En tal caso, la función dada por $$F(z) =\begin{cases}
    f_1(z), & z \in D_1\\
    f_2(z), & z \in D_2
\end{cases}$$ es analítica en $D_1 \cup D_2$

## Principio de reflexión

La idea es poder determinar qué funciones cumplen que $\overline{f(z)} = f(\bar z)$

<span class="teor">Teorema</span> **Principio de reflexión**
Suponga que una función $f$ es analítica en un dominio $D$ que contiene un segmento del eje $x$ y que la parte inferior es reflejo de la parte superior respecto al eje $x$, entonces $$\overline{f(z)} = f(\bar z)$$ si y sólo si $f(x)$ es real para cada punto $x$ sobre el segmento

<span class="ejem">Ejemplo:</span> $f(z) = z^2$
- $f(z) = f(x+yi) = x^2 - y^2 + 2xyi$
- $f(\bar z) = f(x-yi)= x^2 - y^2 - 2xyi$ 
- $\overline{f(z)} = \overline{f(x+yi)} = x^2 - y^2 - 2xyi$

Este teorema es equivalente a probar que para todo $z \in D$, $\overline{f(z)} = f(\bar z)$ si y sólo si $f(x)\in \R$ para cada punto del segmento del eje $x$

Por ejemplo, si $f(z) = iz$ no comple.
