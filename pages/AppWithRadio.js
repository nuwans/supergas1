import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';
import Header from '../components/Header';
import BottomForm from '../components/BottomForm';
class App extends React.Component {
  componentWillMount(){
      console.log(this.props);

  }  
  render() {
    const { location,router} = this.props;
    return (
      <div className="main_wrapper">
        {/*<Header actions={this.props.actions} user={this.props.user}></Header>*/}
        <div  className="content_wrap">
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
  