import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';
import {Link } from "react-router";
import LabelInput from '../components/LabelInput';
/*import Input from '../components/TextInput';*/
/*import LabelSelect from '../components/LabelSelect';*/
import LabelInputFull from '../components/LabelInputFull';
import FloatingSelect from '../components/FloatingSelect';
import FloatingInput from '../components/FloatingInput';

import DatePicker from '../components/DatePicker';
class Home extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = this.props.accounts[0];
  } 
  handleChange(name,value){
    var temp={};
    temp[name]=value;
    this.setState(temp);
  }
  proceedToPayment(state){
    let message = JSON.stringify(state);
    window.jsInterface.processQuickOrder(JSON.stringify({
        "amount":+900,
        "message":'',
        "openOnlinePayment": true,
        "createPaymentRequest": false,
        "comments": message
    })); 
  }
  componentWillMount(){
    window.hideAll();
  } 
  render() {
    return (
      <div className="content">
        <div className="form">          
          <FloatingInput 
              labelName="Name"
              type="text"
              name="Name"
              handler={this.handleChange.bind(this)} 
            />           
          {/*<LabelInput name="AccountNumber" label="Account No." handler={this.handleChange.bind(this)}>
            10000001010
          </LabelInput>*/}
          <FloatingSelect 
              labelName="Franchise"
              error={false}
              name="Franchise"
              options={['HSR Layout','Bommanahalli','BTM Layout']}
              handler={this.handleChange.bind(this)} 
            />
          <FloatingSelect 
              labelName="Connection Type"
              error={false}
              name="ConnectionType"
              options={['13 Kg','14 KG', '15 KG']}
              handler={this.handleChange.bind(this)} 
            />
          <FloatingInput 
              labelName="Full Address"
              type="text"
              name="Address"
              handler={this.handleChange.bind(this)} 
            />  
          
         
          <div className="half_wrap">
             <div className="half left">
              <FloatingInput 
                labelName="Date"
                type="date"
                error={false}
                value="2016-01-01"
                name="Date"
                handler={this.handleChange.bind(this)} 
              />
             </div>
             <div className="half right">
              <FloatingSelect 
                  labelName="Delivery Slot"
                  error={false}
                  name="Franchise"
                  options={['Morning','Afternoon','Evening']}
                  handler={this.handleChange.bind(this)} 
                />
              </div>
          </div>
          
          
           <div className="group">
            <button className="f_btn" onClick={this.proceedToPayment.bind(this,this.state)}>Pay</button>
          </div>
          
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log('state>>>>',state);
  return state
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
