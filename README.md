# **FOOD** | Proyecto Individual

<img src="https://www.conmishijos.com/assets/posts/6000/6107-dibujos-cocinero.jpg" alt="food" width="220vw" />

## **📌 OBJETIVOS**

Crear una aplicacion web en donde se puedan encontrar diferentes tipos de recetas de cocina🍲, utilizando una API externa (https://spoonacular.com/food-api). Y a partir de ella, hacer entre otras cosas:

✅ Buscar recetas.

✅ Filtrarlas por tipos de dietas / ordenarlas por puntaje y por orden alfabetico, de manera ascendente⤴️ y descendente⤵️.

✅ Crear nuevas recetas propias.

## **Tecnologias utilizadas💻**

<div align="center">
  <table border>
    <thead>
      <tr>
        <th>Technologies</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=css,js,react,redux,nodejs,express,postgres" />
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

# **Requisitos para ejecutarla locamente ⚙️**

**1.** Instalar PostgreSQL.

**2.** Crear una base de datos con el nombre **`food`**

3. En la carpeta **`api`** deberás crear un archivo llamado: **`.env`** que tenga la siguiente forma:

   ```env
       DB_USER=usuariodepostgres
       DB_PASSWORD=passwordDePostgres
       DB_HOST=localhost
       API_KEY=yourApiKey
   ```
   
4. Reemplazar **`usuariodepostgres`** y **`passwordDePostgres`** con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

# **Instalacion ⚙️**

Utilice el administrador de paquetes npm para instalar. (recuerde utilizar este comando dentro de /client y dentro de /api).

```
npm install
```

# **Ejecutar local ⚙️**

**Front-end** dentro de ./client

```
npm start
```

**Back-end** dentro de ./api

```
npm start
```

# **Espero que lo disfruten!** 😄
