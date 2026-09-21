- ☐ sin hacer
- 🗹 hecho
# Funciones reales de $n$ variables 

## Sección 1. Derivadas parciales

1. 🗹 Un conjunto $X\subset\mathbb{R}^{n}$ se llama i-convexo $(1\le i\le n)$ cuando para cualesquiera $a, b\in X$ tales que $b=a+te_{i}$, se tiene $[a,b]\subset X$ (Si $X\subset\mathbb{R}^{2}$, se dice entonces que $X$ es horizontalmente convexo o verticalmente convexo, según sea $i=1$ o $i=2$). Pruebe que si el abierto $U\subset\mathbb{R}^{n}$ es i-convexo y la función $f:U\rightarrow\mathbb{R}$ cumple $\frac{\partial f}{\partial x_{i}}(x)=0$ para todo $x\in U$, entonces $f$ no depende de la i-ésima variable, es decir, $x,x+te_{i}\in U\Rightarrow f(x+te_{i})=f(x)$.
>[!demostracion]- Solución
>$x$ y $x+te_{i}$ pertenecen a $U$ entonces $[x,x+te_{i}]\subset U$ y $f(x+te_{i})-f(x)=\frac{\partial f}{\partial x_{i}}(x+\theta te_{i})\cdot t=0$, donde $0<\theta<1$.

2. 🗹 Sean $X=\{(x,0);x\ge0\}$ y $U=\mathbb{R}^{2}-X.$ Defina $f:U\rightarrow\mathbb{R}$ poniendo $f(x,y)=x^{2}$ cuando $x>0$, $y>0$ y $f(x,y)=0$ cuando $x\le0$ o $y<0$. Muestre que se tiene $\frac{\partial f}{\partial y}=0$ en todos los puntos de $U$ pero $f$ depende de $y$.

3. 🗹 Se dice que un camino rectilíneo $f:I\rightarrow\mathbb{R}^{n}$ es paralelo al i-ésimo eje cuando es de la forma $f(t)=a+te_{i}$, $t\in I$. Si $U\subset\mathbb{R}^{n}$ es un abierto conexo, pruebe que dos puntos $a,b\in U$ cualesquiera pueden ser ligados por un camino poligonal contenido en $U$, cuyos tramos rectilíneos son paralelos a los ejes. Concluya que si $U\subset\mathbb{R}^{n}$ es conexo y $f:U\rightarrow\mathbb{R}$ cumple $\frac{\partial f}{\partial x_{i}}(x)=0$ para todo $x\in U$ y cualquier $i$ con $1\le i\le n$, entonces $f$ es constante.
>[!demostracion]- Solución
>Dos puntos cualesquiera de una bola pueden ser ligados por un camino poligonal contenido en ella, el cual tiene sus lados paralelos a los ejes. Se sigue de ahí, por el argumento usado en el Ejercicio 4.3 del Capítulo 2, que lo mismo ocurre en cualquier abierto conexo. Fijando $a\in U$, para todo punto $x\in U$, uniéndolo al punto $a$ por un camino de ese tipo, en cada segmento rectilíneo del camino varía apenas la i-ésima coordenada y, como $\frac{\partial f}{\partial x_{i}}=0$ la función $f$ se mantiene constante a lo largo de ese segmento. Entonces $f(x)=f(a)$ para todo $x\in U$ y $f$ es constante.

4. ☐ Sea $U\subset\mathbb{R}^{n}$ abierto. Si $f:U\rightarrow\mathbb{R}$ posee derivadas parciales $\frac{\partial f}{\partial x_{i}}$ $(i=1,...,n)$ acotadas, pruebe que $f$ es continua.
>[!demostracion]- Solución
>Sea $M\ge|\frac{\partial f}{\partial x_{i}}(x)|$ para todo $x\in U$ y todo $i=1,2,...,n$. Dados $x, x+v\in U$, con $v=(\alpha_{1},...,\alpha_{n})$, definamos $v_{0},v_{1},...,v_{n}\in\mathbb{R}^{n}$ poniendo $v_{0}=0$ y $v_{i}=v_{i-1}+\alpha_{i}e_{i}$ para $i=1,...,n$, de modo que $v_{n}=v$. Entonces $f(x+v)-f(x)=\sum_{i=1}^{n}f(x+v_{i})-f(x+v_{i-1})$. Por el Teorema del Valor Medio de una sola variable, tenemos $|f(x+v_{i})-f(x+v_{i-1})|=|\frac{\partial f}{\partial x_{i}}(z)\cdot\alpha_{i}|$, donde $z\in[v_{i-1},v_{i}]$. Luego $|f(x+v)-f(x)|\le M\cdot\sum_{i=1}^{n}|\alpha_{i}|$ y de ahí resulta la continuidad de $f$.

## Sección 2. Funciones de clase $C^{1}$

1. 🗹 Sea $f:\mathbb{R}^{2}\rightarrow\mathbb{R}$ definida por $f(x,y)=\frac{x^{2}y}{x^{2}+y^{2}} \quad \text{si } (x,y)\ne(0,0) \quad \text{y} \quad f(0,0)=0$. Muestre que, para todo $v=(\alpha,\beta)\in\mathbb{R}^{2}$, existe la derivada direccional $\frac{\partial f}{\partial v}(0,0)$, pero $f$ no es diferenciable en el punto $(0,0)$.
>[!demostracion]- Solución
>Si $v=(\alpha,\beta)$ entonces $\frac{\partial f}{\partial v}(0,0)=\lim_{t\rightarrow0}\frac{1}{t}\cdot\frac{(t\alpha)^{2}t\beta}{(t\alpha)^{2}+(t\beta)^{2}}=\frac{\alpha^{2}\beta}{\alpha^{2}+\beta^{2}}$ para todo $v\ne0$. En particular, $\frac{\partial f}{\partial x}(0,0)=0$ y $\frac{\partial f}{\partial y}(0,0)=0$, luego $\text{grad } f(0,0)=0.$ Si $f$ fuese diferenciable en el punto (0,0), tendríamos $\frac{\partial f}{\partial v}(0,0)=\langle \text{grad } f(0,0),v\rangle$, lo que no ocurre.

2. ☐ Sea $f:\mathbb{R}^{n}\rightarrow\mathbb{R}$ una función continua que posee todas las derivadas direccionales en cualquier punto de $\mathbb{R}^{n}$. Si $\frac{\partial f}{\partial u}(u)>0$ para todo $u\in S^{n-1}$, pruebe que existe $a\in\mathbb{R}^{n}$ tal que $\frac{\partial f}{\partial v}(a)=0$ sea cual sea $v\in\mathbb{R}^{n}$.
>[!demostracion]- Solución
>La condición $\frac{\partial f}{\partial u}(u)>0$ si $u\in S^{n-1}$ implica que $f(tu)<f(u)$ para $1-\epsilon<t<1$ y $\epsilon>0$ suficientemente pequeño. (Cfr. Teorema 4 del Cap. 8, vol. 1.) Por tanto el mínimo de $f(x)$ para $|x|\le1$ se alcanza en un punto $a$ tal que $|a|<1$. Entonces $\varphi(t)=f(a+tv)$ tiene, para todo $v\in\mathbb{R}^{n}$, un mínimo local cuando $t=0$, luego $\frac{\partial f}{\partial v}(a)=\varphi^{\prime}(0)=0$.

3. ☐ Sea $f:\mathbb{R}^{n}\rightarrow\mathbb{R}$ diferenciable en el punto $0$. Si $f(tx)=t\cdot f(x)$ para todo $t>0$ y todo $x\in\mathbb{R}^{n}$, pruebe que $f$ es lineal. Concluya que la función $\varphi:\mathbb{R}^{2}\rightarrow\mathbb{R}$ dada por $\varphi(x,y)=x^{3}/(x^{2}+y^{2})$ si $(x,y)\ne(0,0)$ y $\varphi(0,0)=0$ no es diferenciable en el origen.
>[!demostracion]- Solución
>Se tiene $f(0)=\lim_{t\rightarrow0^{+}}f(tx)=\lim_{t\rightarrow0^{+}}t\cdot f(x)=0.$ Luego, para todo $v\in\mathbb{R}^{n}$, $\frac{\partial f}{\partial v}(0)=\lim_{t\rightarrow0^{+}}\frac{f(tv)}{t}=\lim_{t\rightarrow0^{+}}\frac{tf(v)}{t}=f(v),$ o sea, $\langle \text{grad } f(0),v\rangle=f(v)$. Cambiando la notación, tenemos $f(x)=\langle \text{grad } f(0),x\rangle$ por tanto $f$ es una función linear de $x$. La función cumple $\varphi(tx,ty)=t\cdot\varphi(x,y)$ para todo $t>0$ pero no es linear, luego no es diferenciable en el punto (0,0). (Observación: cuando sabemos que un camino posee límite en un punto, podemos calcularlo como un límite lateral.)

4. ☐ Sea $f:U\rightarrow\mathbb{R}$ de clase $C^{1}$ en el abierto $U\subset\mathbb{R}^{n}$. Pruebe que, dados $a\in U$ y $\epsilon>0$, existe $\delta>0$ tal que $x, y\in U$, $|x-a|<\delta$, $|y-a|<\delta\Rightarrow f(x)-f(y)=\langle \text{grad } f(a),x-y\rangle+r(x,y)$, donde $|r(x,y)|<\epsilon|x-y|$.
>[!demostracion]- Solución
>La igualdad $f(x)=f(a)+\sum\frac{\partial f}{\partial x_{i}}(a)\cdot(x_{i}-a_{i})+r(x)$ muestra que $r$ es una función de clase $C^{1}$, con $\frac{\partial r}{\partial x_{i}}(a)=0$ para $i=1,...,n$. La continuidad de las derivadas $\frac{\partial r}{\partial x_{i}}$ en el punto $a$ y el Teorema del Valor Medio nos aseguran entonces que, para todo $\epsilon>0$ dado, existe $\delta>0$ tal que $|x-a|<\delta$ y $|y-a|<\delta$ implican $|r(x)-r(y)|<\epsilon|x-y|.$ Restando miembro a miembro las desigualdades $f(x) = f(a)+\langle \text{grad } f(a), x-a\rangle+r(x)$ y $f(y)=f(a)+\langle \text{grad } f(a),y-a\rangle+r(y)$ viene $f(x)-f(y)=\langle \text{grad } f(a),x-y\rangle+r(x,y),$ donde, escribiendo $r(x,y)=r(x)-r(y)$ tenemos $|x-a|<\delta$, $|y-a|<\delta\Rightarrow|r(x,y)|<\epsilon|x-y|$.

## Sección 3. El Teorema de Schwarz

