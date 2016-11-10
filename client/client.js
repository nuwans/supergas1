import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect, hashHistory, browserHistory } from 'react-router';
import App from '../pages/App';
import AppWithDropDown from '../pages/AppWithDropDown';
import AppWithRadio from '../pages/AppWithRadio';
import AddAcount from '../pages/AddAccount';
import NewConnection from '../pages/NewConnection';
import Complains from '../pages/Complains';
import BookingForm from '../pages/BookingForm';
import mobile from './mobile';
/*import Homepage2 from '../pages/Home2';
import Homepage3 from '../pages/Home3';
import Homepage3Pop from '../pages/Home3PopUP';

import BookingForm1 from '../pages/BookingForm1';
*/
/*import App from '../components/App';*/
import configureStore from '../redux/store';
import { Provider } from 'react-redux';
require("../css/style.css");

window.jsInterface = mobile();
window.qoFocus = ()=>{};
window.showAll = ()=> {
    window.jsInterface.showActionBar();
};
window.hideAll = ()=> {
    window.jsInterface.hideActionBar();
};

let initialState = {
  todos: [],
  user: {
    username: 'Nuwan',
    id: 1,
    logged:false,
    selectedTab:'REFIL'
  },
  accounts:[]
}

let store = configureStore(initialState)
render(
  <Provider store={store}>
     <Router history={hashHistory}>
        <Route  component={App}>
          <Route path="complain" component={Complains}></Route>
          <Route path="new" component={NewConnection}></Route>
        </Route>
        <Route path="/" component={AppWithRadio}>   
          <IndexRoute component={AddAcount}></IndexRoute>
          {/*<Route path="new" component={NewConnection}></Route>*/}
        </Route>
        <Route component={AppWithDropDown}>   
          <Route path="booking" component={BookingForm}></Route>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
