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

     <div className="l_a_c full_width">
            <div className="l_a_c_label_full"> {this.props.label} </div>
            <input type='date' className="l_a_c_date l_a_c_full"></input>
     </div>   
    );
  }
}