1. ☐ Sea $f:I\times J\rightarrow\mathbb{R}$ de clase $C^{2}$ en el rectángulo abierto $I\times J\subset\mathbb{R}^{2}$. Si $\frac{\partial^{2}f}{\partial x\partial y}$ es idénticamente nula, pruebe que existen $\varphi:I\rightarrow\mathbb{R}$, $\psi:J\rightarrow\mathbb{R}$ de clase $C^{2}$ tales que $f(x,y)=\varphi(x)+\psi(y)$ para todo $(x,y)\in I\times J$.
>[!demostracion]- Solución
>Como $\frac{\partial}{\partial x}(\frac{\partial f}{\partial y})$ y $\frac{\partial}{\partial y}(\frac{\partial f}{\partial x})$ son idénticamente nulas, $\frac{\partial f}{\partial y}$ no depende de $x$ y $\frac{\partial f}{\partial x}$ no depende de $y$. Fijando $(x_{0},y_{0})\in I\times J$ podemos entonces definir las funciones $\overline{\varphi}:I\rightarrow\mathbb{R}$ y $\overline{\psi}:J\rightarrow\mathbb{R}$ poniendo $\overline{\varphi}(x)=\frac{\partial f}{\partial x}(x,y_{0})$ y $\overline{\psi}(y)=\frac{\partial f}{\partial y}(x_{0},y)$, las cuales son de clase $C^{1}$ y cumplen $\overline{\varphi}(x)=\frac{\partial f}{\partial x}(x,y)$, $\overline{\psi}(y)=\frac{\partial f}{\partial y}(x,y)$ para todo $(x,y)\in I\times J$. Entonces:
>$f(x,y)=f(x,y)-f(x_{0},y)+f(x_{0},y)-f(x_{0},y_{0})+f(x_{0},y_{0})=$
>$=\int_{x_{0}}^{x}\frac{\partial f}{\partial x}(s,y)ds+\int_{y_{0}}^{y}\frac{\partial f}{\partial y}(x_{0},t)dt+f(x_{0},y_{0})=$
>$=\int_{x_{0}}^{x}\overline{\varphi}(s)ds+\int_{y_{0}}^{y}\overline{\psi}(t)dt+f(x_{0},y_{0})=\varphi(x)+\psi(y).$

2. ☐ Use el ejercicio anterior para probar que si $g:\mathbb{R}\times\mathbb{R}\rightarrow\mathbb{R}$ es de clase $C^{2}$, con $\frac{\partial^{2}g}{\partial x^{2}}=\frac{\partial^{2}g}{\partial y^{2}}$, entonces existen $\varphi:\mathbb{R}\rightarrow\mathbb{R}$ y $\psi:\mathbb{R}\rightarrow\mathbb{R}$ de clase $C^{2}$, tales que $g(x,y)=\varphi(x+y)+\psi(x-y)$ para todo $(x,y)$.
>[!demostracion]- Solución
>Defina $f:\mathbb{R}\times\mathbb{R}\rightarrow\mathbb{R}$, poniendo $f(x,y)=g(x+y,x-y)$. Verifique que $\frac{\partial^{2}f}{\partial x\partial y}$ es idénticamente nula y aplique el ejercicio anterior.

3. ☐ Sea $f:\mathbb{R}^{n}\rightarrow\mathbb{R}$ de clase $C^{2}$, tal que $f(tx)=t^{2}\cdot f(x)$ para todo $t>0$ y todo $x\in\mathbb{R}^{n}$. Pruebe que existen $a_{ij}\in\mathbb{R}$ ($i,j=1,...,n$) tales que $f(x)=\sum_{i,j=1}^{n}a_{ij}x_{i}x_{j}$ para todo $x=(x_{1},...,x_{n})\in\mathbb{R}^{n}$. ¿Cómo explicar $f(x,y)=\frac{x^{4}+y^{4}}{x^{2}+y^{2}}$?
>[!demostracion]- Solución
>Derivando dos veces en relación a $t$, la igualdad $f(tx)=t^{2}\cdot f(x)$ nos da $f(x)=\frac{1}{2}\sum_{i,j}\frac{\partial^{2}f}{\partial x_{i}\partial x_{j}}(tx)x_{i}x_{j}$. Tomando el límite cuando $t\rightarrow0$ por valores positivos llegamos a $f(x)=\sum a_{ij}x_{i}x_{j}$, donde $a_{ij}=\frac{1}{2}\frac{\partial^{2}f}{\partial x_{i}\partial x_{j}}(0).$

4. ☐ Sean $f,\varphi:U\rightarrow\mathbb{R}^{n+1}$ de clase $C^{2}$ en el abierto $U\subset\mathbb{R}^{n}$. (Es decir, las funciones coordenadas de $f$ y $\varphi$ son de clase $C^{2}$.) Suponga que $\langle f(x),\frac{\partial\varphi}{\partial x_{i}}(x)\rangle=0$ para todo $x\in U$ y todo $i=1,...,n$. Pruebe que la matriz $[a_{ij}(x)]$, donde $a_{ij}(x)=\langle\frac{\partial f}{\partial x_{i}}(x), \frac{\partial\varphi}{\partial x_{j}}(x)\rangle$, es simétrica, sea cual sea $x\in U$.
>[!demostracion]- Solución
>Tome las igualdades $\langle f(x), \frac{\partial\varphi}{\partial x_{i}}(x)\rangle=0;$ , $\langle f(x), \frac{\partial\varphi}{\partial x_{j}}(x)\rangle=0$, derive la primera en relación a $x_{j}$ y la segunda en relación a $x_{i}$. Use Schwarz.

## Sección 4. La fórmula de Taylor

1. ☐ Sea $r:U\rightarrow\mathbb{R}$ una función de clase $C^{k}$, definida en un abierto $U\subset\mathbb{R}^{n}$ que contiene al origen $0$. Si $r$, junto con todas sus derivadas parciales hasta las de orden $k$, se anulan en el punto $0$, pruebe que $\lim_{v\rightarrow0}\frac{r(v)}{|v|^{k}}=0$.
>[!demostracion]- Solución
>Esto es obvio para $k=1$, por la propia definición de diferenciabilidad y, para $k=2$, fue probado en el texto. En el caso general, por la hipótesis de inducción, considerando que las derivadas parciales $\frac{\partial r}{\partial x_{i}}$ se anulan, junto con todas sus derivadas hasta el orden $k-1$, en el punto 0, se concluye que $\lim_{x\rightarrow0}\frac{|\text{grad } r(x)|}{|x|^{k-1}}=0$. Ahora, por el Teorema del Valor Medio, para todo $x$ en una bola de centro contenida en $U$, existe $\theta\in(0,1)$ tal que $r(x)=r(x)-r(0)=\langle \text{grad } r(\theta x),x\rangle$, luego $\frac{|r(x)|}{|x|^{k}}=\frac{|\langle \text{grad } r(\theta x),x\rangle|}{|x|^{k}}\le\frac{|\text{grad } r(\theta x)|}{|x|^{k-1}}$, por tanto $\lim_{x\rightarrow0}\frac{|r(x)|}{|x|^{k}}=0.$

2. ☐ Sea $f:U\rightarrow\mathbb{R}$ de clase $C^{3}$ en el abierto $U\subset\mathbb{R}^{n}$, el cual contiene $a$ y $a+v$, con $v=(\alpha_{1},...,\alpha_{n})$. Escriba $df(a)\cdot v=\sum_{i}\frac{\partial f}{\partial x_{i}}\cdot\alpha_{i}$, $d^{2}f(a)\cdot v^{2}=\sum_{i,j}\frac{\partial^{2}f}{\partial x_{i}\partial x_{j}}\cdot\alpha_{i}\cdot\alpha_{j}$ y $d^{3}f(a)\cdot v^{3}=\sum_{i,j,k}\frac{\partial^{3}f}{\partial x_{i}\partial x_{j}\partial x_{k}}\cdot\alpha_{i}\cdot\alpha_{j}\cdot\alpha_{k}$, estando las derivadas parciales calculadas en el punto $x=a$ y los índices $i, j, k$ variando de $1$ a $n$. Ponga 
$$
f(a+v)-f(a)=df(a)\cdot v+\frac{1}{2}d^{2}f(a)\cdot v^{2}+\frac{1}{3!}d^{3}f(a)\cdot v^{3}+r_{3}(v)
$$
y pruebe que $\lim_{v\rightarrow0}\frac{r_{3}(v)}{|v|^{3}}=0$.
Extienda el resultado para funciones de clase $C^{k}$, $1\le k<+\infty$.
>[!demostracion]- Solución
>Siga las mismas líneas de la demostración del Teorema 5 (Cap. 3), haciendo uso del ejercicio anterior y observando que, en la expresión $\frac{1}{3!}\sum_{i,j,k}\frac{\partial^{3}f}{\partial x_{i}\partial x_{j}\partial x_{k}}(a)\alpha_{i}\alpha_{j}\alpha_{k}$ la i-ésima variable $\alpha_{i}$ ocurre en 3 términos (como $1^{\circ}$, $2^{\circ}$ o $3^{\circ}$ factor), luego la derivada de esa expresión relativamente a su i-ésima variable es igual a $\frac{1}{2}\sum_{j,k}\frac{\partial^{3}f}{\partial x_{i}\partial x_{j}\partial x_{k}}(a)\alpha_{j}\alpha_{k}$. El caso general es análogo.

## Sección 5. Puntos críticos

1. ☐ Una función $f:U\rightarrow\mathbb{R}$, de clase $C^{2}$ en el abierto $U\subset\mathbb{R}^{n}$, se llama armónica cuando $\sum_{i=1}^{n}\frac{\partial^{2}f}{\partial x_{i}\partial x_{i}}(x)=0$ para todo $x\in U$. Pruebe que la matriz hessiana de una función armónica no puede ser definida (ni positiva ni negativa).
>[!demostracion]- Solución
>Si $[h_{ij}]$ es la matriz de la forma cuadrática $H$ entonces $h_{ii}=H\cdot e_{i}^{2}$ con $e_{i}=(0,...,1,...,0)$. Por tanto los elementos de la diagonal de la matriz de una forma cuadrática positiva (o negativa) son todos números positivos (o negativos) y así su suma no puede ser igual a cero.

2. ☐ Sea $f:U\rightarrow\mathbb{R}$ una función arbitraria, definida en un abierto $U\subset\mathbb{R}^{n}$. Pruebe que el conjunto de los puntos de máximo (o de mínimo) local estricto de $f$ es enumerable.
>[!demostracion]- Solución
>Sea $X$ el conjunto de los puntos de máximo local estricto de $f$. Dado $x\in X$, existe una bola $B(x;2\delta)$, contenida en $U$, tal que $y\in B(x;2\delta)$, $y\ne x\Rightarrow f(y)<f(x)$. Escojamos, para cada $x\in X$, un punto $q_{x}\in\mathbb{Q}^{n}\cap B(x;\delta)$ y un número racional $r_{x}>0$ tal que $|x-q_{x}|<r_{x}<\delta$, por tanto $B(q_{x};r_{x})\subset B(x;2\delta)$ y de ahí $y\in B(q_{x};r_{x})$, $y\ne x\Rightarrow f(y)<f(x)$. La correspondencia $x\mapsto(q_{x},r_{x})$ es inyectiva pues si $q_{x}=q_{x^{\prime}}$ y $r_{x}=r_{x^{\prime}}$ entonces $x^{\prime}\in B(q_{x};r_{x})$ y $x\in B(q_{x^{\prime}};r_{x^{\prime}})$. Si fuese $x\ne x^{\prime}$ tendríamos $f(x^{\prime})<f(x)$ y $f(x)<f(x^{\prime})$.

