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

     <div className="group">
            <label className="small"> {this.props.label} </label>
            <div className="inputMaterial">{this.props.children}</div>
     </div>   
    );
  }
}
