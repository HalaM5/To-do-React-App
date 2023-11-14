
import { Component } from 'react';
import './App.css';
import ToDOItems from './Components/ToDoItems/Todoitems';
import AddItem from './Components/AddItem/Additem';
class App extends Component{
  state = {
    items: [
      {id:1,name:'Hala',age:38},
      {id:2,name:'Hal',age:28},
      {id:3,name:'Haa',age:30},
      {id:4,name:'ala',age:20},
    ]
  }
  
  
  update = (ite)=>{
    if( ite.age && ite.name){//if input filled it will be added only 
      //beacuse if == true but if name or age empty if == false and willnot add
      let items = this.state.items;
     items.push(ite)
     this.setState(items ) 
     console.log(this.state)

    }
      
  
    
  }
 

  

  deletItem = (id)=>{
    let items = this.state.items;
    let i = items.findIndex(item => item.id == id)
    items.splice(i,1);
    /**
     * let items =this.state.items.filter
     */
    this.setState(items)//or this.setState({items:items}) or this.setState(items)

  }
render() {
  return (
    <div className="App">
        <header className="App-header">
          <h1>To-Do-App<hr></hr></h1>
        </header>  
        <main className="AppContent">
          <ToDOItems  items={this.state.items} deletItem={this.deletItem} />
          <AddItem items= {this.state.items} update={this.update} />
        </main>
   </div>
  );
}
}

export default App;