3. ☐ Determine los puntos críticos de la función $f:\mathbb{R}^{2}\rightarrow\mathbb{R}$, $f(x,y)=\cos(x^{2}+y^{2})$. Idem para $g(x,y)=x^{3}-y^{3}-x+y$.
>[!demostracion]- Solución
>Como $\text{grad } f(x,y)=-2\sin(x^{2}+y^{2})\cdot(x,y)$, los puntos críticos de $f$ son el origen $x=y=0$ y los puntos de las circunferencias con centro en el origen y radios iguales a $\sqrt{k\pi}$ ($k\in\mathbb{N}$). Cuanto a la función $g(x,y)=x^{3}-y^{3}-x+y$ cuyo gradiente es el vector $\text{grad } g(x,y)=(3x^{2}-1,-3y^{2}+1)$, su matriz hessiana es $Hg(x,y)=[\begin{matrix}6x&0\\ 0&-6y\end{matrix}]$. Los puntos críticos de $g$ son $A=(\sqrt{3}/3,\sqrt{3}/3)$, $B=(-\sqrt{3}/3,\sqrt{3}/3)$, $C=(\sqrt{3}/3,-\sqrt{3}/3)$ y $D=(-\sqrt{3}/3,-\sqrt{3}/3)$. En esos puntos, la matriz hessiana de $g$ asume cada uno de los 4 valores $[\begin{matrix}\pm2\sqrt{3}&0\\ 0&\pm2\sqrt{3}\end{matrix}]$ correspondiendo los signos a los de las coordenadas de A, B, C y D. Luego $Hg$ es positiva en el punto C, que es por tanto un punto de mínimo local, negativa en el punto B de máximo local y, en los puntos críticos A y D, la forma hessiana $Hg$ es indefinida, luego esos puntos no son máximos ni mínimos locales: son los llamados "puntos de silla".

4. ☐ Sea $f:U\rightarrow\mathbb{R}$ diferenciable en el abierto acotado $U\subset\mathbb{R}^{n}$. Si, para todo $a\in \text{fr}.U$, se tiene $\lim_{x\rightarrow a}f(x)=0$, pruebe que existe en $U$ al menos un punto crítico de $f$.
>[!demostracion]- Solución
>La función $F:\overline{U}\rightarrow\mathbb{R}$, definida por $F(x)=f(x)$ si $x\in U$ y $F(x)=0$ si $x\in \text{fr}.U$, es continua en el compacto $\overline{U}$ y diferenciable en $U$. A menos que $F$ sea idénticamente nula (en cuyo caso todo punto de $U$ es crítico para $f$), su valor máximo o su valor mínimo se alcanza en un punto $a\in U$, el cual es un punto crítico de $f$.

5. ☐ Determine los puntos críticos de la función $f:\mathbb{R}^{2}\rightarrow\mathbb{R}$ dada por $f(x,y)=x^{2}+y^{2}+(x^{2}-y^{2}-1)^{2}$ y calcule las matrices hessianas correspondientes.
>[!demostracion]- Solución
>Como $\frac{\partial f}{\partial x}=2x(2x^{2}-2y^{2}-1)$ y $\frac{\partial f}{\partial y}=2y(2y^{2}-2x^{2}+3),$ los puntos críticos de $f$ son (0,0) y $(\pm\frac{\sqrt{2}}{2},0)$, donde las matrices hessianas son $Hf(0,0)=[\begin{matrix}-2&0\\ 0&6\end{matrix}]$ y $Hf(\pm\frac{\sqrt{2}}{2},0)=[\begin{matrix}4&0\\ 0&4\end{matrix}]$. Por tanto el origen (0,0) es un punto de silla (máximo respecto a $x$ y mínimo respecto a $y$) mientras los puntos $(\pm\frac{\sqrt{2}}{2},0)$ son de mínimo local.

6. ☐ Dados $a_{1},...,a_{k}$ en $\mathbb{R}^{n}$, determine el punto en el que la función $f:\mathbb{R}^{n}\rightarrow\mathbb{R}$, dada por $f(x)=\sum_{i=1}^{k}|x-a_{i}|^{2}$, asume el valor mínimo.
>[!demostracion]- Solución
>Tenemos $f(x)=\sum_{i=1}^{k}\langle x-a_{i},x-a_{i}\rangle=\sum_{i,j=1}^{k,n}(x_{j}-a_{ij})^{2}$ donde $x=(x_{1},...,x_{n})$ y $a_{i}=(a_{i1},...,a_{in})$. Entonces, para $j=1,...,n$, tenemos $\frac{\partial f}{\partial x_{j}}(x)=2(kx_{j}-\sum_{i}a_{ij})$. Por tanto, el punto $x$ es crítico para $f$ si, y solo si, $x_{j}=\frac{1}{k}\sum_{i}a_{ij}$ para todo $j$, o sea, $x=\frac{1}{k}\sum_{i=1}^{k}a_{i}$. (Baricentro del sistema formado por los puntos $a_{1},...,a_{k}.$) Tenemos además $\frac{\partial^{2}f}{\partial x_{m}\partial x_{j}}(x)=0$ para $m\ne j$ y $\frac{\partial^{2}f}{\partial x_{j}^{2}}(x)=2k$, por tanto la matriz hessiana es diagonal y positiva, luego el punto crítico $x=\frac{1}{k}\sum_{i=1}^{k}a_{i}$ es de mínimo. (Note que $f$ es conexa.)

## Sección 6. Funciones conexas

1. ☐ Sea $A\subset\mathbb{R}^{n}$ un conjunto convexo. Pruebe que la función $f:\mathbb{R}^{n}\rightarrow\mathbb{R}$, definida por $f(x)=d(x,A)$ es conexa.
>[!demostracion]- Solución
>Para $x,y\in\mathbb{R}^{n}$ y $t\in[0,1],$ sean $\overline{x},\overline{y}\in\overline{A}$ tales que $d(x,A)=|x-\overline{x}|$ y $d(y,A)=|y-\overline{y}|$. Entonces $(1-t)\overline{x}+t\overline{y}\in\overline{A}$ (pues la clausura de un conjunto convexo es también conexa). Y como $d(x,A)=d(x,\overline{A})$, tenemos: $f((1-t)x+ty)=d((1-t)x+ty,A)\le|[(1-t)x+ty]-[(1-t)\overline{x}+t\overline{y}]|=|(1-t)(x-\overline{x})+t(y-\overline{y})|\le (1-t)|x-\overline{x}|+t|y-\overline{y}|=(1-t)f(x)+tf(y)$.

2. ☐ Pruebe que todo punto de mínimo local de una función conexa es un punto de mínimo global. Además, el conjunto de los puntos de mínimo es convexo.
>[!demostracion]- Solución
>Sea $a\in X$ un punto de mínimo local de la función conexa $f:X\rightarrow\mathbb{R}$. Si existiese $x\in X$ tal que $f(x)<f(a)$ entonces, para todo $t\in[0,1]$, tendríamos $f((1-t)a+tx)\le(1-t)f(a)+tf(x)<(1-t)f(a)+tf(a)=f(a)$. Tomando $t>0$ pequeño, obtendríamos puntos $y=(1-t)a+tx$ tan próximos a $a$ como se desee, con $f(y)<f(a)$, luego $a$ no sería un punto de mínimo local.

3. ☐ Pruebe que una función conexa, $f:U\rightarrow\mathbb{R}$ con $U$ abierto, (incluso no diferenciable) no posee puntos de máximo local estricto.
>[!demostracion]- Solución
>Todo punto $a\in U$ es punto medio de segmentos de recta $[b,c]\subset U$ tan pequeños como se quiera, luego $f(a)\le\frac{1}{2}[f(b)+f(c)]$ y entonces no se puede tener $f(a)>f(b)$ y $f(a)>f(c)$.

4. ☐ Pruebe que el conjunto de los puntos críticos (todos necesariamente mínimos globales) de una función conexa diferenciable es un conjunto convexo, en el cual $f$ es constante.
>[!demostracion]- Solución
>Si $a,b\in U$ son puntos críticos de la función conexa diferenciable $f:U\rightarrow\mathbb{R}$ entonces ambos son puntos de mínimo global de $f$. En particular, $f(a)=f(b)$. Así, $t\in[0,1]\Rightarrow f((1-t)a+tb)\le(1-t)f(a)+tf(b)=f(a)$, de donde $f((1-t)a+tb)=f(a)$ por la minimalidad.

5. ☐ Si $f:X\rightarrow\mathbb{R}$ es conexa, pruebe que, para todo $c\in\mathbb{R}$, el conjunto de los puntos $x\in X$ tales que $f(x)\le c$ es convexo. Dé un ejemplo que muestre que el recíproco es falso.
>[!demostracion]- Solución
>Si $f(x)\le c$ y $f(y)\le c$ entonces, para todo $t\in[0,1]$ vale $f((1-t)x+ty)\le(1-t)f(x)+tf(y)\le(1-t)c+tc=c.$ Para toda función monótona $f:I\rightarrow\mathbb{R}$ definida en un intervalo $I\subset\mathbb{R}$, el conjunto $\{x\in I;f(x)\le c\}$ es un intervalo, pero $f$ puede no ser conexa.

6. ☐ Una función $f:X\rightarrow\mathbb{R}$ definida en un conjunto convexo $X\subset\mathbb{R}^{n}$ se llama cuasiconvexa cuando, para todo $c\in\mathbb{R}$, el conjunto $X_{c}=\{x\in X;f(x)\le c\}$ es convexo. Pruebe que $f$ es cuasiconvexa si, y solo si, $f((1-t)x+ty)\le \max\{f(x), f(y)\}$ para cualesquiera $x,y\in X$ y $t\in[0,1]$.
>[!demostracion]- Solución
>Para $f:X\rightarrow\mathbb{R}$ cuasiconvexa y $x,y\in X$, sea $c=\max\{f(x),f(y)\}$. Entonces $f(x)\le c$ y $f(y)\le c,$ luego $f((1-t)x+ty)\le c=\max\{f(x),f(y)\}$ para todo $t\in[0,1]$. Recíprocamente, suponiendo que $f((1-t)x+ty)\le \max\{f(x),f(y)\}$ para cualesquiera $x,y\in X$ y $t\in [0, 1]$, sean $x,y\in X$ tales que $f(x)\le c$ y $f(y)\le c.$ Entonces $\max\{f(x),f(y)\}\le c$ por tanto $t\in[0,1]\Rightarrow f((1-t)x+ty)\le \max\{f(x),f(y)\}\le c$ y $f$ es cuasiconvexa.

# Funciones Implícitas

## Sección 1. Una función implícita

