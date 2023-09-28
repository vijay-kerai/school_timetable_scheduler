import { DataSource } from "typeorm";
import config from "../config";

const AppDataSource = new DataSource({
    type:'postgres' ,
    host: config.database.host ,
    port: config.database.port as number | undefined,
    username: config.database.user,
    password : config.database.password,
    database: config.database.database_name,
    synchronize: false,
    logging: true,
    entities: ["dist/database/entities/*.entity.js"]
    // migrations:["dist/database/migrations/*.ts"],
    
});

AppDataSource.initialize().then(() => {
    console.log("Database connected successful");
}).catch((err) => {
    console.error('Error while connecting to the Database:- '+err);
});

export default AppDataSource;