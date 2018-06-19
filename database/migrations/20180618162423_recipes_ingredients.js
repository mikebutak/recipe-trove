
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.hasTable(`recipe-ingredient`).then((exists) => {
            console.log('does knex have recipe-ingredient table?', exists);
            if (!exists) {
                return knex.schema.createTable(`recipe-ingredient`, (table)=> {
                    table.foreign('recipe_id').references('recipe.id').inTable('recipe');
                    table.foreign('ingredient_id').references('ingredient.id').inTable('ingredient');
                })
            }
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('recipe-ingredient')
    ])
};
