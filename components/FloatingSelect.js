import React from "react";
export default class FloatingSelect extends React.Component {
  constructor() {
    super()
    console.log(this.props);
    this.state={
        value:''
    }
  } 
  handleSelectChange(e){
      this.setState({value:e.target.value})
      this.props.handler(this.props.name,e.target.value);
  }
  render() {
    return (
      <div className="group">
         <select 
          onChange={this.handleSelectChange.bind(this)}
          defaultValue={this.props.value}
          required
          className={this.props.error ? "inputMaterial invalid" : "inputMaterial"}>
           {this.props.options.map(
               function(item,i){
                   return <option key={i} value={item}>{item}</option>
               }
           )}
        </select>  
        <span className={this.props.error ? "highlight invalid" : "highlight"}></span>
        <span className={this.props.error ? "bar invalid" :"bar"}></span>
        <label className={this.props.error ? "invalid" : "normal"}>{this.props.labelName}</label>
        {this.props.error ? <span className="error">{this.props.error} </span> : null}
      </div>
    );
  }
}

