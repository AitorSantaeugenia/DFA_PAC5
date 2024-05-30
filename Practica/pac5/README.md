## PAC nº #5 Desarrollo frontend avanzado - Máster Desarrollo de Aplicaciones y sitios web

### Ejercicio 1: Implementación PWA
<code>Componentes creados</code>
- En el enunciado se dice que cómo mínimo se han de utilizar dos componentes: <ins>*component-list*</ins> y <ins>*component-detail*</ins>. Luego, posteriormente se habla de dos componentes base (*card* y *grid*).
- Así pues, en nuestro caso lo que hemos hecho és omitir el **component-list** y que este sea <ins>*card.component*</ins> (el *home* principal), dónde dependiendo del botón a clicar, mostremos este componente *card* o el otro componente *grid* (llamado <ins>*grid.component*</ins>).

<div align="center">
<img alt="Preview de la PWA" src="./src/assets/images/img1.gif"   />
</div>

<code>Spinner</code>

- El *spinner* lo hemos agregado en cualquier llamada a la *API*. Tanto en la página <ins>*home*</ins>, cómo cuándo carga el componente <ins>*grid*</ins> (al cambiar la vista de *card* a *grid*), así cómo cuándo carga <ins>*la página de detalle*</ins>.
- Tanto en la <ins>página detalle</ins> cómo en el <ins>home</ins> se aprecia si miramos con atención, por ellos, en el código se incluye un **setTimeOut()** de *1s* comentado, si se descomenta se puede observar mejor el *spinner*.
- Hemos usado un *spinner* de **Angular Material**

```ts
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
```

<code>Animación</code>

- Se ha copiado el *CSS* de **animate.css** en <ins>**/src/assets/css/animate.css**</ins>.
- Se ha agregado <ins>**fadeIn**</ins> tanto en el home al cargar los dos componentes (*grid* o *card*) así cómo en el *detail*.

```html
<div class="card text-center animate__animated animate__https" style="width: 50%;">
```

<code>Navegación página detalle</code>
- Accesible desde los dos componentes, *grid* y *card*.

<div align="center">
<img alt="Navegación de card o grid a detail" src="./src/assets/images/img2.gif"   />
</div>

<code>Página detalle</code>

- Realizado bajo el nombre de **detail.component**
- Se muestra <ins>título</ins>, <ins>director</ins> y la <ins>imagen</ins>.
- El botón <ins>*back*</ins> esta implementado (botón de *bootstrap*) a la derecha.
- Se ha creado un <ins>*expansion panel*</ins> de *Angular Material*, para mostrar el resto de propiedades de las películas.

```ts
import { MatExpansionModule } from '@angular/material/expansion';
```

<div align="center">
<img alt="Implementación de la página detalle" src="./src/assets/images/img3.gif"   />
</div>

<code>Configuración del service worker</code>

- En el archivo <ins>*ngsw-config.json*</ins> se ha agregado lo siguiente:

```json
"dataGroups": [
    {
      "name": "movies-api",
      "urls": [
        "http://www.omdbapi.com/**"
      ],
      "cacheConfig": {
        "maxSize": 10,
        "maxAge": "1h",
        "timeout": "1s",
        "strategy": "freshness"
      }
    }
  ]
```

- También se ha agregado la ruta de *bootstrap*:

```json
"urls": ["https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"]
```

- Podemos ver a continuación, si accedemos a los <ins>DevTools</ins> de *Chrome* y hacemos *check* a las opciones *sin conexión* o *actualizar sin volver a cargar*, que sin tener conexión a *Internet*, podremos ver las imágenes igualmente.

<div align="center">
<img alt="Página detalle y el service worker" src="./src/assets/images/img4.gif"   />
</div>

<div align="center">
    <code>BY-NC-SA @</code> <a href="https://github.com/AitorSantaeugenia">Aitor J. Santaeugenia Marí</a>
</div>