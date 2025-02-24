export default class UserDto {
    constructor(user) {
        this.id = user._id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.role = user.role;
    }

    // Método para token
    static forToken(user) {
        return {
            id: user._id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            role: user.role
        };
    }

    // Método para usuarios
    static forUser(user) {
        return {
            id: user._id || user.id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            role: user.role
        };
    }
}