1. ☐ Sea $f:\mathbb{R}^{2}\rightarrow\mathbb{R}$ de clase $C^{k}$ $(k\ge1)$. Suponga que existen un punto $(x_{0},y_{0})\in\mathbb{R}^{2}$ y una constante $M$ tales que $f(x_{0},y_{0})=0$, $\frac{\partial f}{\partial y}(x,y)\ne0$ y $|\frac{\partial f}{\partial x}(x,y)/\frac{\partial f}{\partial y}(x,y)|\le M$ para todo $(x,y)\in\mathbb{R}^{2}$. Pruebe que, para todo $x\in\mathbb{R}$, existe un único $y=\xi(x)\in\mathbb{R}$ tal que $f(x,\xi(x))=0$ y que la función $\xi:\mathbb{R}\rightarrow\mathbb{R}$ así definida, es de clase $C^{k}$.
>[!demostracion]- Solución
>Sea $X$ el conjunto de los puntos $x_{0}\in\mathbb{R}$ que tienen un entorno $V$ en el cual está definida una función $\xi$ tal que $f(x,\xi(x))=0$ para todo $x\in V$. Esta función es única, pues la condición $\frac{\partial f}{\partial y}\ne0$ asegura que $f$ es monótona a lo largo de cada recta vertical. Luego, podemos considerar $\xi:X\rightarrow\mathbb{R}$. Por el Teorema de la Función Implícita, $X$ es abierto y $\xi$ es de clase $C^{k}$. Cada intervalo $I$, componente de $X$, es cerrado pues si $x_{k}\in I\subset X$ y $\lim x_{k} = x_{0}$ entonces, como $\xi^{\prime}=-\frac{\partial f/\partial x}{\partial f/\partial y}$ tenemos $\vert{}\xi^{\prime}\vert{}\le M$ en $I$, por tanto $\xi:I\rightarrow\mathbb{R}$ es uniformemente continua y, así, existe $y_{0}=\lim \xi(x_{k})$, con $f(x_{0},y_{0})=\lim f(x_{k},\xi(x_{k}))=0$. Por el Teorema de la Función Implícita, tenemos $x_{0}\in X$. Como $\mathbb{R}$ es conexo y $X\ne\emptyset$, se sigue que $X=\mathbb{R}$.

2. ☐ Sea $f:U\rightarrow\mathbb{R}$ de clase $C^{1}$ en el abierto $U\subset\mathbb{R}^{n}$. Si $f$ no posee puntos críticos, pruebe que la imagen $f(A)$ de todo abierto $A\subset U$ es un conjunto abierto en $\mathbb{R}$.
>[!demostracion]- Solución
>En cada punto $x_{0}\in A$ una de las derivadas parciales de $f$, digamos $\frac{\partial f}{\partial x_{i}}$, es $\ne0$. Luego $f$ transforma un segmento de recta paralelo al i-ésimo eje, conteniendo a $x_{0}$ y lo suficientemente pequeño para estar contenido en $A$, inyectiva y monótonamente sobre un intervalo que contiene a $f(x_{0})$ y contenido en $f(A)$, por tanto $f(A)$ es abierto.

3. ☐ Sea $f:\mathbb{R}^{3}\rightarrow\mathbb{R}$ dada por $f(x,y,z)=x^{4}+2x\cdot \cos y+\sin z$. Pruebe que, en un entorno de 0, la ecuación $f(x,y,z)=0$ define a $z$ como función de clase $C^{\infty}$ de las variables $x, y$. Calcule $\frac{\partial z}{\partial x}$ y $\frac{\partial z}{\partial y}$.
>[!demostracion]- Solución
>Tenemos $\frac{\partial f}{\partial z}=\cos z\ne0$ en un entorno del origen, luego cerca de 0 la ecuación $x^{4}+2x\cdot \cos y+\sin z=0$ define a $z$ como función de $x$ e $y$. Se tiene $\frac{\partial z}{\partial x}=\frac{-\partial f/\partial x}{\partial f/\partial z}=\frac{-(4x^{3}+2\cos y)}{\cos z}$ y $\frac{\partial z}{\partial y}=\frac{-\partial f/\partial y}{\partial f/\partial z}=\frac{2x\sin y}{\cos z}$.

4. ☐ Sea $f:\mathbb{R}\times[0,1)\rightarrow\mathbb{R}$ la función continua definida por $f(x,y)=(x^{2}+y^{2})(ye^{|x|}-1)$. Pruebe que, para cada $x\in\mathbb{R}$ existe un único $y=\xi(x)\in[0,1)$ tal que $f(x,\xi(x))=0$, pero la función $\xi:\mathbb{R}\rightarrow[0,1)$ no es continua.
>[!demostracion]- Solución
>La función $\xi:\mathbb{R}\rightarrow[0,1)$ está definida por $\xi(0)=0$ y $\xi(x)=e^{-\vert{}x\vert{}}$ si $x\ne0$. Ella es la única función con valores en $[0, 1)$ que cumple $f(x,\xi(x))=0$ pero no es continua.

5. ☐ Sean $f,g:\mathbb{R}^{n}\rightarrow\mathbb{R}$ tales que, para todo $x\in\mathbb{R}^{n}$, vale $g(x)=f(x)(1+f(x)^{4})$. Si $g\in C^{k}$, $k\ge1$, pruebe que $f$ también es de clase $C^{k}$.
>[!demostracion]- Solución
>Sea $\varphi:\mathbb{R}^{n+1}\rightarrow\mathbb{R}$ definida por $\varphi(x,y)=g(x)-y(1+y^{4})$. Entonces $\frac{\partial\varphi}{\partial y}(x,y)=-1-5y^{4}\ne0$ para todo $(x,y)\in\mathbb{R}^{n+1}$. Así, para todo $x_{0}\in\mathbb{R}^{n}$, poniendo $y_{0}=f(x_{0})$ tenemos $\varphi(x_{0},y_{0})=0$. Por el Teorema de la Función Implícita, existen una bola $B=B(x_{0},\delta)\subset\mathbb{R}^{n}$, un intervalo $J=[y_{0}-\epsilon,y_{0}+\epsilon]$ y una función $\xi:B\rightarrow J$ de clase $C^{k}$ tales que, para todo $x\in B$, $\xi(x)$ es el único punto en $J$ tal que $\varphi(x,\xi(x))=0$. Como $f$ es continua (¡pruebe esto!), podemos tomar $\delta>0$ tan pequeño que $f(B)\subset J$. Y, sabiendo que $\varphi(x,f(x))=0$ para todo $x\in B$ concluimos que $f(x)=\xi(x)$ si $x\in B$, por tanto $f$ es de clase $C^{k}$.

## Sección 2. Hipersuperficies

1. ☐ Pruebe que el conjunto $M\subset\mathbb{R}^{n^{2}}$ de las matrices $n\times n$ de rango $n-1$ es una hipersuperficie orientable. Determine $T_{p}M$ donde $p$ es la matriz $n\times n$ cuyos elementos son todos nulos excepto los $n-1$ primeros de la diagonal, que son iguales a 1.
>[!demostracion]- Solución
>Sea $U\subset\mathbb{R}^{n^{2}}$ el conjunto abierto formado por las matrices $x$ del tipo $n\times n$ para las cuales al menos un menor determinante $X_{ij}$ es $\ne0$. La ij-ésima derivada parcial de la función $f:U\rightarrow\mathbb{R}$ dada por $f(x)=\det x$ es $\frac{\partial f}{\partial x_{ij}}(x)=(-1)^{i+j}X_{ij}$, por tanto todo número $c\in\mathbb{R}$ es un valor regular de $f$. Como $M=f^{-1}(0)$, concluimos que $M$ es una hipersuperficie orientable. El espacio tangente $T_{p}M$ está formado por las matrices ortogonales a $\text{grad } f(p)$. Ahora bien, las coordenadas de $\text{grad } f(x)$ son $(-1)^{i+j}X_{ij}$. Luego $\text{grad } f(p)$ es la matriz $n\times n$ cuyo único elemento no nulo es igual a 1 y está en la n-ésima fila con la n-ésima columna. Por tanto, una matriz $x=[x_{ij}]$ es ortogonal a $\text{grad } f(p)$ si, y solo si, $x_{nn}=0$. Tales matrices forman el espacio $T_{p}M$.

2. ☐ Pruebe que el conjunto de los puntos $(x,y,z)\in\mathbb{R}^{3}$ tales que $z^{2}+(\sqrt{x^{2}+y^{2}}-2)^{2}=1$ es una superficie $C^{\infty}$. ¿Qué forma tiene esa superficie?
>[!demostracion]- Solución
>Sea $U = \{(x, y, z) \in \mathbb{R}^3; x^2 + y^2 \ne 0\}$ el complementario del eje vertical en $\mathbb{R}^{3}$. La función $f:U\rightarrow\mathbb{R}$, definida por $f(x,y,z)=z^{2}+(\sqrt{x^{2}+y^{2}}-2)^{2}$, es de clase $C^{\infty}$ y su gradiente es $\text{grad } f(x,y,z)=(\frac{2x(\sqrt{x^{2}+y^{2}}-2)}{\sqrt{x^{2}+y^{2}}},\frac{2y(\sqrt{x^{2}+y^{2}}-2)}{\sqrt{x^{2}+y^{2}}},2z)$, el cual se anula apenas en los puntos de la circunferencia $x^{2}+y^{2}=4$, $z=0$, todos en el nivel cero de $f$. Por tanto 1 es valor regular y $f^{-1}(1)=M$ una superficie $C^{\infty}$ en $\mathbb{R}^{3}$. $M$ es el toro obtenido por la rotación de una circunferencia vertical de radio 1, cuyo centro describe la circunferencia $x^{2}+y^{2}=4$ en el plano $z=0$.

3. ☐ Pruebe que toda hipersuperficie $M\subset\mathbb{R}^{n+1}$ es localmente orientable en el siguiente sentido: cada punto $p\in M$ posee un entorno $V$ en $M$ en la cual está definido un campo continuo $v:V\rightarrow\mathbb{R}^{n+1}$ de vectores no nulos normales a $M$ (es decir $v(x)\perp T_{x}M$ para todo $x\in V$).
>[!demostracion]- Solución
>Dado $p\in M$, podemos escribir los puntos de $\mathbb{R}^{n+1}$ bajo la forma $(x,y)$, con $x\in\mathbb{R}^{n}$, $y\in\mathbb{R}$ y tomar un abierto $U\subset\mathbb{R}^{n+1}$ con $p\in U$, tal que $V=M\cap U$ sea el gráfico $V=\{(x,\xi(x));x\in V_{0}\}$ de una función $\xi:V_{0}\rightarrow\mathbb{R}$, de clase $C^{k}$ $(k\ge1)$. Entonces la función $f:U\rightarrow\mathbb{R}$, definida por $f(x,y)=y-\xi(x)$, no posee puntos críticos pues $\frac{\partial f}{\partial y}\equiv1$. Además, $V=f^{-1}(0)$, por tanto en cada punto $z\in V$, el vector $v(z)=\text{grad } f(z)$ es ortogonal a $T_{z}M$, por tanto $v:V\rightarrow\mathbb{R}^{n+1}$ es un campo de clase $C^{k-1}$ de vectores no nulos normales a $M$.

