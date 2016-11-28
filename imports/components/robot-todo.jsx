import React, {Component, propTypes} from 'react'

export default class RobotTodo extends Component{
    render(){
        return (
            <li>{this.props.todo.title}</li>
        )
    }
}
