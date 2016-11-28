export const typeDefs = [`
    type Todo {
        _id: String,
        title: String
    },
    type AddTodo {
        title: String
    },
    type Query {
        todos(_id: String, limit: Int): [Todo],
        todo(_id: String): Todo
    },
    type Mutation {
        addTodo(text: String): AddTodo
    }
    schema{
        query: Query,
        mutation: Mutation
    }
`]