## Sección 3. Multiplicadores de Lagrange

1. ☐ Sea $\langle Ax,x\rangle=1$ la ecuación de un elipsoide $M$ en $\mathbb{R}^{n+1}$. Pruebe que la mayor distancia de un punto de $M$ al origen es $1/\sqrt{\mu}$, donde $\mu$ es el menor autovalor del operador positivo $A$. Esta distancia se alcanza en un punto $x\in M$ que es autovector de $A$, correspondiente al autovalor $\mu$.
>[!demostracion]- Solución
>Sean $f,\varphi:\mathbb{R}^{n+1}\rightarrow\mathbb{R}$ dadas por $f(x)=\vert{}x\vert{}^{2}$ y $\varphi(x)=\langle Ax,x\rangle$. Entonces $\text{grad } f(x)=2x$ y $\text{grad } \varphi(x)=2Ax$. Los puntos críticos de $f\vert{}M,$ donde $M=\varphi^{-1}(1)$, son los puntos $x\in M$ tales que $\text{grad } f(x) = \lambda \cdot \text{grad } \varphi(x)$, o sea, $x=\lambda\cdot Ax,$ luego $x$ es un autovector de $A$, correspondiente al autovalor $\lambda^{-1}$. De $x=\lambda Ax$ resulta que $\vert{}x\vert{}^{2}=\langle x,x\rangle=\lambda\langle Ax,x\rangle=\lambda.$ Por tanto, cuando $x$ varía en $M$, el mayor valor de $\vert{}x\vert{}^{2}$ es el mayor $\lambda$ tal que $1/\lambda$ es autovalor de $A$. En otras palabras, la mayor distancia de un punto del elipsoide $M$ al origen es $1/\sqrt{\mu}$ donde $\mu=1/\lambda$ es el menor autovalor de $A$.

2. ☐ Sea $H$ el hiperplano de $\mathbb{R}^{n+1}$ definido por la ecuación $\langle b,x\rangle=c$. Use el método del multiplicador de Lagrange para mostrar que el punto de $H$ más próximo al punto $a\in\mathbb{R}^{n+1}$ es $x=a+\frac{c-\langle b,a\rangle}{|b|^{2}}\cdot b.$
>[!demostracion]- Solución
>Sean $f,\varphi:\mathbb{R}^{n+1}\rightarrow\mathbb{R}$, $f(x)=\vert{}x-a\vert{}^{2}$, $\varphi(x)=\langle b,x\rangle$, $H=\varphi^{-1}(c)$, $\text{grad } f(x)=2(x-a)$, $\text{grad } \varphi(x)=b$. Si $x\in H$ es punto crítico de $f\vert{}H$ entonces $\langle b,x\rangle=c$ y $2(x-a)=\lambda b$, o sea, $x=a+\frac{\lambda}{2}b$. El producto interno de la última igualdad por $b$ nos da $c=\langle b,x\rangle=\langle b,a\rangle+\frac{\lambda}{2}\vert{}b\vert{}^{2}$, de donde $\frac{\lambda}{2}=\frac{c-\langle b,a\rangle}{\vert{}b\vert{}^{2}}$ y de ahí $x=a+\frac{c-\langle b,a\rangle}{\vert{}b\vert{}^{2}}b.$ Este es el único punto crítico de $f\vert{}H,$ luego es el punto en que $\vert{}x-a\vert{}^{2}$ (y por tanto $\vert{}x-a\vert{}$) alcanza su menor valor con $x\in H$.

3. ☐ Determine los puntos críticos de la función $f:\mathbb{R}^{2n}\rightarrow\mathbb{R}$, dada por $f(x,y)=\langle x,y\rangle$ restringida a la esfera unitaria $|x|^{2}+|y|^{2}=1$, y concluya de ahí la desigualdad de Schwarz.
>[!demostracion]- Solución
>Consideradas las funciones $f,\varphi:\mathbb{R}^{2n}\rightarrow\mathbb{R}$, $f(x,y)=\langle x,y\rangle$ y $\varphi(x,y)=\vert{}(x,y)\vert{}^{2}=\vert{}x\vert{}^{2}+\vert{}y\vert{}^{2}$, tenemos $M=\varphi^{-1}(1)$, $\text{grad } f(x,y)=(y,x)$ y $\text{grad } \varphi(x,y)=2(x,y)$. Por tanto $(x,y)\in M$ es punto crítico de $f\vert{}M$ si, y solo si, $(y,x)=2\lambda(x,y)$, luego $y=2\lambda x$, $x=2\lambda y$, lo que nos da $\lambda=\pm\frac{1}{2}$ y $y=\pm x$. Así, los puntos críticos de $f\vert{}M$ son los de la forma $(x,\pm x)$ con $\vert{}x\vert{}^{2}=\frac{1}{2}$. Los puntos $(x,x)$ son de máximo y los $(x,-x)$ de mínimo, luego $-\frac{1}{2}\le\langle x,y\rangle\le\frac{1}{2}$ para todo $(x,y)\in M$. Para todo par de vectores no nulos $x,y\in\mathbb{R}^{n}$, se tiene $(\frac{\sqrt{2}}{2\vert{}x\vert{}}x,\frac{\sqrt{2}}{2\vert{}y\vert{}}y)\in M,$ por tanto $\vert{}\langle\frac{\sqrt{2}}{2\vert{}x\vert{}}x,\frac{\sqrt{2}}{2\vert{}y\vert{}}y\rangle\vert{}\le\frac{1}{2};$ y $\vert{}\langle x,y\rangle\vert{}\le\vert{}x\vert{}\vert{}y\vert{}$, valiendo la igualdad apenas cuando $\frac{\sqrt{2}}{2\vert{}x\vert{}}x=\pm\frac{\sqrt{2}}{2\vert{}y\vert{}}y,$ esto es, cuando $x$ e $y$ son colineales.

4. ☐ Sea $M(n\times n)=\mathbb{R}^{n^{2}}$. Pruebe que el máximo de la función $f:\mathbb{R}^{n^{2}}\rightarrow\mathbb{R}$, dada por $f(x)=\det x$, restringida a la esfera $\sum_{i,j}x_{ij}^{2}=n$ se alcanza en una matriz ortogonal, luego es igual a 1. Notando que, si las filas de $x$ son $v_{1},...,v_{n}$ entonces $x=|v_{1}|...|v_{n}|\cdot w$ donde todas las filas de $w$ tienen longitud 1, concluya de ahí la desigualdad de Hadamard: $|\det x|\le|v_{1}|...|v_{n}|$.
>[!demostracion]- Solución
>Sea $\varphi:\mathbb{R}^{n^{2}}\rightarrow\mathbb{R}$, $\varphi(x)=\sum_{i,j}x_{ij}^{2}$. Como $\text{grad } f(x)=(-1)^{i+j}X_{ij}$ y $\text{grad } \varphi(x)=2[x_{ij}]$, donde $X_{ij}$ es el ij-ésimo menor determinante de $x$, si $M=\varphi^{-1}(n)$, el máximo de $f\vert{}M$ se alcanza en la matriz tal que (*)* $(-1)^{i+j}X_{ij}=2\lambda x_{ij}$*, de donde* $(-1)^{i+j}X_{ij}x_{ij}=2\lambda x_{ij}^{2}$*. Sumando en* $i$ *y* $j$*:* $n\cdot \det x=2\lambda\sum_{i,j}x_{ij}^{2}=2\lambda\cdot n$*, luego* $\det x=2\lambda$*. Fijando* $i$ *y sumando en* $j$*, viene:* $\det x=2\lambda\cdot\sum_{j}x_{ij}^{2}=\det x\cdot\sum_{j}x_{ij}^{2}$*, luego las filas de* $x$ *tienen longitud 1. La igualdad (*) también da $(-1)^{i+j}X_{ij}x_{kj}=2\lambda x_{ij}x_{kj}$. Tomando $k\ne i$ y sumando en $j$, obtenemos $0=\det x\cdot\sum_{j}x_{ij}x_{kj}$, por tanto las filas de $x$ son dos a dos ortogonales. Así, $x$ es una matriz ortogonal, con $\det x=1$. De ahí resulta la desigualdad de Hadamard.

5. ☐ Pruebe que el menor valor de la suma $s=x_{1}+\dots+x_{n}$ de $n$ números positivos cuyo producto $p=x_{1}\cdot x_{2}\cdots x_{n}$ es constante se alcanza cuando esos números son iguales, luego valen $\sqrt[n]{p}$.
>[!demostracion]- Solución
>Supongamos que $s=\sqrt[n]{p}+\dots+\sqrt[n]{p}=n\sqrt[n]{p}$ no sea la menor suma de $n$ números positivos cuyo producto es $p$. Entonces existiría $\overline{s}=x_{1}+\dots+x_{n}<s$ en las mismas condiciones. Ahora bien, por el Ejemplo 9, tendríamos $x_{1}\cdot x_{2}\cdots x_{n}\le(\frac{\overline{s}}{n})^{n}<(\frac{s}{n})^{n}<p$, una contradicción.

# Aplicaciones Diferenciables

## Sección 1. La derivada como transformación linear


1. ☐ Sea $f:\mathbb{R}^{m}\rightarrow\mathbb{R}^{m}$ diferenciable, con $f(0)=0$. Si la transformación linear $f^{\prime}(0)$ no admite el autovalor 1, pruebe que existe un entorno $V$ de 0 en $\mathbb{R}^{m}$ tal que $f(x)\ne x$ para todo $x\in V-\{0\}$.
>[!demostracion]- Solución
>Como el operador $f^{\prime}(0)$ no posee punto fijo en el compacto $S^{n-1}$, existe $\epsilon>0$ tal que $\vert{}u\vert{}=1\Rightarrow\vert{}f^{\prime}(0)\cdot u-u\vert{}\ge\epsilon$. Siendo $f$ diferenciable, con $f(0)=0$ tenemos $f(x)=f^{\prime}(0)\cdot x+\rho(x)\cdot\vert{}x\vert{}=\vert{}x\vert{}(f^{\prime}(0)\cdot\frac{x}{\vert{}x\vert{}}+\rho(x))$ y existe $\delta>0$ tal que $0<\vert{}x\vert{}<\delta\Rightarrow \vert{}\rho(x)\vert{}<\epsilon$. Por tanto, si $0<\vert{}x\vert{}<\delta$ entonces $\vert{}f(x)-x\vert{}\ge\vert{}x\vert{}[\vert{}f^{\prime}(0)\cdot\frac{x}{\vert{}x\vert{}}-\frac{x}{\vert{}x\vert{}}\vert{}-\vert{}\rho(x)\vert{}]>0$ y de ahí $f(x)\ne x$.

