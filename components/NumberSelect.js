import React from "react";
export default class Select extends React.Component {
  constructor() {
    super()
    console.log(this.props);
    this.state={
        value:'',
        selectedIndex:1,
        open:false
    }
  } 
  componentDidMount(){
      this.setState({value:this.props.numbers[0]});
  }
  handleSelectChange(e){
     this.props.handler(this.props.name,e.target.value);
  }
  openDropDown(){
      this.setState({open:!this.state.open});
  }
  changeOption(option,i){
      this.setState({
          value:option,
          selectedIndex:i+1,
          open:false
      });
  }
  getOptionList(){
       return this.props.numbers.map(
          function(option,i){
              if(option!=this.state.value){
                return <li className="dd_element" onClick={this.changeOption.bind(this,option,i)}  key={i}>{option}</li>
              }  
          }.bind(this)
      );
  }
  closeDropDown(){
      //this.setState({open:false});
  }
  render() {
    return (
        <div className="top_dropdown" onMouseLeave={this.closeDropDown.bind(this)} >
            <div className="sel_number">
                <div className="selected_op">iD #{this.state.selectedIndex}( {this.state.value} )</div>
                <div className="open_dd" onClick={this.openDropDown.bind(this)}><img src="./images/icons/account_dropdown.svg"></img></div>
            </div>
            {this.state.open ?
                 <ul className="dd_list">
                    {this.getOptionList()}
                    <li className="dd_element add_number"> + ADD ANOTHER ACCOUNT </li>
                </ul>:
                ''
            }       
        </div>
    );
  }
}

