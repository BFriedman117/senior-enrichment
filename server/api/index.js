'use strict'
const apiRouter = require('express').Router();
const db = require('../db');
const Students = require('../db/models/students');
const Campus = require('../db/models/campus');
const Sequelize = require('sequelize')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

//Students

apiRouter.get('/students', (req,res, next) => {
  Students.findAll()
  .then((students) => res.send(students))
  .catch(next)
})

apiRouter.get('/students/:id', (req,res, next) => {
  Students.findById(req.params.id)
  .then((student) => res.send(student))
  .catch(next)
})

apiRouter.post('/students', (req, res, next) => {

    Students.create(req.body)
    .then((student) => {
      res.send(student)
    })
    .catch(next)
})

apiRouter.put('/students', (req, res, next) => {
  console.log('put route running: ', req.body)
    Students.findById(req.body.id)
    .then((student) => {
      return student.update(req.body)
    })
    .then((student) => {
      res.send(student)
    })
    .catch(next)
})

apiRouter.delete('/students/:id', (req, res, next) => {

  Students.findById(req.params.id)
  .then((student) => {
    return student.destroy()
  })
  .then((student) => {
    res.send(student)
  })
  .catch(next)
})

//Campus


apiRouter.get('/campuses', (req,res, next) => {
  Campus.findAll()
  .then((students) => res.send(students))
  .catch(next)
})

apiRouter.get('/campuses/:id', (req,res, next) => {
  Campus.findById(req.params.id)
  .then((student) => res.send(student))
  .catch(next)
})

apiRouter.post('/campuses', (req, res, next) => {

  Campus.create(req.body)
  .then((campus) => {
    res.send(campus)
  })
  .catch(next)
})

apiRouter.put('/campus', (req, res, next) => {

    Campus.findById(req.body.id)
    .then((campus) => {
      return campus.update(req.body)
    })
    .then((campus) => {
      res.send(campus)
    })
    .catch(next)
})

apiRouter.delete('/campus/:id', (req, res, next) => {

  Students.findById(req.params.id)
  .then((campus) => {
    return campus.destroy()
  })
  .then((campus) => {
    res.send(campus)
  })
  .catch(next)
})


module.exports = apiRouter;
