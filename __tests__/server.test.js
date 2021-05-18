'use strict';
const server = require('../src/server.js');
const superTest = require('supertest');
const Animal = require('../src/models/animal.js');
const request = superTest(server.server);

describe('API Student testing', () => {
    let id;
    let newStudent = {
        name: 'Mousa',
        age: '25'
    }
    it('should create a new student ', async () => {
        const response = await request.post('/student').send(newStudent);

        expect(response.status).toEqual(201);
        expect(response.body.data.name).toEqual('Mousa');
        expect(response.body.data.age).toEqual('25');
        expect(response.body.id).toBeTruthy();

        id = response.body.id;
    });
    it('Should Read all Student',async()=>{
        const response = await request.get('/student');

        expect(response.status).toEqual(200)
        expect(response.body).toEqual([{"data": newStudent, "id": id}])
    });

    let newInfo = {
        name: 'Mosa',
        age : '24' 
    }
    it('should Update the student information' , async()=> {

        const response = await request.put(`/student/${id}`).send(newInfo);

        expect(response.body.data.name).toEqual('Mosa');
        expect(response.body.data.age).toEqual('24');
        expect(response.body.id).toEqual(id);
    });
    it('Should Read one Student Info',async()=>{
        const response = await request.get(`/student/${id}`);
        expect(response.status).toEqual(200)
        expect(response.body.data.name).toEqual('Mosa');
        expect(response.body.data.age).toEqual('24');
        expect(response.body.id).toEqual(id);
        
    });
    it('Should delete  Student Info',async()=>{
        const deleteStudent = await request.delete(`/student/${id}`);
        const tryReadDeletedStudent = await request.get(`/student/${id}`);
        expect(tryReadDeletedStudent.status).toEqual(200)
        expect(tryReadDeletedStudent.body).toBeFalsy();
        
    });
});

describe('API Animal testing', () => {
    let id;
    let newAnimal = {
        name: 'dog',
        legs: '4'
    }
    it('should create a new animals ', async () => {
        const response = await request.post('/animal').send(newAnimal);

        expect(response.status).toEqual(201);
        expect(response.body.data.name).toEqual('dog');
        expect(response.body.data.legs).toEqual('4');
        expect(response.body.id).toBeTruthy();

        id = response.body.id;
    });
    it('Should Read all Animals',async()=>{
        const response = await request.get('/animal');

        expect(response.status).toEqual(200)
        expect(response.body).toEqual([{"data": newAnimal, "id": id}])
    });

    let newInfo = {
        name: 'fish',
        legs : '0' 
    }
    it('should Update the animal information' , async()=> {

        const response = await request.put(`/animal/${id}`).send(newInfo);

        expect(response.body.data.name).toEqual('fish');
        expect(response.body.data.legs).toEqual('0');
        expect(response.body.id).toEqual(id);
    });
    it('Should Read one Animal Info',async()=>{
        const response = await request.get(`/animal/${id}`);
        expect(response.status).toEqual(200)
        expect(response.body.data.name).toEqual('fish');
        expect(response.body.data.legs).toEqual('0');
        expect(response.body.id).toEqual(id);
        
    });
    it('Should delete  Animal Info',async()=>{
        const deleteAnimal = await request.delete(`/animal/${id}`);
        const tryReadDeletedAnimal = await request.get(`/animal/${id}`);
        expect(tryReadDeletedAnimal.status).toEqual(200)
        expect(tryReadDeletedAnimal.body).toBeFalsy();
        
    });
});

describe('404 Error Handler', ()=>{
    it('Should return 404 for bad rout',async ()=>{
    const response = await request.get('/badRout')
    expect(response.status).toEqual(404);
    expect(response.body.message).toEqual('Not Found');
    })
    it('Should return 404 for bad method',async ()=>{
        const response = await request.delete('/student')
        expect(response.status).toEqual(404);
        expect(response.body.message).toEqual('Not Found');
        })
    
});

describe('500 Error Handler', ()=>{
    it('should Update the animal information' , async()=> {

        const response = await request.get(`/wrong`).send('aa');
        expect(response.status).toEqual(500);
        expect(response.body.message).toEqual('wrong');
    })
    
});

describe('Home Rout', ()=>{
    it('should send server info' , async()=> {

        const response = await request.get(`/`);
        expect(response.text).toEqual('Server Is Working');
    })
    
});