import React from 'react';
import TodoForm from './components/TodoForm'
import Todo from './components/Todo'
import FooterBar from './components/FooterBar'
import './App.css'
import uuid from "uuid";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.updateFilter=this.updateFilter.bind(this);
        this.removeTodo=this.removeTodo.bind(this);
        this.toggleAll=this.toggleAll.bind(this);
        this.toggleTodo=this.toggleTodo.bind(this);
        this.updateTodo=this.updateTodo.bind(this);
        this.clearCompleted=this.clearCompleted.bind(this);
        this.updateShow=this.updateShow.bind(this);
        this.state = {
                    todos: [],
                    id:uuid(),
                    toggle: false,
                    filter: "all"
                    }

    }


    addTodo (taskName) {
              this.setState ({
              todos : [{ id : uuid(),
                         title: taskName,
                         isCompleted: false} , ...this.state.todos]
    })
}
    removeTodo(id){
        const remainder = this.state.todos.filter(item => item.id !== id);
        this.setState({todos: remainder});

    }

    toggleAll () {
              const newTodos = this.state.todos;
              newTodos.forEach(todo =>
              { if (todo.isCompleted === this.state.toggle) {
                  todo.isCompleted= !this.state.toggle
                    this.setState({todos: newTodos}) }

                this.setState ({toggle : !this.state.toggle})

          })}




    toggleTodo (id) {
        this.setState({
         todos : this.state.todos.map (todo => {
             if (todo.id === id ) {
               return {

                   ...todo,
                   isCompleted: !todo.isCompleted
                    }
             }
             else
             {
             return todo
             } })})}

    updateTodo (id,newTitle) {
            this.setState({
            todos:this.state.todos.map(todo=>{
                if(todo.id===id){
                    return{
                            ...todo,
                            title:newTitle
                        }
                }
                else{
                    return todo
                }
                })
                  })}
 clearCompleted()
                {
                    const remainder = this.state.todos.filter(item => item.isCompleted!==true);
                    this.setState({todos: remainder});
                }
 updateShow(str) {
          this.setState({filter: str});
                        }
 updateFilter() {

                    var temp = []
                        if (this.state.filter === "all") {
                            return this.state.todos
                        }
                        else if (this.state.filter === "active") {
                            this.state.todos.map((todo) => {
                                if (!todo.isCompleted) {
                                    temp.push(todo)

                                }
                            })
                            return temp;
                        }
                        else if (this.state.filter === "completed") {
                            this.state.todos.map((todo) => {
                                if (todo.isCompleted) {
                                    temp.push(todo)
                                }
                            })
                            return temp;
                        }

                    }




    render(){

   let {todos} = this.state
            let completedCount = 0
            this.state.todos.forEach((todo) => {
                if (todo.isCompleted) {
                    completedCount++
                }
            })
            let activeCount = this.state.todos.length - completedCount
            let totalCount = this.state.todos.length


        return(

        <section className="todoform">


            <TodoForm  addTodo={this.addTodo} />

                <section className="main">
                                    {todos.length > 0 &&
                                    <input id="toggle-all"
                                           className="toggle-all"
                                           type="checkbox"
                                           checked={activeCount === 0}
                                           onChange={this.toggleAll}

                                    />}
                                    <label htmlFor="toggle-all"/>


                                      <ul className="todo">
                                          {
                                             this.updateFilter().map((todo) => {
                                                 return (
                                                         <Todo key={todo.id} task={todo}
                                                                  removeTodo={this.removeTodo}
                                                                  toggleTodo={this.toggleTodo}
                                                                  updateTodo={this.updateTodo}
                                                            />
                                                        )
                                                        })
                                                        }
                                            </ul>



                                    </section>
                                   {totalCount > 0 &&
                                         <FooterBar
                                            activeCount={activeCount}
                                            updateShow={this.updateShow}
                                            completedCount={completedCount}
                                            clearCompleted={this.clearCompleted}
                                        />
                                            }
                        </section>
 )}
        }
export default App;
