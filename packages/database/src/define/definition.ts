import knex from "knex";

let k = knex({

})

k.schema.createTable("discordUser", t => {
    t.integer("id").primary();
    t.string("authToken");
})

k.schema.createTable("library", t => {
    t.integer("id");
    t.increments("id", {
        primaryKey: true
    });
    t.integer("author");
    t.foreign("author", "discordUser.id");
    t.string("name");
    t.string("description");
});