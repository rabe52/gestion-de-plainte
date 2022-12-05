import { DataTypes, Sequelize } from "sequelize";
import { UserFactory } from "./userFactory.js";

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("gestion_de_plainte", "root", "", {
  host: "localhost",
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}


const UserModel = sequelize.define(
  "User",new UserFactory,
  {
    // Other model options go here
  }
);
const dbModel=(request, reply, done)=>{
  reply.models={
    User:UserModel
  }
  
  done() 
} 
export { sequelize ,dbModel};