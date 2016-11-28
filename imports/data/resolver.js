import {Todos} from '../api/collections/todos';
export const resolvers = {
    Query: {
        async todos(_,{_id, limit}) {
            return Todos.find({}, {limit: limit}).fetch()
        },
        async todo(_,{_id}){
            return Todos.findOne({_id: _id});
        }
    },
    Mutation:{
        async addTodo(_, {text}){
            return Todos.insert({title: text});
        }
    }
}