const {MongoClient} = require("mongodb")

const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/")

const TodoSchema = require("./TodoSchema")

const defaultTitles = [
  'In blandit ultrices enim lorem ipsum dolor sit',
  'Odio curabitur convallis duis consequat',
  'Integer a nibh in quis justo maecenas rhoncus aliquam ',
  'Hendrerit at vulputate vitae',
  'Turpis adipiscing lorem vitae mattis nibh ligula nec'
]

let todoColection;
mongoClient.connect().then(_ => {
  todoColection = mongoClient.db('yatodo-app').collection('todos')
  todoColection
    .find()
    .toArray()
    .then(arr => {
      if(arr.length < 1){
        todoColection.insertMany(defaultTitles.map(title => {return {...TodoSchema, title: title}}))
      }
    })
  }).catch(err => console.log(err))

module.exports = () => todoColection
