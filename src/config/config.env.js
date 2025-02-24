import dotenv from 'dotenv';
dotenv.config()

export default {
    app:{
        PORT: process.env.PORT||8080,
        ADMIN_PWD: process.env.ADMIN_PASSWORD,
        PERSISTENCE: process.env.PERSISTENCE || 'MYSQL'
    },
    mongo:{
        URL:process.env.MONGO_URL,
    },
    mysql:{
        PORT: process.env.MYSQL_PORT,
        HOST: process.env.MYSQL_HOST,
        USER: process.env.MYSQL_USER,
        PASSWORD: process.env.MYSQL_PASSWORD,
        DATABASE: process.env.MYSQL_DATABASE
    },
    auth:{
        jwt:{
            SECRET: process.env.JWT_SECRET
        }
    }
}