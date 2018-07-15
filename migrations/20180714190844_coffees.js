
exports.up = function (knex, Promise) {
    return knex.schema.createTable('coffees', coffees => {
        coffees.increments()
        coffees.string('name')
        coffees.string('roaster')
        coffees.integer('aroma')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('coffees')
};
