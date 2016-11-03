import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';
import Header from '../components/Header';
class App extends React.Component {
  componentWillMount(){
      console.log(this.props);

  }  
  render() {
    const { location } = this.props;
    return (
      <div className="main_wrapper">
        <Header actions={this.props.actions} user={this.props.user}></Header>
        <div  className="content_wrap">
          {this.props.children}
          <div className="default_content">
            <div className="d_form">
                <div className="d_c_element">
                    <div className="icon"><img src="./images/icons/new_connection_cable.svg"></img></div>
                    <div className="d_c_e_item">Get new gas connection</div>
                </div>
                <div className="d_c_element">
                    <div className="icon"><img src="./images/icons/raise_a_complaint.svg"></img></div>
                    <div className="d_c_e_item">Raice a complaint</div>
                </div>
                <div className="d_c_element">
                    <div className="icon"><img src="./images/icons/change_address.svg"></img></div>
                    <div className="d_c_e_item">Change Address</div>
                </div>
            </div>
          </div>
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
  