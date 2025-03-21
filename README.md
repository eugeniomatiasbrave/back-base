# API REST FUL

## Arquitectura

- Modelo Vista Controlador MVC

.env.dev
.env.prod
.env.stg
.gitignore
.dockerignore
package copy.json
package.json
README.md
performance/
   products-get.yml
   products-get-report.json
Docker/
   Dockerfile
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

PASO A PASO (Primero trabajar con .env (entornos)) luego sin .env creando debug launch.json

1. Crear servidor, DB, Conectar, crear rutas y
   controllers......................................ok
2. DAOs.............................................ok
3. Models...........................................ok
4. Repositories.....................................ok
5. Config...........................................ok
6. Cookies + token + JWT............................ok
7. PASSPORT.........................................ok
8. Polices..........................................ok
9. Router Avanzado BaseRouter.......................ok
10. Conectar front cors.............................ok
11. DTOs............................................ok   a mejorar cuando vea seguridad
12. Factory.........................................ok
13. Persistencia multiple...........................ok
14. Manejo de multiples variables de entorno........ok
15. listeners de Process.on().......................ok
16. Optimizacion: Manejo de errores y rtas..........ok
17. Loggeo: logger..................................ok
18. Performance: Pruebas de carga...................ok
19. Seguridad.......................................
20. Schema validator, regex.........................
21. Testing.........................................
22. Documentacion Swagger...........................
23. Docker, multiples entornos......................
24. DockerHubs......................................
25. GitHub ramas dev, stg y prod....................
26. Deploy..........................................
