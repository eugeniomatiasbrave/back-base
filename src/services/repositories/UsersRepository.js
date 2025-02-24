export default class UsersRepository {

constructor(dao){
    this.dao = dao;
}

async getUsers(){
	return await this.dao.get();
}

async getUserBy(params){
	return await this.dao.getOne(params);
}

async createUser(user){
	return await this.dao.create(user);
}

async updateUser(id, user){
	return await this.dao.update(id, user);	
}

async deleteUser(id){
	return await this.dao.delete(id);
}

}
