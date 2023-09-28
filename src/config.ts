import dotenv from 'dotenv';
dotenv.config();

export default {
    app: {
        env: process.env.APP_ENV,
        port: process.env.APP_PORT || 3000,
    },
    database: {
        type: process.env.DB_TYPE,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD as string,
        database_name: process.env.DB_DATABASE_NAME
    },
    bcrypt: {
        rounds: process.env.BCRYPT_ROUND || 12
    },
    jwt: {
        secret_key: process.env.JWT_SECRET_KEY,
        expires_in: process.env.JWT_EXPIRES_IN,
        cookie_expires_in: process.env.JWT_COOKIE_EXPIRES_IN || 30
    }

}