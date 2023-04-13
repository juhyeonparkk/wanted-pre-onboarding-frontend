import {Component} from "react";
import Title from './todo/Title'
import Contents from './todo/Contents'
import Login from './signin/Login'

export default class App extends Component{
  render(){
    return(
      <Login />
      // <div>
      //   <Title text="Todo List" />
      //   <Contents />
      // </div>
    );
  }
}