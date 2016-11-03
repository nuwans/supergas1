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
        <div className="l_a_c">
         <div className="l_a_c_label l_a_c_label_full"> {this.props.label} </div>
        <select onChange={this.handleSelectChange.bind(this)} className="l_a_c_select">
           {this.props.options.map(
               function(item,i){
                   return <option key={i} value={item}>{item}</option>
               }
           )}
        </select>
        </div>
    );
  }
}
