import React, {Component} from 'react';
import {graphql, combineRequests} from 'react-apollo';
import {connect} from 'react-redux'
import RobotTodo from '../components/robot-todo';
import gql from 'graphql-tag';

function dispatchTodoMutation(text, refetch) {
    return generateMutation(`${text}`).then(() => {
        if (refetch) {
            return refetch();
        }
    });
}

function generateMutation(text) {
    return gql `
        mutation Mutation($text: ${text}){
                addNewToDo(text: $text){
                    title
                }
            }
        }
    `
}
function mapQueryToProp(limit) {
    return gql `query Query{
    todos(limit: ${limit}){
        _id
        title
    }
}`
}

class RobotBox extends Component {
    constructor(props) {
        super();
        this.props = props
        this.state = {
            limit: 10
        }
    }
    _renderRobotTodo() {
        let todos = this.props.data && this.props.data.todos
            ? this.props.data.todos
            : []
        return todos.map((todo) => {
            return <RobotTodo todo={todo} key={todo._id}/>
        })
    }
    render() {
        let refetch = this
            .props
            .data
            .refetch()
        return (
            <div>
                <p><input type="text" className="todo-text"/></p>
                <a
                    href="#"
                    onClick={function () {
                    return dispatchTodoMutation('i love meteor', refetch)
                }}>Add</a>
                {this._renderRobotTodo()}
            </div>
        )
    }
}
function mapMutationToProp() {
    return {addNewTodo: generateMutation}
}
export default graphql(mapQueryToProp(100))(RobotBox)