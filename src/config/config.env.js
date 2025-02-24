import dotenv from 'dotenv';
dotenv.config()

export default {
    app:{
        PORT: process.env.PORT||8080,
        ADMIN_PWD: process.env.ADMIN_PASSWORD,
        PERSISTENCE: process.env.PERSISTENCE || 'FILESYSTEM'
    },
    mongo:{
        URL:process.env.MONGO_URL,
    },
    auth:{
        jwt:{
            SECRET: process.env.JWT_SECRET
        }
    }
}