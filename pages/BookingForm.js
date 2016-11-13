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
import FloatingDate from '../components/FloatingDate';
import moment from 'moment';


import DatePicker from '../components/DatePicker';
class Home extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      acounts:this.props.accounts[0],
      defaultDate:moment().add(1,'d').format("YYYY-MM-DD"),
      mindate:moment().format("YYYY-MM-DD"),
      maxdate:moment().add(3,'d').format("YYYY-MM-DD"),
      currentHour:moment().format('HH'),
      Date:moment().add(1,'d').format("YYYY-MM-DD")
    };
    
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
  getDeliverySlots(){
    var now=moment();
    var selectedDate=moment(this.state.Date);
    var diference=selectedDate.diff(now,'hours');
    console.log(diference);
    if(diference<-15){
       return ['Evening'];
    } 
    else if((diference>= -15 )&&(diference<-12)){
       return ['Afternoon','Evening'];
    }
    else if(diference>= -9 ){
       return ['Morning','Afternoon','Evening'];
    } 
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
              <FloatingDate 
                labelName="Date"
                type="date"
                error={false}
                min={this.state.mindate}
                value={this.state.defaultDate}
                max={this.state.maxdate}
                name="Date"
                handler={this.handleChange.bind(this)} 
              />
             </div>
             <div className="half right">
              <FloatingSelect 
                  labelName="Delivery Slot"
                  error={false}
                  name="Franchise"
                  options={this.getDeliverySlots()}
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
