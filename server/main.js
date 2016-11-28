import { Meteor } from 'meteor/meteor'
import { Todos } from '../imports/api/collections/todos'
Meteor.startup(function () {
  if (Todos.find().count() <= 0) {
    for (let i = 0; i < 10; i++) {
      Todos.insert({
        _id: `${i}`, title: `Todo number ${i}`
      })
    }
  }
})
