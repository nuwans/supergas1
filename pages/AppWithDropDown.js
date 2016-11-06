import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';
import Header from '../components/Header';
import BottomForm from '../components/BottomForm';
import SelectNumber from '../components/NumberSelect';
const numbers=[
    '45454545454',
    '98898988444',
    '98898982214'
];
class App extends React.Component {
  componentWillMount(){
      console.log(this.props);
  }  
  selectPhoneNumber(name,number){
      console.log(name,number);
  }
  render() {
    const { location,router } = this.props;
    return (
      <div className="main_wrapper">
        {/*<Header actions={this.props.actions}  user={this.props.user}></Header>*/}
        <div  className="content_wrap">
          <SelectNumber name='number' handler={this.selectPhoneNumber.bind(this)}  numbers={numbers}></SelectNumber>
          {this.props.children}
          <BottomForm router={router}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(App)
  