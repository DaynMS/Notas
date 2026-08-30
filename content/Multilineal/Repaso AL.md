# Representación matricial de una transformación lineal
<span class="teor">Teorema:</span>  Dados $V$ y $W$ espacios vectoriales y una base $\{ v_1, v_2, \dots, v_n\}$ de $V$. Sean  $w_1,w_2,\dots,w_n$ elementos arbitrarios de $W$. Entonces existe una única transformación lineal $$T : V \rightarrow W$$ tal que $T(v_i)=w_i$, para todo $i=1,2,\dots,n$.
Esta transformación es dada por: $$v= \alpha_1v_1+ \alpha_2v_2+\dots +\alpha_nv_n \\ T(v) = \alpha_1w_1+ \alpha_2w_2+\dots +\alpha_nw_n $$

<span class="defn">Definición:</span>  Si $\beta = \{ v_1, v_2, \dots, v_n\}$  y $\gamma = \{w_1,w_2,\dots,w_m \}$ son bases ordenadas de $V$ y $W$ respectivamente, entonces para cada $j$ (con $1 \le j \le n$) existe un único escalar $a_{ij} \in K$  (con $1 \le i \le m$) tal que $$T(v_j) = a_{1j}w_1 +  a_{2j}w_2 + \cdots +  a_{mj}w_m$$

Llamamos a la matriz $A_{m \times n}$ definida por $A_{ij} = a_{ij}$, la **matriz de representación de $T$ en las bases ordenadas $\beta$ y $\gamma$** $$A = [T]_\beta^\gamma$$
![Texto alternativo](material/transflineal.png)

<span class="ejem">Ejemplo:</span> 
![alt text](material/image-2.png)
