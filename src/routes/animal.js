'use strict';
const express = require('express');
const Animal = require('../models/animal');
const animal = new Animal();
// eslint-disable-next-line new-cap
const router = express.Router();


router.get('/',getAllAnimals)

router.get('/:id',getOneAnimal)

router.post('/',addAnimal)

router.put('/:id',updateAnimal)

router.delete('/:id',deleteAnimal)


function getAllAnimals(req,res) {
  const response = animal.read();
  res.status(200).json(response );
}
function getOneAnimal(req,res) {
  let animalID = req.params.id;
  const response = animal.read(animalID);
  res.status(200).json(response );
}
function addAnimal(req,res) {
  let animalData = req.body;
  const response = animal.creat(animalData);
  res.status(201).json(response );
}
function updateAnimal(req,res) {
  let animalID = req.params.id;
  let newData = req.body;
  const response = animal.update(animalID,newData);
  res.json(response );
}
function deleteAnimal(req,res) {
  let animalID = req.params.id;
  const response = animal.delete(animalID);
  res.status(200).json(response );
}

module.exports=router;
