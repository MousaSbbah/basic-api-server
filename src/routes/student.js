'use strict';
const express = require('express');
const Student = require('../models/student');
const student = new Student();
// eslint-disable-next-line new-cap
const router = express.Router();


router.get('/',getAllStudents)

router.get('/:id',getOneStudent)

router.post('/',addStudent)

router.put('/:id',updateStudent)

router.delete('/:id',deleteStudent)


function getAllStudents(req,res) {
  const response = student.read();
  res.status(200).json(response );
}
function getOneStudent(req,res) {
  let studentID = req.params.id;
  const response = student.read(studentID);
  res.status(200).json(response );
}
function addStudent(req,res) {
  let studentData = req.body;
  const response = student.creat(studentData);
  res.status(201).json(response );
}
function updateStudent(req,res) {
  let studentID = req.params.id;
  let newData = req.body;
  const response = student.update(studentID,newData);
  res.status(200).json(response );
}
function deleteStudent(req,res) {
  let studentID = req.params.id;
  const response = student.delete(studentID);
  res.status(200).json(response );
}

module.exports=router;
