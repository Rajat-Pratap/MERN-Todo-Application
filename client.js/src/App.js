import React from 'react';
import './App.css';
import axios from 'axios'
import ListItems from './ListItems'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:''
      }
    }
    this.handleInput=this.handleInput.bind(this)
    this.addItem=this.addItem.bind(this)
    this.deleteItem=this.deleteItem.bind(this)
    this.setUpdate=this.setUpdate.bind(this)
  }

  addItem(e){
    e.preventDefault()
    const newItem= this.state.currentItem
    
    if(newItem.text!==""){
      axios.post('http://localhost:8000/insert',newItem).then((response)=>{
        this.dataFetch()
      })
      this.setState({
        currentItem:{
          text:''
        }
      })
    }
  }

  deleteItem(key){
    const url = 'http://localhost:8000/delete?id='+key
    axios.get(url).then((response)=>{
      this.dataFetch()
    })
  }

  setUpdate(text,key){
    axios.post('http://localhost:8000/update',{_id:key,text}).then((response)=>{
      this.dataFetch()
    })
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value
      }
    })
  }

   dataFetch(){
    axios.get('http://localhost:8000/getAll').then((response)=>{
      const todoItems=response.data
      this.setState({
        items:todoItems
      })
    })
    
  }

  componentDidMount(){
   this.dataFetch();
  }

  render(){
    return(
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input 
            type="text" 
            placeholder="Enter Text" 
            value={this.state.currentItem.text} 
            onChange={this.handleInput} />
            <button type="submit"> Add </button>
          </form>
        </header>
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />
      </div>
    )
  }
}

export default App