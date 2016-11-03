import React from "react";
export default class Radio extends React.Component {
  constructor() {
    super()
    console.log(this.props);
  } 
  handleTextChange(e){
      this.props.handler(this.props.name,this.props.value);
  }
  render() {
    return (
        <div className="compl_radio">
            <div className="c_r_r">
                <input  type="radio"  onChange={this.handleTextChange.bind(this)} value={this.props.value} checked={this.props.checked}></input>
            </div>
            <div className="c_r_label">{this.props.value}</div>
        </div>
    );
  }
}
