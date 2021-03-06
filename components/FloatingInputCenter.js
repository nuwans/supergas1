import React from "react";
export default class FloatingInputCenter extends React.Component {
  constructor() {
    super()
    console.log(this.props);
    this.state={
        value:''
    }
  } 
  handleChange(e){
      this.setState({value:e.target.value})
      this.props.handler(this.props.name,e.target.value);
  }
  render() {
    return (
      <div className="m_group">
        <input className={this.props.error ? "inputMaterial invalid" : "inputMaterial"}
          onChange={this.handleChange.bind(this)}
          type={this.props.type}
          defaultValue={this.props.value}
          required
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off" style={{textAlign:'center'}} />
        <span className={this.props.error ? "highlight invalid" : "highlight"}></span>
        <span className={this.props.error ? "bar invalid" :"bar"}></span>
        <label className={this.props.error ? "invalid" : "normal"}>{this.props.labelName}</label>
        {this.props.error ? <span className="error">{this.props.error} </span> : null}
      </div>
    );
  }
}

