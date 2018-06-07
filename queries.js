const knex = require("./database-connection");

module.exports = {
    list(){
     return knex("coffee").select();
    },
    read(id){
    return knex("coffee").select().where("id", id).first();
    },
    create(resolution){
     return knex("coffee").insert(resolution).returning("*").then(record => record[0]) 
    },
    update(id, coffee){
        return knex("coffee").update(coffee).where("id", id).returning("*").then(record => record[0]);  
    },
    delete(id){
        return knex("coffee").delete().where("id", id);   
    },
};
