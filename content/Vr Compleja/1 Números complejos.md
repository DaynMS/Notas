# Definición de los números complejos
Los números complejos se definen como parejas $(x,y) \in \R^2$

Las parejas de la forma $(x,0)$ se represenan simplemente por $x$ y corresponden a los **números reales**. Los complejos de la forma $(0,y)$ se llaman **números imaginarios puros** si $y \ne 0$.

Si $z = (x,y)$, $x$ corresponde a la parte real y $y$ la parte imaginaria. Se escriben: $$ x = \text{Re}(z), \quad y =  \text{Im}(z)$$

Dos complejos $z_1, z_2$ son iguales si y sólo si tienen la misma parte real e imaginaria.

## Operaciones

<span class="defn">Definición:</span> Sean $z_1 = (x_1, y_1)$ y $z_2 = (x_2, y_2)$ se definen: $$\begin{align*}
    z_1 + z_2 &= (x_1 + x_2, y_1 + y_2)\\
    z_1 \cdot z_2 &= (x_1 x_2 - y_1 y_2 , x_1y_2 + y_1x_2)
\end{align*}$$

<span class="teor">Propiedades:</span> 
- La suma y el producto son cerradas
- La suma y el producto son conmutativas
- La suma y el producto son asociativas
- El producto se distribuye sobre la suma
- Existe el módulo aditivo $(0,0)$
- Para todo $z$ complejo existe su inverso aditivo
- Para todo $z\ne 0$ complejo existe su inverso multiplicativo

El inverso aditivo y el multiplicativo es único respectivamente.

<span class="teor">Teorema:</span> Si $zw=0$ entonces $z=0$ o $w=0$.

- $\text{Re}(iz) =  -\text{Im}(z)$

## Notación
- El inverso aditivo de $z$ se denota $-z$
- El inverso multiplicativo de $z$ se denota $z^{-1}$
- Al complejo $(0,1)$ lo denotamos $i$
- Para cualquier complejo $z=(x,y)$ se tiene que $$z = (x,0) + (0,y) = (x,0) + (0,1)(y,0) = (x,0) + i(y,0) = x + iy$$

En particular se tieneque $i^2 = -1$

<span class="defn">Definición:</span>
- Se define la resta: $$z-w = z+ (-w)$$
- Se define la división: $$\frac{z}{w} = zw^{-1}$$



# Representación geométrica

Los números complejos se pueden asociar con vectores en dos dimensiones. La suma y resta de complejos coincide con la suma y resta de vectores.

## Módulo
El **módulo** de un complejo corresponde a la distancia al origen de su representación en el plano complejo, 
$$z = x+yi\\
|z| = \sqrt{x^2 + y^2}\\
|z|^2 = (Re(z))^2 + (Im(z))^2
$$

además, $$\text{Re}\ z \le |\text{Re}\ z| \le |z|\\
\text{Im}\ z \le |\text{Im}\ z| \le |z|$$

El módulo de la diferencia entre dos vectores corresponde a la distancia entre los dos vectores.

### Propiedades
- Desigualdad triangular:
$$|z+w| \le |z|+ |w|\\
||z|-|w|| \le |z-w|$$

$$|z_1+z_2+\cdots +z_n| \le |z_1| + |z_2| +\cdots + |z_n|$$
- Producto $$|zw| = |z|\ |w|$$

## Conjugado
<span class="defn">Definición:</span> Si $z=x+yi$, su **conjugado** es $$\bar z = x-yi$$

En el plano complejo el conjugado es simétrico respecto al eje real.

### Propiedades
1. $\overline{\overline {z}} = z$
2. $\overline{z_1 + z_2} = \overline{z_1} + \overline{z_2}$
3. $\overline{z_1 - z_2} = \overline{z_1} - \overline{z_2}$
5. $\overline{z_1  z_2} = \overline{z_1} \cdot \overline{z_2}$
6. Si $z_2 \ne 0$, $$\overline{\left(\frac{z_1}{z_2}\right)} = \frac{\overline{z_1}}{\overline{z_2}}$$
7. $\text{Re }z = \frac{z+\bar z}{2}$
8. $\dfrac{z-\bar z}{2i} = \text{Im }z$
9. $z\cdot \bar z = |z|^2$

En la representación geométrica, el conjugado corresponde al punto reflejado por el eje $x$.

## Coordenadas polares

Un número complejo en coordenadas polares:
$$\begin{align*}
    z &= x+iy\\
    &= r \cos \theta + i r\sin \theta\\
    &=r(\cos \theta + i \sin \theta)    
\end{align*}$$

## Fórmula de Euler
Por definición
$$e^{i\theta} := \cos \theta + i \sin \theta$$

si $z = re^{i\theta}$ y $w=te^{i\alpha}$, $$
zw= rt e^{i(\theta + \alpha)}$$

En polares o la expresión exponencial, $\theta$ se puede remplazar por $\theta + 2k\pi$ con $k \in \mathbb Z$. 

<span class="defn">Definición:</span> Si $z = e^{i\theta}$, a  $\theta$ se le llama el **argumento** de $z$: $$\text{arg }z = \theta
$$
Si $-\pi < \theta \le \pi$, a $\theta$ se le llama el **argumento principal** $$\text{Arg }z = \theta
$$

### Propiedades

Si $z= re^{i\theta}$ y $w= te^{i\alpha}$, entonces:

1. $zw=rt\ e^{i(\theta + \alpha)}$
2. $\dfrac{z}{w} = \frac{r}{t}e^{i(\theta - \alpha)}$
3. $z^{-1} = \frac{1}{r}e^{-i\theta}$
4. $z^n = r^n e^{in\theta}$
5. **Fórmula de Moivre**: $(\cos \theta + i\sin \theta)^n = \cos n\theta + i \sin n \theta$ 

### Operaciones

#### Producto y cociente
Si $z_1=r_1 e^{i \theta_1}$ y $z_2=r_2 e^{i \theta_2}$ entonces:
$$z_1 z_2 = (r_1 r_2) e^{i (\theta_1 + \theta_2)}$$ $$\frac{z_1}{z_2} = \frac{r_1}{r_2} e^{i (\theta_1 - \theta_2)}$$

- $\text{arg}(z_1z_2) = \text{arg}(z_1) + \text{arg}(z_2)$
- $\text{arg}(\frac{z_1}{z_2}) = \text{arg}(z_1) - \text{arg}(z_2)$

#### Raíces

Consideremos el conjunto $$C = \{ z\in \mathbb C : z^n = z_0\} = \{ z\in \mathbb C : z_0^{ 1/n} = z\}$$

Soluciones: $z^{1/n} = r^{1/n} e^{i(\theta/n + 2\pi/n k)}$

Si $\theta = \text{Arg }z$, a $r^{1/n} e^{i(\theta/n)}$ se le llama la raíz principal.