2. ☐ Dada la aplicación $f:S^{m}\rightarrow\mathbb{R}^{n}$, defina su extensión radial $F:\mathbb{R}^{m+1}\rightarrow\mathbb{R}^{n}$ poniendo $F(x)=|x|\cdot f(\frac{x}{|x|})$ si $x\ne0$ y $F(0)=0$. Pruebe que $F$ es diferenciable en el punto $0\in\mathbb{R}^{m+1}$ si, y solo si, $f$ es (la restricción a $S^{m}$ de) una transformación linear.
>[!demostracion]- Solución
>Por la definición de $F$, se tiene $F(tx)/t=F(x)$ si $t>0$ y $F(tx)/t=-F(-x)$ si $t<0$. Como $F(0)=0$, suponiendo $F$ diferenciable en el punto 0, existe $\lim_{t\rightarrow0}\frac{F(tx)}{t}$, luego $F(x)=-F(-x)$ y $F(x)=\lim_{t\rightarrow0}\frac{F(tx)}{t}=F^{\prime}(0)\cdot x,$ por tanto $F$ coincide con la transformación linear $F^{\prime}(0):\mathbb{R}^{m+1}\rightarrow\mathbb{R}^{n}.$ La recíproca es obvia.

3. ☐ Sean $U\subset\mathbb{R}^{m}$ abierto, $a\in U$ y $f:U\rightarrow\mathbb{R}^{n}$ una aplicación de clase $C^{2}$. La derivada segunda de $f$ es, por definición, la aplicación bilinear $f^{\prime\prime}(x):\mathbb{R}^{m}\times\mathbb{R}^{m}\rightarrow\mathbb{R}^{n}$, dada por $f^{\prime\prime}(a)\cdot u\cdot v=\frac{\partial}{\partial v}(\frac{\partial f}{\partial u})(a)$. Pruebe que $f^{\prime\prime}(a)\cdot u\cdot v=f^{\prime\prime}(a)\cdot v\cdot u$.
>[!demostracion]- Solución
>Aplicando el Teorema de Schwarz a cada función coordenada de $f$, vemos que $f^{\prime\prime}(a)\cdot e_{i}\cdot e_{j}=\frac{\partial}{\partial x_{j}}(\frac{\partial f}{\partial x_{i}}(a))=\frac{\partial}{\partial x_{i}}(\frac{\partial f}{\partial x_{j}}(a))=f^{\prime\prime}(a)\cdot e_{j}\cdot e_{i}$ y, por bilinearidad, resulta que $f^{\prime\prime}(a)\cdot u\cdot v=f^{\prime\prime}(a)\cdot v\cdot u$ para cualesquiera $u, v$.

4. ☐ Dado $U\subset\mathbb{R}^{m}$ abierto y conexo, sea $f:U\rightarrow\mathbb{R}^{n}-\{0\}$ diferenciable. A fin de que $|f(x)|$ sea constante, pruebe que es necesario y suficiente que, para todo $x\in U$ y todo $v\in\mathbb{R}^{m}$ el vector $f^{\prime}(x)\cdot v$ sea ortogonal a $f(x)$.
>[!demostracion]- Solución
>Esto se reduce al Ejercicio 2.1 del Capítulo 2 si observamos que $f^{\prime}(x)\cdot v$ es el vector velocidad del camino $f\circ\lambda$ donde $\lambda:(-\epsilon,\epsilon)\rightarrow U$ es tal que $\lambda(0)=x$ y $\lambda^{\prime}(0)=v$.

## Sección 2. Ejemplos de derivadas

1. ☐ Sea $A: U\rightarrow\mathcal{L}(\mathbb{R}^{m};\mathbb{R}^{n})$ diferenciable en el abierto $U\subset\mathbb{R}^{p}$. Defina $f:U\times\mathbb{R}^{m}\rightarrow\mathbb{R}^{n}$ poniendo $f(x,v)=A(x)\cdot v.$ Pruebe que $f$ es diferenciable, con $f^{\prime}(x,v)\cdot(h,k)=(A^{\prime}(x)\cdot h)\cdot v+A(x)\cdot k$.
>[!demostracion]- Solución
>Sea $R(h,k)=A(x+h)\cdot(v+k)-A(x)\cdot v-(A^{\prime}(x)\cdot h)\cdot v-A(x)\cdot k = (A(x+h)-A(x)-A^{\prime}(x)\cdot h)\cdot v+(A(x+h)-A(x))\cdot k=r(h)\cdot v+s(h)\cdot k,$ donde $\lim_{h\rightarrow0}\frac{r(h)}{\vert{}h\vert{}}=0$ y $\lim_{h\rightarrow0}s(h)=0.$ Entonces, como $\frac{\vert{}r(h)\vert{}}{\vert{}h\vert{}+\vert{}k\vert{}}\le\frac{\vert{}r(h)\vert{}}{\vert{}h\vert{}}$ y $\frac{\vert{}k\vert{}}{\vert{}h\vert{}+\vert{}k\vert{}}\le1,$ se sigue que $\lim_{h,k\rightarrow0}\frac{R(h,k)}{\vert{}h\vert{}+\vert{}k\vert{}}=0.$

2. ☐ Sea $f:U\rightarrow\mathbb{R}^{2}$ definida en el abierto $U\subset\mathbb{R}^{2}$. Suponga que, considerada como función compleja, $f$ sea derivable, con $f^{\prime}(z_{0})\ne0$ para un cierto $z_{0}\in U$. Considere caminos $\alpha,\beta:(-\epsilon,\epsilon)\rightarrow U$ tales que $\alpha(0)=\beta(0)=z_{0}$ y $\alpha^{\prime}(0)\ne0, \beta^{\prime}(0)\ne0$. Pruebe que el ángulo entre $\alpha^{\prime}(0)$ y $\beta^{\prime}(0)$ es igual al ángulo entre $f^{\prime}(z_{0})\cdot\alpha^{\prime}(0)$ y $f^{\prime}(z_{0})\cdot\beta^{\prime}(0)$. En otras palabras: $f$ preserva los ángulos entre curvas.
>[!demostracion]- Solución
>La matriz de la transformación linear $f^{\prime}(z_{0})$, siendo de la forma $[\begin{matrix}a&-b\\ b&a\end{matrix}]$, puede ser escrita como $\rho[\begin{matrix}\cos\theta&-\sin\theta\\ \sin\theta&\cos\theta\end{matrix}]$ con $\rho=\sqrt{a^{2}+b^{2}}$, $\cos\theta=\frac{a}{\sqrt{a^{2}+b^{2}}}$ y $\sin\theta=\frac{b}{\sqrt{a^{2}+b^{2}}}$. Luego $f^{\prime}(z_{0})$ es una rotación de ángulo $\theta$ seguida de una homotecia de razón $\rho$, por tanto preserva ángulos.

3. ☐ Sea $f:\mathbb{R}^{2}\rightarrow\mathbb{R}^{3}$ definida por $f(x,y)=(x^{2},y^{2},(x+y)^{2})$. Muestre que $f^{\prime}(x,y):\mathbb{R}^{2}\rightarrow\mathbb{R}^{3}$ tiene rango $2\Leftrightarrow(x,y)\ne(0,0)$.
>[!demostracion]- Solución
>Las columnas de la matriz jacobiana de $f$ son $(2x,0,2(x+y))$ y $(0,2y,2(x+y))$ que son L.I. salvo cuando $x=y=0$.

4. ☐ Sea $f:\mathbb{R}^{3}\rightarrow\mathbb{R}^{4}$, $f(x,y,z)=(x^{2}-y^{2},xy,xz,zy)$. Muestre que $f^{\prime}(x,y,z)$ es una transformación linear inyectiva, salvo cuando $x=y=0$. Determine la imagen de $f^{\prime}(0,0,z):\mathbb{R}^{3}\rightarrow\mathbb{R}^{4}$.
>[!demostracion]- Solución
>Las filas de la matriz jacobiana de $f$ son $(2x, -2y, 0)$, $(y, x, 0)$, $(z, 0, x)$ y $(0, z, y)$. Si $x^{2}+y^{2}\ne0$ las 3 primeras son L.I. en caso $x\ne0$ y la $1^{a}$, la $2^{a}$ y la $4^{a}$ son L.I. cuando $y\ne0$. La imagen de $f^{\prime}(0,0,z)$ es el plano formado por los puntos $(0, 0, s, t)$ en $\mathbb{R}^{4}$.

5. ☐ Muestre que el rango de la derivada de la aplicación $f:\mathbb{R}^{3}\rightarrow\mathbb{R}^{3}$, dada por 
$$
f(x,y,z)=(x+y+z,x^{2}+y^{2}+z^{2},x^{3}+y^{3}+z^{3}),
$$
tiene rango $p$ en los puntos de $\mathbb{R}^{3}$ que tienen $p$ coordenadas diferentes.
>[!demostracion]- Solución
>Basta notar que las filas de la matriz jacobiana de $f$ son $(1, 1, 1)$, $(2x, 2y, 2z)$ y $(3x^{2},3y^{2},3z^{2})$, luego el jacobiano de $f$ es igual a $6(z-x)(z-y)(y-x)$.

## Sección 3. Cálculo diferencial de aplicaciones

1. ☐ Sea $f:U\rightarrow\mathbb{R}^{n}$ diferenciable en el abierto $U\subset\mathbb{R}^{m}$. Si $|f(x)-f(y)|\le M\cdot|x-y|$ para cualesquiera $x,y\in U$ (donde $M>0$ es una constante) entonces $|f^{\prime}(x)|\le M$ para todo $x\in U$.
>[!demostracion]- Solución
>Supongamos, por absurdo, que $\vert{}f^{\prime}(x)\vert{}>M$ o sea, $\vert{}f^{\prime}(x)\vert{}=M+\epsilon$, $\epsilon>0$, para algún $x\in U$. Como $\vert{}f^{\prime}(x)\vert{}$ es el máximo de $\vert{}f^{\prime}(x)\cdot u\vert{}$ para $\vert{}u\vert{}=1$ y $S^{m-1}$ es compacta, existiría $u\in\mathbb{R}^{m}$ con norma 1, tal que $\vert{}f^{\prime}(x)\cdot u\vert{}=M+\epsilon$. Por la definición de diferenciabilidad, a este $\epsilon$ corresponde $\delta>0$ tal que $0<t<\delta\Rightarrow \vert{}f(x+tu)-f(x)\vert{}=\vert{}f^{\prime}(x)\cdot tu+r(tu)\vert{}\ge t\vert{}f^{\prime}(x)\cdot u\vert{}-\vert{}r(tu)\vert{},$ con $\vert{}r(tu)\vert{}<t\epsilon.$ Entonces $0<t<\delta\Rightarrow\vert{}f(x+tu)-f(x)\vert{}>t(M+\epsilon)-t\epsilon=t\cdot M.$ Poniendo $v=tu$, tenemos $\vert{}v\vert{}=t,$ luego $\vert{}f(x+v)-f(x)\vert{}>M\cdot\vert{}v\vert{}$, una contradicción.

