import React from "react";
export default class Input extends React.Component {
  constructor() {
    super()
    console.log(this.props);
    this.state={
        value:''
    }
  } 
  handleTextChange(e){
      this.setState({value:e.target.value})
      this.props.handler(this.props.name,e.target.value);
  }
  render() {
    return (
    <input className='f_input' onChange={this.handleTextChange.bind(this)} type="text" value={this.state.value} placeholder={this.props.placeholder}></input>
    );
  }
}
