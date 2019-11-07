
exports.up = function(knex) {
  return knex.schema.createTable('species', tbl => {
      tbl.increments();

      tbl.string('name',255).notNullable();
  })
  .createTable('animals', tbl=>{
      tbl.inrements();

      tbl.string('name',255).notNullable();
      
    //define our foriegn key
      tbl
      .integer('species_id')
      .unsigned()
      .references('id')
      .inTable('species')
      .onDelete('RESTRICT')//about deleting the record from the primary key table. Could be 'RESTRICT','NO ACTION','SET NULL'
      .onUpdate('CASCADE')//about hanging the value of the primary key.

    // we have bears and a few animals that are bears

  })
  .createTable('animal_zoos', tbl =>{
      tbl.increments();
      tbl.string('zoo_id',255).notNullable();
      tbl.string('animal_id',255).notNullable();
      tbl.string()
  .ceateTable('')

};

exports.down = function(knex) {
  
};
// knex command not found = no knex on global run npm i -g knex