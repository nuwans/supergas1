import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';
import Header from '../components/Header';
class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    console.log(this.props)
  } 
  componentWillMount(){
      console.log(this.props);

  }  
  render() {
    const { location } = this.props;
    return (
      <div className="main_wrapper">
        {<Header actions={this.props.actions} location={this.props.location}  user={this.props.user}></Header>}
        <div  className="content_wrap">
          {this.props.children}
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
  