2. ☐ Sea $U\subset\mathbb{R}^{m}$ abierto. Dadas $f:U\rightarrow\mathbb{R}^{n}$, $g:U\rightarrow\mathbb{R}^{p}$ y $T:U\rightarrow\mathcal{L}(\mathbb{R}^{n};\mathbb{R}^{p})$, defina $\varphi:U\rightarrow\mathbb{R}$ poniendo $\varphi(x)=\langle T(x)\cdot f(x),g(x)\rangle$. Para $x\in U$ e $h\in\mathbb{R}^{m}$ cualesquiera, determine $\varphi^{\prime}(x)\cdot h$.
>[!demostracion]- Solución
>Se tiene $\varphi^{\prime}(x)\cdot h = \langle(T^{\prime}(x)\cdot h)\cdot f(x), g(x)\rangle + \langle T(x)\cdot f(x), g^{\prime}(x)\cdot h\rangle + \langle T(x)\cdot (f^{\prime}(x)\cdot h), g(x)\rangle$.

3. ☐ Sean $U\subset\mathbb{R}^{m}$, $V\subset\mathbb{R}^{n}$ abiertos y $f:U\rightarrow V$, $g:V\rightarrow\mathbb{R}^{p}$ aplicaciones dos veces diferenciables. Para $x\in U$ y $y=f(x)\in V$, interprete y pruebe la igualdad $(g\circ f)^{\prime\prime}(x)=g^{\prime\prime}(y)\cdot f^{\prime}(x)\cdot f^{\prime}(x)+g^{\prime}(y)\cdot f^{\prime\prime}(x).$
>[!demostracion]- Solución
>Teniendo en cuenta que $(g\circ f)^{\prime}=(g^{\prime}\circ f)\cdot f^{\prime}$, vale: $(g\circ f)^{\prime\prime}=[(g^{\prime}\circ f)\cdot f^{\prime}]^{\prime}=(g^{\prime}\circ f)^{\prime}\cdot f^{\prime}+(g^{\prime}\circ f)\cdot f^{\prime\prime}=(g^{\prime\prime}\circ f)\cdot f^{\prime}\cdot f^{\prime}+(g^{\prime}\circ f)\cdot f^{\prime\prime}$. Esto significa que, para $x\in U$, $y=f(x)\in V$ y $u,v\in\mathbb{R}^{m}$, se tiene: $(g\circ f)^{\prime\prime}(x)\cdot u\cdot v=g^{\prime\prime}(y)\cdot(f^{\prime}(x)\cdot u)\cdot(f^{\prime}(x)\cdot v)+g^{\prime}(y)\cdot f^{\prime\prime}(x)\cdot u\cdot v\in\mathbb{R}^{p}.$

4. ☐ Sea $U$ una bola abierta de centro 0 en $\mathbb{R}^{m}$. Dada $A:U\rightarrow\mathcal{L}(\mathbb{R}^{m};\mathbb{R}^{n})$ diferenciable, tome $x\in U$ y defina el camino $\varphi:(0,1)\rightarrow\mathcal{L}(\mathbb{R}^{m};\mathbb{R}^{n})$ poniendo $\varphi(t)=A(tx)$. Una de las interpretaciones siguientes para la fórmula $\varphi^{\prime}(t)=A^{\prime}(tx)\cdot x$ es verdadera: $\varphi^{\prime}(t)\cdot v=(A^{\prime}(tx)\cdot x)\cdot v$ o $\varphi^{\prime}(t)\cdot v=(A^{\prime}(tx)\cdot v)\cdot x$. Decida y pruebe.
>[!demostracion]- Solución
>La interpretación correcta es $\varphi^{\prime}(t)\cdot v=[A^{\prime}(tx)\cdot x]\cdot v, v\in\mathbb{R}^{m}$. Para dirimir la confusión, suponga que $U\subset\mathbb{R}^{p}$ y no $U\subset\mathbb{R}^{m}$. Entonces $A^{\prime}(tx)\in\mathcal{L}(\mathbb{R}^{p};\mathbb{R}^{n})$, luego $A^{\prime}(tx)\cdot v$ no tiene sentido.

5. ☐ Sea $f:U\rightarrow\mathbb{R}^{n}$ continua en el abierto $U\subset\mathbb{R}^{m}$ con $[a,a+v]\subset U.$ Si $f$ es diferenciable en todos los puntos de $(a,a+v)$ entonces, para toda $T\in\mathcal{L}(\mathbb{R}^{m};\mathbb{R}^{n})$, pruebe que $|f(a+v)-f(a)-T\cdot v|\le \sup_{0<t<1}|f^{\prime}(a+tv)-T|\cdot|v|.$
>[!demostracion]- Solución
>Aplique la Desigualdad del Valor Medio a $g:U\rightarrow\mathbb{R}^{n}$, definida por $g(x)=f(x)-T\cdot x$.

6. ☐ Dada $f:U\rightarrow\mathbb{R}$, diferenciable en el abierto $U\subset\mathbb{R}^{n}$, fije $a\in\mathbb{R}^{m}$ y defina $\varphi:U\rightarrow\mathbb{R}^{m}$ poniendo $\varphi(x)=f(x)\cdot a$. Para cada $x\in U$, determine $\varphi^{\prime}(x):\mathbb{R}^{n}\rightarrow\mathbb{R}^{m}$.
>[!demostracion]- Solución
>Se tiene $\varphi^{\prime}(x)\cdot v=(f^{\prime}(x)\cdot v)\cdot a=\langle \text{grad } f(x),v\rangle\cdot a$.

# Aplicaciones Inversas e Implícitas

## Sección 1. El Teorema de la Aplicación Inversa

1. ☐ Sean $\varphi:U\rightarrow\mathbb{R}^{m}$ de clase $C^{1}$ en el abierto $U\subset\mathbb{R}^{m}$ y $c\in[0,1)$ tales que $|\varphi(x)-\varphi(y)|\le c|x-y|$ para cualesquiera $x,y\in U$. Pruebe que $f:U\rightarrow\mathbb{R}^{m},$ dada por $f(x)=x+\varphi(x)$ es un difeomorfismo de $U$ sobre el abierto $V=f(U)\subset\mathbb{R}^{m}$. Si $U=\mathbb{R}^{m}$, pruebe que $f(U)=\mathbb{R}^{m}$.
>[!demostracion]- Solución
>Por el Ejercicio 3.1 del Capítulo 5, tenemos $\vert{}\varphi^{\prime}(x)\cdot v\vert{}<c\vert{}v\vert{}<\vert{}v\vert{}$ para todo $x\in U$ y todo $v\in\mathbb{R}^{m}-\{0\}$, luego $\vert{}f^{\prime}(x)\cdot v\vert{}=\vert{}v+\varphi^{\prime}(x)\cdot v\vert{}\ge\vert{}v\vert{}-\vert{}\varphi^{\prime}(x)\cdot v\vert{}>0$ si $v\ne0$. Así, $f^{\prime}(x):\mathbb{R}^{m}\rightarrow\mathbb{R}^{m}$ es un isomorfismo, para todo $x\in U$. Por el Teorema de la Aplicación Inversa, $f$ es un difeomorfismo local, por tanto transforma cada abierto $A\subset U$ en un abierto $f(A)\subset\mathbb{R}^{m}$. Además, $y\in U\Rightarrow\vert{}f(x)-f(y)\vert{}=\vert{}x-y+\varphi(x)-\varphi(y)\vert{}\ge\vert{}x-y\vert{}-c\vert{}x-y\vert{}=(1-c)\vert{}x-y\vert{}$ por tanto $f$ es inyectiva, luego es un difeomorfismo de $U$ sobre el abierto $f(U)$. Supongamos ahora $U=\mathbb{R}^{m}$. Para probar que $f(\mathbb{R}^{m})$ es cerrado, sea $(x_{k})$ una secuencia tal que $\lim f(x_{k})=y\in\mathbb{R}^{m}$. Como $\vert{}x_{k}-x_{r}\vert{}\le\frac{1}{1-c}\vert{}f(x_{k})-f(x_{r})\vert{}$, vemos que $(x_{k})$ es de Cauchy por tanto converge: $\lim x_{k}=x$. Entonces $f(x)=\lim f(x_{k})=y\in f(\mathbb{R}^{m})$. Así, $f(\mathbb{R}^{m})$ es abierto y cerrado. Como $\mathbb{R}^{m}$ es conexo, se tiene $f(\mathbb{R}^{m})=\mathbb{R}^{m}$.

2. ☐ Para todo $k\in\mathbb{N}$, pruebe que existen abiertos $U,V\subset M(n\times n)=\mathbb{R}^{n^{2}}$ tales que toda matriz $y\in V$ posee una única raíz k-ésima $x\in U$, esto es, tal que $x^{k}=y$.
>[!demostracion]- Solución
>La aplicación $f:\mathbb{R}^{n^{2}}\rightarrow\mathbb{R}^{n^{2}}$, definida por $f(x)=x^{k}$, es de clase $C^{\infty}$, con $f^{\prime}(x)\cdot v=\sum_{i=1}^{k}x^{i-1}\cdot v\cdot x^{k-i}.$ En el punto $x=I_{n}$ (matriz identidad $n\times n$), tenemos $f^{\prime}(I_{n})\cdot v=kv$, luego $f^{\prime}(I_{n})$ es un isomorfismo. Por el Teorema de la Aplicación Inversa, existen abiertos $U, V$, ambos conteniendo a $I_{n}$, tales que $f$ es un difeomorfismo de $U$ sobre $V$. Ellos responden a la cuestión.

3. ☐ Sea $U\subset\mathbb{R}^{\frac{n(n+1)}{2}}$ el conjunto de los operadores positivos $A:\mathbb{R}^{n}\rightarrow\mathbb{R}^{n}$ (representados por sus matrices). Use el Teorema Espectral y pruebe que la aplicación $f:U\rightarrow U$ dada por $f(x)=x^{2}$, es un difeomorfismo $C^{\infty}$.
>[!demostracion]- Solución
>En primer lugar, note que el conjunto $U$ de los operadores positivos es abierto en el espacio vectorial $\mathbb{R}^{n(n+1)/2}$ de los operadores autoadjuntos (matrices simétricas). Esto resulta del criterio clásico de positividad: los $n$ menores principales de la matriz son positivos. La biyectividad de $f$ es un corolario del Teorema Espectral, según el cual todo operador positivo posee una única raíz cuadrada positiva. Resta apenas probar que, para todo $X\in U$ la derivada $f^{\prime}(X):\mathbb{R}^{n(n+1)/2}\longrightarrow\mathbb{R}^{n(n+1)/2}$ es un isomorfismo. Ahora bien, tenemos $f^{\prime}(X)\cdot V=X\cdot V+V\cdot X.$ Sea $\{u_{1},...,u_{n}\}$ una base de $\mathbb{R}^{n}$ formada por autovectores de $X$, con $X\cdot u_{i}=\lambda_{i}u_{i}$. Entonces $f^{\prime}(X)\cdot V=0\Rightarrow XVu_{i}+\lambda_{i}Vu_{i}=0\Rightarrow X(Vu_{i})=-\lambda_{i}\cdot(Vu_{i})$. Como $X$ no posee autovalores negativos, se tiene $V\cdot u_{i}=0$ $(i=1,...,n)$, luego $V=0$ y $f^{\prime}(X)$ es inyectiva, luego biyectiva.

