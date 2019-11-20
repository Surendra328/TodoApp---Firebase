import React, {Component} from 'react';
import * as cl from 'classnames'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            updatedTitle: ''
        }
        this.handleToggleTodo = this.handleToggleTodo.bind(this);
        this.handleStartEditing=this.handleStartEditing.bind(this);
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleToggleTodo(todo) {
            this.props.toggleTodo(todo.id);
        }

     handleRemoveTodo(id) {
                this.props.removeTodo(id);
            }

    handleStartEditing(e) {
            this.setState({
                editing: true,
                updatedTitle: this.props.task.title
            })
        }

    handleSubmit() {
            this.props.updateTodo(this.props.task.id,this.state.updatedTitle)
            this.setState({
                editing: false
            })
        }

        handleKeyDown(e) {
            if (e.key === 'Escape') {
                this.setState({
                    editing: false
                })
            } else if (e.key === 'Enter') {
                this.handleSubmit()
            }
        }

        handleInput(e) {
            this.setState({
                updatedTitle: e.target.value
            })
        }

 render() {
        let {editing, updatedTitle} = this.state
        return (
            <li className={cl({completed: this.props.task.isCompleted, editing})}>
                <div className="view">
                    <input className="toggle"
                           type="checkbox"
                           onChange={() => this.handleToggleTodo(this.props.task)}
                           checked={this.props.task.isCompleted}
                    />
                    <label onDoubleClick={this.handleStartEditing}>
                        {this.props.task.title}
                    </label>
                    <button className="destroy"
                            onClick={() => this.handleRemoveTodo(this.props.task.id)}
                    />
                </div>
                <input className="edit"
                       value={updatedTitle}
                       onBlur={this.handleSubmit}
                       onKeyDown={this.handleKeyDown}
                       onChange={this.handleInput}
                       type="text"
                />
            </li>


        )
    }
}
export default Todo;