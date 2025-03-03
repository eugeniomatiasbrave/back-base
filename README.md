# API REST FUL

## Arquitectura

- Modelo Vista Controlador MVC

.env.dev
.env.prod
.env.stg
.gitignore
package copy.json
package.json
README.md
logs/
   app.log
src/
    config/
        config.env.js
        passport.config.js
        log4js.config.js
    controllers/
        products.controller.js
        sessions.controller.js
        users.controller.js
    dao/
        factory.js
        fileSystem/
        mongo/
        mySql/
    dto/
        userDto.js
    listeners.js
    middlewares/
        errorHandler.js
        passportCall.js
        policies.js
    router/
        BaseRouter.js
        ProductsRouter.js
    services/
    utils/
        utils.js
        customResponse.js
        customErrors.js
    app.js

## Lista

REPASO:

PASO A PASO, SIN SALTEAR TEMAS Y DELANTARME

1. Primero trabajar con .env (entornos).............ok
2. DAO..............................................ok
3. Models...........................................ok
4. Repositories.....................................ok
5. Config...........................................ok
6. Cookies + token + JWT............................ok
7. PASSPORT.........................................ok
8. Polices..........................................ok
9. ROUTER AVANZADO BaseRouter.......................ok
10. Conectar front cors.............................ok
11. DTO.............................................ok   a mejorar cuando vea seguridad
12. Factory.........................................ok
13. Persistencia multiple...........................ok
14. Manejo de multiples variables de entorno........ok
15. listeners de Process.on().......................ok
16. Optimizacion: Manejo de errores y rtas..........ok
17. Loggeo: logger..................................ok
18. Performance: Pruebas de carga...................
19. Testing.........................................
20. Seguridad.......................................
21. Schema validator??? regex.......................

ORDEN PARA NO MAREARME para cada servicio

1. model schema
2. dao
3. repositories
4. instanciar repostories en indexRepositories
5. logica de controllers
6. router()
7. app.use()
