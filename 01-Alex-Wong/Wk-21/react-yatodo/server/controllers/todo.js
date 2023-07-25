const express = require('express')
const { ObjectId } = require('mongodb')

const db = require('../db')
const asyncHandler = require('../middleware/async-handler')
const TodoSchema = require("../db/TodoSchema")

const router = express.Router()


const todoExists = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const resp = await db().findOne({ _id : new ObjectId(id)})
  
  if (!resp) {
    const err = new Error('Toot not found')
    err.status = 404
    throw err
  }
  
  req.todo = resp
  next()
})

router.post('/', asyncHandler(async (req, res) => {
  const title = req.body.title.trim()
  const details = req.body.details?.trim() || ''
  const resp = await db().insertOne({...TodoSchema, title: title, details: details})
  const created = await db().findOne({ _id: new ObjectId(resp.insertedId) })
  res.status(201).json(created)
}))

router.get('/', asyncHandler(async (req, res) => {
  const orderByQuery = {completed: -1, last_updated_at: -1}
  const resp = await db().find().sort(orderByQuery).toArray()
  res.json(resp)
}))

router.get('/:id', todoExists, asyncHandler(async (req, res) => {
  res.json(req.todo)
}))

router.put('/:id', todoExists, asyncHandler(async (req, res) => {
  const { todo } = req
  const { id } = req.params
  const title = req.body.title?.trim() || todo.title
  const completed = typeof req.body.completed !== 'boolean' ? todo.completed : req.body.completed
  const details = req.body.details?.trim() || todo.details

  const resp = await db().findOneAndUpdate(
    { _id: new ObjectId(id) }, 
    {
      "$set": {
        title: title, 
        details: details, 
        completed: completed,
        last_updated_at: new Date()
      }
    },
    { includeResultMetadata: true }
    )
  if(!resp.ok){ 
    const err = new Error("There was some error updating the document.");
    err.status(500)
    throw err
  }
  const updated = await db().findOne({_id: new ObjectId(id)})
  res.json(updated) 
}))

router.delete('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params
  await db().deleteOne({_id: new ObjectId(id)})
  res.status(204).send()
}))

module.exports = router
