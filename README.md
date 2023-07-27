# **FOOD** | Proyecto Individual

<img src="https://www.conmishijos.com/assets/posts/6000/6107-dibujos-cocinero.jpg" alt="food" width="220vw" />

## **📌 OBJETIVOS**

Crear una aplicacion web en donde se puedan encontrar diferentes tipos de recetas de cocina🍲, utilizando una API externa (https://spoonacular.com/food-api). Y a partir de ella, hacer entre otras cosas:

✅ Buscar recetas.

✅ Filtrarlas por tipos de dietas / ordenarlas por puntaje y por orden alfabetico, de manera ascendente⤴️ y descendente⤵️.

✅ Crear nuevas recetas propias.

## **Tecnologias utilizadas💻**

<p align="center">
   <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png' alt='css' width="80px" height="80px"/>
   <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png' alt='js' width="80px" height="80px"/>
   <img src='https://everyday.codes/wp-content/uploads/2020/01/0-U2DmhXYumRyXH6X1.png' alt='redux' width="80px" height="80px"/>
   <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png' alt='node' width="110px" height="80px"/>
   <img src='https://kinsta.com/wp-content/uploads/2022/04/express-1.png' alt='express' width="150px" height="80px"/>
   <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png' alt='postgres' width="80px" height="80px"/>
</p>

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

```npm install```

# **Ejecutar local ⚙️**

**Front-end** dentro de ./client

```npm start```

**Back-end** dentro de ./api

```npm start```
