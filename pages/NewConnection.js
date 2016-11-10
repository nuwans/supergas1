import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link } from "react-router";
import actions from '../redux/actions';
import Input from '../components/TextInput';
import FloatingInput from '../components/FloatingInput';
import FloatingSelect from '../components/FloatingSelect';
class Home extends React.Component {

  constructor(props, context) {
    super(props, context)
    console.log('this.props',this.props);
    console.log(this.state);
    this.state = {
      Pincode: '',
      PincodeError:'',
      showForm:false
    }
  } 
  handleChange(name,value){
    if(isNaN(value)==true){
      console.log('aa');
      this.setState({PincodeError:'Not a number'});
    }else{
       this.setState({PincodeError:''});
    }
    this.setState({Pincode:value});
  }
  ValidatePin(){
    this.setState({showForm:true});
  }
  handleTextInput(name,value){
    var temp={};
    temp[name]=value;
    this.setState(temp);
  }
  GetNewConnection(state){
    console.log('this.props',this.props.actions.addAccount(state));
    this.props.router.push('/booking');   
  }
  componentWillMount(){
    window.hideAll();
  }
  render() {
    return (
      <div className="content">
        <div className="form">
          <FloatingInput 
            labelName="Pin Code"
            type="text"
            error={this.state.PincodeError}
            name="Pincode"
            handler={this.handleChange.bind(this)} 
          />
          { this.state.showForm ? 
            <FloatingInput 
              labelName="Name"
              type="text"              
              name="Name"
              handler={this.handleTextInput.bind(this)} 
            />
            : ''
           }
          { this.state.showForm ? 
            <FloatingInput 
              labelName="Full Address"
              type="text"
              name="Address"
              handler={this.handleTextInput.bind(this)} 
            />
            : ''
           }
          { this.state.showForm ? 
            <FloatingSelect 
              labelName="Connection Type"
              name="ConnectionType"
              options={['13 KG','14 KG', '15 KG']}
              handler={this.handleTextInput.bind(this)} 
            />
            : ''
           }
           { this.state.showForm ? 
              <div className="group">
                <button onClick={this.GetNewConnection.bind(this,this.state)} className="f_btn">GET NEW CONNECTION</button>
              </div>
            : 
              <div className="group">
                <button onClick={this.ValidatePin.bind(this)} className="f_btn">Next</button>
              </div>
           }
          
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state
}
function mapDispatchToProps(dispatch) {
 return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)