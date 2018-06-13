
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.hasTable('recipe').then((exists) => {
            if (!exists) {
                knex.schema.createTable('recipe', (table) => {
                    table.uuid('id');
                    table.string('name');
                    table.string('description');
                })
            }
        }),
        knex.schema.hasTable('ingredient').then((exists) => {
            if (!exists) {
                knex.schema.createTable('ingredient', (table) => {
                    table.uuid('id');
                    table.string('name');
                })
            }
        }),
        knex.schema.hasTable('recipe-ingredient').then((exists) => {
            if (!exists) {
                knex.schema.createTable('recipe-ingredient', (table)=> {
                    table.foreign('recipe_id').references('recipe.id');
                    table.foreign('ingredient_id').references('ingredient.id');
                    table.string('qty');  // <-- chose string instead of int because receipes include qty such as '1/4', '2', 'one', etc.
                    table.string('unit_of_measure');
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
