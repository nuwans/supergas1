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

     <div className="l_a_c">
            <div className="l_a_c_label"> {this.props.label} </div>
            <input className="l_a_c_control"></input>
     </div>   
    );
  }
}
