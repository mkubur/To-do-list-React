import React from 'react';
import ReactDOM from 'react-dom';
import './todoStyle.css';
import TaskList from "./TaskList";

class App extends React.Component {

    state = {value: '' , tasks: ['first comment', 'second comment']};


    handleChange = (event)=> {
        this.setState({value: event.target.value});
    }
    removeItem = (item) =>{
        for (let i = 0 ; i < this.state.tasks.length ; i++){
            if (this.state.tasks[i] === item)
                this.state.tasks.splice(item,1)
        }
        this.setState({task: this.state.tasks})
    }

    handleSubmit = (event) =>{
        if (this.state.value != null) {
            this.state.tasks.push(this.state.value)
            this.setState({task: this.state.tasks})
            this.setState({value : ''})
        }

        console.log(this.state.value)
        console.log(this.state.tasks)
        event.preventDefault();
    };
    render () {
        return (
            <div className="center" >
        <div className="ui segment">
            <h2>add a task here! </h2>
            <form className="ui form" onSubmit={this.handleSubmit} >
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </form>
                </div>
                <TaskList t={this.state.tasks} removeItem={this.removeItem}/>
            </div>

        )
    }
}

ReactDOM.render(<App/> , document.querySelector('#root'));