4. ☐ Sea $f:U\rightarrow\mathbb{R}^{n}$ de clase $C^{1}$ en el abierto $U\subset\mathbb{R}^{n}$, con $n>1$. Si el determinante jacobiano de $f$ se anula apenas en un conjunto de puntos aislados, pruebe que $f$ transforma todo abierto $A\subset U$ en un abierto $f(A)$. Use este hecho para demostrar que todo polinomio complejo no constante $p:\mathbb{R}^{2}\rightarrow\mathbb{R}^{2}$ es una aplicación sobreyectiva, probando así el Teorema Fundamental del Álgebra.
>[!demostracion]- Solución
>Observación preliminar: si $U\subset\mathbb{R}^{n}$ es abierto, con $n>1$, y $q\in\mathbb{R}^{n}$ es un punto aislado de la frontera de $U$ entonces $U\cup\{q\}$ es abierto. En efecto, sea $B$ una bola abierta de centro $q$, que no contenga otro punto de $\text{fr}.U$ además de $q$. Como $n>1$, el abierto $B-\{q\}$ es conexo y ciertamente contiene puntos de $U$ pues $q\in \text{fr}.U$ pero no contiene puntos fuera de $U$ pues, por el Teorema de la Aduana, tendría que contener puntos de $\text{fr}.U$. Entonces $B-\{q\}\subset U$ de ahí $B\subset U\cup\{q\}$, luego $q\in \text{int}(U\cup\{q\})$ y $U\cup\{q\}$ es abierto.
>Esto sentado, notemos que basta considerar el caso en que $p\in U$ es el único punto donde $\det Jf$ se anula. Entonces $f$ en $U-\{p\}$ es un difeomorfismo local, luego transforma abiertos en abiertos. Es suficiente ahora probar que $f(U)$ es abierto. Esto es claro si existiera $x\ne p$ en $U$ con $f(x)=f(p)$. Supondremos entonces que, poniendo $q=f(p)$, tenemos $q\ne f(x)$ para todo $x\ne p$ en $U$. Sean $B=B(p;r)$ tal que $\overline{B}\subset U$ y $S=S(p;r)$. La frontera del abierto $V=f(B-\{p\})$ es $\{q\}\cup f(S)$, luego $q$ es un punto aislado de $\text{fr}.V$ y, por la observación preliminar, $f(B)=V\cup\{q\}$ es abierto, luego $q=f(p)\in \text{int } f(U)$, de donde se concluye que $f(U)$ es abierto. Cuanto al Teorema Fundamental del Álgebra, si $p:\mathbb{R}^{2}\rightarrow\mathbb{R}^{2}$ es un polinomio complejo no constante, su determinante jacobiano en cada punto $z\in\mathbb{R}^{2}$ es igual a $\vert{}p^{\prime}(z)\vert{}$, luego se anula apenas en un número finito de puntos, que son las raíces de $p^{\prime}(z)$. Por tanto $p(\mathbb{R}^{2})$ es un conjunto abierto. Por otro lado, como $\lim_{z\rightarrow\infty}p(z)=\infty$, $p(\mathbb{R}^{2})$ también es cerrado. Siendo $\mathbb{R}^{2}$ conexo, se sigue que $p(\mathbb{R}^{2})=\mathbb{R}^{2}$, luego existe $z\in\mathbb{R}^{2}$ tal que $p(z)=0$.

5. ☐ La secuencia de pasos de este ejercicio lleva a la conclusión de que, dados cualesquiera dos puntos $a,b$ en el abierto conexo $U\subset\mathbb{R}^{n}$ existe un difeomorfismo $h:U\rightarrow U$, de clase $C^{\infty}$ tal que $h(a)=b$. Los pasos son:

- 5a. La función $\alpha:\mathbb{R}^{n}\rightarrow\mathbb{R}$, dada por $\alpha(x)=\exp(-\frac{1}{1-|x|^{2}})$ si $|x|<1$ y $\alpha(x)=0$ si $|x|\ge1$ es de clase $C^{\infty}$ y, poniendo $\varphi(x)=e\cdot\alpha(x)$ se tiene $\rho:\mathbb{R}^{n}\rightarrow\mathbb{R}$ de clase $C^{\infty}$, con $0<\varphi(x)\le1$ si $|x|<1$, $\varphi(0)=1$ y $\varphi(x)=0$ si $|x|\ge1$.
- 5b. Sea $c>0$ tal que $c \sup_{y\in\mathbb{R}^{n}} \varphi'(y) |b-a|<1.$ La aplicación $g:\mathbb{R}^{n}\rightarrow\mathbb{R}^{n}$, definida por $g(x)=x+\varphi(c(x-a))\cdot(b-a)$ es un difeomorfismo $C^{\infty}$ tal que $g(a)=b$ y $g(x)=x$ si $|x-a|\ge1/c$.
- 5c. Usando el Ejemplo 1, se ve que, para cualesquiera puntos $a,b$ en una bola abierta $B\subset\mathbb{R}^{n}$, existe un difeomorfismo $k:B\rightarrow B$ de clase $C^{\infty}$ tal que $k(a)=b$ y $k(x)=x$ fuera de un compacto $K\subset B$.
- 5d. Dados $U\subset\mathbb{R}^{n}$ abierto, conexo, y $a,b\in U$, el conjunto $A$ de los puntos $x\in U$ tales que existe un difeomorfismo $h:U\rightarrow U$, de clase $C^{\infty}$ con $h(a)=x,$ es abierto y su complementario $U-A$ también. Luego $A=U$ y por tanto $b\in A$.
- 5e. El difeomorfismo $h:U\rightarrow U$, obtenido arriba, es tal que existe $K\subset U$ compacto, con $h(x)=x$ si $x\in U-K$.
>[!demostracion]- Solución
>Los pasos para la conclusión del ejercicio son bastante claros. Para probar que la función $\alpha$ es $C^{\infty}$, use el Ejercicio 10, de la Sección 4, Cap. 8 del Volumen 1 (pág. 100). Para probar que $g$ es un difeomorfismo, use el Ejercicio 1, Capítulo 6 de este volumen.

## Sección 2. Varias funciones implícitas

1. ☐ Pruebe que toda sumersión $f:U\rightarrow\mathbb{R}^{n}$ de clase $C^{1}$ es una aplicación abierta, esto es, $A\subset U$ abierto $\Rightarrow f(A)\subset\mathbb{R}^{n}$ abierto.
>[!demostracion]- Solución
>Esto resulta inmediatamente del Teorema 5 (Forma Local de las Sumersiones) pues cada punto $p\in A$ pertenece a un abierto $Z\subset A$ tal que $f(Z)=W$ es un abierto en $\mathbb{R}^{n}$ (con la notación del enunciado de aquel teorema).

2. ☐ Sea $f=(f_{1},...,f_{n}):U\rightarrow\mathbb{R}^{n}$ diferenciable. Pruebe que $f$ es una sumersión si, y solo si, en cada punto $x\in U$ los vectores $\text{grad } f_{1}(x),..., \text{grad } f_{n}(x)$ son linealmente independientes.
>[!demostracion]- Solución
>Basta observar que $\text{grad } f_{1}(x),..., \text{grad } f_{n}(x)$ son las filas de la matriz jacobiana de $f$ en el punto $x$, la cual tiene rango $n$ si, y solo si, esos vectores son L.I.

3. ☐ Sea $U\subset\mathbb{R}^{n^{2}}$ un conjunto abierto de matrices $n\times n$. Pruebe que la función $\det:U\rightarrow\mathbb{R}$ es una sumersión si, y solo si, ninguna matriz en $U$ tiene rango $\le n-2$.
>[!demostracion]- Solución
>Recordar que, para cada matriz $x\in U$ las $n^{2}$ coordenadas del gradiente, en el punto $x$, de la función $\det:U\rightarrow\mathbb{R}$ son los números $(-1)^{i+j}X_{ij}$, donde $X_{ij}$ es el determinante de la matriz $(n-1)\times(n-1)$ que se obtiene de $x$ omitiendo su i-ésima fila y j-ésima columna. Por tanto $x$ es un punto crítico de la función $\det$ si, y solo si, todas las submatrices $(n-1)\times(n-1)$ de $x$ tienen determinante igual a cero y entonces el rango de $x$ es $\le n-2$.

4. ☐ Sean $U\subset\mathbb{R}^{m}\times\mathbb{R}^{n}$, $V\subset\mathbb{R}^{m}$ abiertos, $f:U\rightarrow\mathbb{R}^{n}$ de clase $C^{k}$ $(k\ge1)$, cumpliendo las condiciones del Teorema 6, $\xi:V\rightarrow\mathbb{R}^{n}$ continua y $c\in\mathbb{R}^{n}$ tales que, para todo $x\in V$, se tiene $(x,\xi(x))\in U$ y $f(x,\xi(x))=c$. Pruebe que $\xi$ es de clase $C^{k}$. Use este resultado para probar que si $\xi:V\rightarrow\mathbb{R}$ es continua en el abierto $V\subset\mathbb{R}^{2}$, y para todo $(x,y)\in V$ vale $(x^{2}+y^{4})\cdot\xi(x,y)+\xi(x,y)^{3}=1$ entonces $\xi\in C^{\infty}$.
>[!demostracion]- Solución
>En un punto arbitrario $a\in V$, sea $b=\xi(a)$, luego $f(a,b)=c.$ Por el Teorema de las Funciones Implícitas, existen abiertos $W, Z$, con $a\in W\subset V\subset\mathbb{R}^{m}$ y $(a,b)\in Z\subset U$, así como una aplicación $\xi_{0}:W\rightarrow\mathbb{R}^{n}$, de clase $C^{k}$, tales que $f^{-1}(c)\cap Z$ es el gráfico de $\xi_{0}$, o sea, si $(x,y)\in Z$ y $f(x,y)=c$ entonces $x\in W$ y $y=\xi_{0}(x)$. En particular, como $(a,b)\in Z$ y $f(a,b)=c$, se sigue que $\xi_{0}(a)=b=\xi(a)$. Como $\xi$ es continua y $(a,\xi(a))\in Z$, podemos suponer $W\ni a$ tan pequeña que $x\in W\Rightarrow(x,\xi(x))\in Z$. Entonces $x\in W\Rightarrow(x,\xi(x))\in Z$ y $f(x,\xi(x))=c\Rightarrow(x,\xi(x))\in f^{-1}(c)\cap Z\Rightarrow(x,\xi(x))$ está en el gráfico de $\xi_{0}\Rightarrow\xi(x)=\xi_{0}(x)$, luego $\xi\in C^{k}$. Cuanto a la parte final del ejercicio, basta observar que, definiendo $f:\mathbb{R}^{3}\rightarrow\mathbb{R}$ por $f(x,y,z)=(x^{2}+y^{4})z+z^{3}$ se tiene $\frac{\partial f}{\partial z}=x^{2}+y^{4}+3z^{2}$, luego $\frac{\partial f}{\partial z}(x,y,z)\ne0$ siempre que $f(x,y,z)=1$.
