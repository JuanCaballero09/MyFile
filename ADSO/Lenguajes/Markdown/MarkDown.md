# Introducción a Markdown

Markdown es un lenguaje de marcado ligero que permite formatear texto de manera sencilla. Se utiliza comúnmente para escribir documentos, README en proyectos de software, y en plataformas como GitHub, Reddit, y más. Su sintaxis es fácil de aprender y permite crear contenido bien estructurado sin necesidad de un software de procesamiento de texto complejo.

## Características Principales

- **Simplicidad**: Es fácil de leer y escribir.
- **Conversión a HTML**: Markdown se puede convertir fácilmente a HTML.
- **Portabilidad**: Los archivos en Markdown son simples archivos de texto, por lo que son fáciles de compartir y almacenar.

## Sintaxis Básica

### Encabezados

Se utilizan `#` para crear encabezados. La cantidad de `#` determina el nivel del encabezado.
```
# Encabezado 1
## Encabezado 2
### Encabezado 3
#### Encabezado 4
##### Encabezado 5
###### Encabezado 6
```

### Texto Enfático

- **Cursiva**: Se logra con un asterisco o guion bajo.
  
  ```markdown
  *texto en cursiva* o _texto en cursiva_
  ```

- **Negrita**: Se usa dos asteriscos o guiones bajos.

  ```markdown
  **texto en negrita** o __texto en negrita__
  ```

### Listas

#### Listas no ordenadas

Utiliza asteriscos, signos de más o guiones.

```markdown
- Elemento 1
- Elemento 2
  - Sub-elemento
```

#### Listas ordenadas

Utiliza números seguidos de un punto.

```markdown
1. Primer elemento
2. Segundo elemento
   1. Sub-elemento
```

### Enlaces

Para crear un enlace, utiliza corchetes para el texto y paréntesis para la URL.

```markdown
[Texto del enlace](https://www.ejemplo.com)
```

### Imágenes

Similar a los enlaces, pero se agrega un signo de exclamación al inicio.

```markdown
![Texto alternativo](https://www.ejemplo.com/imagen.jpg)
```

### Citas

Para crear una cita, utiliza el símbolo de mayor que (`>`).

```markdown
> Esta es una cita.
```

### Código

Para resaltar código en línea, utiliza comillas invertidas.

```
`código en línea`
```

Para bloques de código, usa tres comillas invertidas.

```
``` codigo ```
```
bloque de código
```
``` codigo ```
```

### Tablas

Las tablas se crean utilizando barras verticales y guiones.

```markdown
| Columna 1 | Columna 2 |
|-----------|-----------|
| Dato 1    | Dato 2    |
| Dato 3    | Dato 4    |
```

## Ejemplo Completo

```markdown
# Mi Documento Markdown

Este es un ejemplo de cómo se puede usar **Markdown**.

## Características

- Sencillo
- Legible
- Efectivo

## Enlace

Puedes visitar [OpenAI](https://www.openai.com).

## Código

Aquí hay un ejemplo de código en Python:

```python
def hello_world():
    print("¡Hola, mundo!")
```
