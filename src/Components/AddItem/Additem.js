import {Component} from 'react';
import './Additem.css';
class AddItem extends Component{
    state = {
        id:"" ,
        name:"",
        age: ""

    }
    handleChangen = (e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })

    }
    handleSubmit = (e)=>{
        e.preventDefault();
        //this.state.id =
        let{items,update,unfilled} = this.props
        //let items = this.props.items//from parent App.js
        this.state.id = items[items.length-1].id + 1;//add id number to new addation
       // let update = this.props.update//recieve state from App.js as props
        //console.log(Math.random())
        let ite = this.state
        update(ite)
        console.log(this.state)
        this.setState({//to clear input after submit 
            id: "",
            name: "",
            age: ""
        })

    }
   render(){
    return(
        <div className='barCont'>  
            Add Item
            <form onSubmit={this.handleSubmit} >
                <input className='inputt' type="text" placeholder='Enter Name....' id="name" onChange={this.handleChangen} value = {this.state.name}></input>
                <input className='inputt' type="number" placeholder='Enter Age....' id="age" onChange={this.handleChangen} value = {this.state.age}></input>
                <input type="submit" value="Add" className='submit'></input>
            </form>
        </div>
    )
   } 
}
export default AddItem;