'use strict';
const uuid = require('uuid').v4;

/**
 * @param  {} {this.db=[];}read(id
 * @param  {} {if(id
 * @param  {} {returnthis.db.find((val
 * @param  {} =>val.id===id
 * @param  {} ;}else{returnthis.db;}}creat(data
 * @param  {uuid(} {letnewAnimal={id
 */
class Animal {


  constructor() {
    this.db = [];
  }

  read(id){
    if(id){
      return this.db.find((val) => val.id === id);
    }else{
      return this.db;
    }
  }
  creat(data){
    let newAnimal = {
      id : uuid(),
      data : data
    }
    this.db.push(newAnimal);
    return newAnimal
  }
  update(id , data){
    for (let i = 0; i < this.db.length; i++) {
      if(this.db[i].id === id ){
        this.db[i].data = data;
        return this.db[i];
      }

    }

  }
  delete(id){
    this.db= this.db.filter(val=>(val.id !== id));
    return this.db ;
  }
}


module.exports= Animal;
