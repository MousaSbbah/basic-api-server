'use strict';

'use strict';
const uuid = require('uuid').v4;


class Student {


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
    let newStudent = {
      id : uuid(),
      data : data
    }
    this.db.push(newStudent);
    return newStudent
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


module.exports= Student;
