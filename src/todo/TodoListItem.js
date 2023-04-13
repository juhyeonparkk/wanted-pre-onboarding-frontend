import { Component } from "react";


export default class TodoListItem extends Component {
  checkItem() {
    const checkComponent = document.querySelector("#todo-item" + this.props.id);
    if(checkComponent.style.cssText){
      checkComponent.style.cssText = 0;
    }else{
      checkComponent.style.cssText = "text-decoration : line-through";
    }
  }
  render(){
    return(
      <li id={"todo-item"+this.props.id}>
        <input type="checkbox" onClick={()=>{this.checkItem()}}/> 
        {this.props.text}
        <input type="button" data-testid="modify-button" value="수정" onClick={()=>{this.props.update(this.props.id)}}/> 
        <input type="button" data-testid="delete-button" value="삭제" onClick={()=>{this.props.delete(this.props.id)}}/> 
      </li>
    )
  }
}