'use strict';
const uuid = require('uuid').v4;


class Animal {


  constructor() {
    this.db = [];
  }
  /**
   * @param  {String} id
   * @param  {String} {if(id
   * @param  {Object} {returnthis.db.find((val
   * @param  {Array} =>val.id===id
   */
  read(id){
    if(id){
      return this.db.find((val) => val.id === id);
    }else{
      return this.db;
    }
  }
  /**
   * @param  {object} data
   * @param  {uuid(} {letnewAnimal={id
   */
  creat(data){
    let newAnimal = {
      id : uuid(),
      data : data
    }
    /**
     * @param  {object} newAnimal
     */
    this.db.push(newAnimal);
    return newAnimal
  }
  /**
   * @param  {String} id
   * @param  {Object} data
   */
  update(id , data){
    for (let i = 0; i < this.db.length; i++) {
      if(this.db[i].id === id ){
        this.db[i].data = data;
        return this.db[i];
      }

    }

  }
  /**
   * @param  {String} id
   * @param  {Array} {this.db=this.db.filter(val=>(val.id!==id
   */
  delete(id){
    this.db= this.db.filter(val=>(val.id !== id));
    return this.db ;
  }
}


module.exports= Animal;
