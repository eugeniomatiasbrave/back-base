# API REST FUL

## Arquitectura

- Modelo Vista Controlador MVC

src/
  ├── config/
  │   ├── config.js
  │   └── passport.config.js
  ├── controllers/
  │   ├── views.controller.js
  │   └── sessions.controller.js
  ├── dao/
  │   ├── mongo/
  │   │   ├── models/
  │   │   │   ├── User.model.js
  │   │   │   └── Product.model.js
  │   │   ├── UsersDao.js
  │   │   └── ProductsDao.js
  │   ├── fs/
  │   │   └── UsersDao.js
  │   ├── mysql/
  │   │   └── UsersDao.js
  │   └── factory.js
  ├── dto/
  │   ├── user.dto.js
  │   └── product.dto.js
  ├── middlewares/
  │   ├── auth.middleware.js
  │   └── error.middleware.js
  ├── routes/
  │   ├── views.router.js
  │   ├── sessions.router.js
  │   └── BaseRouter.js
  ├── services/
  │   ├── repositories/
  │   │   ├── UsersRepository.js
  │   │   └── ProductsRepository.js
  │   ├── indexRepositories.js
  │   └── AuthService.js
  ├── utils/
  │   └── utils.js
  └── app.js

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

ORDEN PARA NO MAREARME para cada servicio

1. model schema
2. dao
3. repositories
4. instanciar repostories en indexRepositories
5. logica de controllers
6. router()
7. app.use()
