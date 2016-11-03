import React from "react";
export default class Select extends React.Component {
  constructor() {
    super()
    console.log(this.props);
    this.state={
        value:''
    }
  } 
  handleSelectChange(e){
     this.props.handler(this.props.name,e.target.value);

  }
  render() {
    return (
        <select onChange={this.handleSelectChange.bind(this)}className="f_select">
           {this.props.options.map(
               function(item,i){
                   return <option key={i} value={item}>{item}</option>
               }
           )}
        </select>
    );
  }
}
