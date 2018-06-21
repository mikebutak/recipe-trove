exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.hasTable('recipe').then((exists) => {
            console.log('does knex have recipe table?', exists);
            if (!exists) {
                return knex.schema.createTable('recipe', (table) => {
                    table.uuid('id');
                    table.string('name');
                    table.string('description');
                })
            }
        }),
        knex.schema.hasTable('ingredient').then((exists) => {
            console.log('does knex have ingredient table?', exists);
            if (!exists) {
                return knex.schema.createTable('ingredient', (table) => {
                    table.uuid('id');
                    table.string('name');
                })
            }
        }),
        knex.schema.hasTable(`recipe-ingredient`).then((exists) => {
            console.log('does knex have recipe-ingredient table?', exists);
            if (!exists) {
                return knex.schema.createTable(`recipe-ingredient`, (table)=> {
                    table.uuid('recipe_id').references('id').inTable('recipe').notNull();
                    table.uuid('ingredient_id').references('id').inTable('ingredient').notNull();
                    table.string('qty');  // <-- chose string instead of int because receipes include qty such as '1/3 cup', '1 teaspoon', etc.
                })
            }
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('recipe-ingredient'),
        knex.schema.dropTable('ingredient'),
        knex.schema.dropTable('recipe')
    ])
};