import React from "react";
export default class BottomForm extends React.Component {
  constructor() {
    super()
    console.log(this.props);
    this.state={
    }
  } 
  Complain(){
    console.log('a');
    this.props.router.push('/complain');
  }
  NewConnection(){
    this.props.router.push('/new');
  }
  render() {
    return (
        <div className="default_content">
            <div className="d_form">
                <div  onClick={this.NewConnection.bind(this)}  className="d_c_element">
                    <div className="icon"><img src="./images/icons/new_connection_cable.svg"></img></div>
                    <div className="d_c_e_item">Get new gas connection</div>
                </div>
                <div onClick={this.Complain.bind(this)} className="d_c_element">
                    <div className="icon"><img src="./images/icons/raise_a_complaint.svg"></img></div>
                    <div className="d_c_e_item">Raice a complaint</div>
                </div>
                <div className="d_c_element">
                    <div className="icon"><img src="./images/icons/change_address.svg"></img></div>
                    <div className="d_c_e_item">Change Address</div>
                </div>
            </div>
        </div>
    );
  }
}

