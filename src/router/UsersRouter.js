import BaseRouter from "./BaseRouter.js";
import usersController from "../controllers/users.controller.js";


class UsersRouter extends BaseRouter { // creo una clase llamada UsersRouter que extiende de BaseRouter

	init(){
		this.get('/', ['PUBLIC'], usersController.getUsers); // GET /api/users/
        this.get('/:id', ['PUBLIC'], usersController.getUserById); // GET /api/users/:id
        this.post('/', ['PUBLIC'], usersController.createUser); // POST /api/users/
        this.put('/:id', ['ADMIN'], usersController.updateUser); // PUT /api/users/:id
        this.delete('/:id', ['ADMIN'], usersController.deleteUser); // DELETE /api/users/:id
	}
}

const usersRouter = new UsersRouter(); // instancio un objeto de UsersRouter
export default usersRouter.getRouter(); // exporto una instancia de UsersRouter().getRouter() para que sea un objeto instanciado y no una clase.