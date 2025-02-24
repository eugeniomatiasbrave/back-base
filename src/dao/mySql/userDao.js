
import { UserModel } from "./models/user.model.js";

export default class UserDao {
    async get() {
        return await UserModel.findAll();
    }

    async getOne(params) {
        return await UserModel.findOne({ where: params });
    }

    async create(user) {
        return await UserModel.create(user);
    }

    async update(id, user) {
        return await UserModel.update(user, { where: { id } });
    }

    async delete(id) {
        return await UserModel.destroy({ where: { id } });
    }
}