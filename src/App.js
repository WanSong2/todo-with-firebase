import React from 'react';
import TaskAdd from './TaskAdd'
import TaskDisplay from './TaskDisplay'
import {firestore} from './firebase'

class App extends React.Component {
  state= {
    tasks:[
    ],
    task:''
  }
  onClickHandler = (e) => {
    e.preventDefault();


    firestore.collection('tasks').add({todo:this.state.task})
    .then(r=>{
      const tasks = [...this.state.tasks, {todo:this.state.task,id:r.id}];
      this.setState({
        tasks,
        task:''
      });
    })
  }

  componentDidMount() {
    const tasks = [...this.state.tasks]
    firestore.collection('tasks').get()
    .then(docs=>{
      docs.forEach(doc=>{
        tasks.push({todo:doc.data().todo,id:doc.id})
      })
      this.setState({tasks})
    })
  }

  onChangeHandler = (e) => {
    this.setState({
      task:e.target.value
    });
  }

  deleteHandler = (id) => {
    console.log(id);
    firestore.collection('tasks').doc(id).delete()
    .then(()=>{
      const tasks = this.state.tasks.filter((task) => task.id !== id)
      this.setState({ tasks });
    })
  }

  render() {
    return (
      <div className="container">
        <TaskAdd
          value={this.state.task} 
          changeHandler={this.onChangeHandler}
          clickHandler={this.onClickHandler}
        />
        <div>
          <TaskDisplay
            tasks={this.state.tasks}
            deleteHandler={this.deleteHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
